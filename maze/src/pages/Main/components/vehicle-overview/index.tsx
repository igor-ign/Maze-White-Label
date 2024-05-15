import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BRAND_NAME } from '../../../../constants'
import { useRequest } from '../../../../hooks'
import { SkeletonListUtilProps, VehicleListResponse } from '../../../../interfaces'
import { getAppRoutePaths, getSkeletonLoaderList } from '../../../../utils'
import { VehicleOverviewCard } from '../vehicle-overview-card'
import './style.scss'
import { Toast } from '../../../../components'

export function VehicleOverview({ brandKeyword }: { brandKeyword: string}) {
    const [isListInViewport, setIsListInViewport] = useState<boolean>()
    const [vehicleList, setVehicleList] = useState<VehicleListResponse[]>([])
    const [isOverviewLoading, setIsOverviewLoading] = useState<boolean>(true)
    const [isToastOpen, setIsToastOpen] = useState<boolean>(false)

    const { getCarOverview, getMotorcycleOverview } = useRequest()
    const navigate = useNavigate()
    const carOverviewListRef = useRef(null)
    
    const appRoutePaths = getAppRoutePaths()

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        const intersectionObserver = new IntersectionObserver((entries) => {
            const [ entry ] = entries
            setIsListInViewport(entry.isIntersecting)
        }, observerOptions)

        if (carOverviewListRef.current) intersectionObserver.observe(carOverviewListRef.current)

        return () => {
            if (carOverviewListRef.current) intersectionObserver.unobserve(carOverviewListRef.current)
        }
    }, [])

    useEffect(() => {
        async function getVehicleOverviewList() {
            try {
                const currentBrand = BRAND_NAME

                if (currentBrand === 'mazecar') {
                    const { data } = await getCarOverview()
                    setVehicleList(data)
                }

                if (currentBrand === 'mazemotorcycle') {
                    const { data } = await getMotorcycleOverview()
                    setVehicleList(data)
                }

                setIsOverviewLoading(false)
            } catch (error) {
                console.error(error)
                setIsToastOpen(true)
            }
        }

        if (isListInViewport && vehicleList.length === 0) getVehicleOverviewList()
    }, [isListInViewport])

    function renderVehicleListItems() {
        if (isOverviewLoading) {
            const skeletonListProperties: SkeletonListUtilProps = {
                itemsWidth: '200px',
                itemsHeight: '234px',
                itemsBorderRadius: '5px',
                amountOfSkeletonItems: 10
            }

            return getSkeletonLoaderList(skeletonListProperties)
        }

        return vehicleList.map(({ id, brand, image, model, price}) => {
            return <VehicleOverviewCard id={id}  brand={brand} image={image} model={model} price={price} key={id}/>
        })
    }

    return <section className="vehicle-overview-container">
        <Toast 
        handleCloseToast={() => setIsToastOpen(false)} 
        isToastOpen={isToastOpen} 
        message='Error while trying to load vehicles.'
        />
        <div className="vehicle-overview-content" id='vehicles'>
            <h1 className="overview-title">Some of the available {brandKeyword}s</h1>

            <ul className="vehicle-list" ref={carOverviewListRef}>
                {renderVehicleListItems()}
            </ul>

            {!isOverviewLoading && 
            <button className="more-button" onClick={() => navigate(appRoutePaths.SEARCH_VEHICLE)}>More</button>
            }
        </div>
        </section>
}