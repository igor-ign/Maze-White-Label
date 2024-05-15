import { useEffect, useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Header, Toast } from "../../components";
import { BRAND_NAME } from "../../constants";
import { useRequest } from "../../hooks";
import { CarSearchFilters, MotorcycleSearchFilters, SkeletonListUtilProps, VehicleSearchResponse } from "../../interfaces";
import { getSkeletonLoaderList } from "../../utils";
import { FiltersModal, VehicleCard } from "./components";
import { INITIAL_VEHICLE_SEARCH_FILTERS } from "./constants";
import './style.scss'

export function Search() {
    const [vehicles, setVehicles] = useState<VehicleSearchResponse[]>()
    const [isVehiclesLoading, setIsVehiclesLoading] = useState<boolean>(false)
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)
    const [filters, setFilters] = useState<CarSearchFilters | MotorcycleSearchFilters>(INITIAL_VEHICLE_SEARCH_FILTERS)
    const [isToastOpen, setIsToastOpen] = useState<boolean>(false)

    const { getCarSearch, getMotorcycleSearch } = useRequest()

    const currentBrand = BRAND_NAME

    useEffect(() => {
        async function getVehicleInformation() {
            setIsVehiclesLoading(true)
            try {
                if (currentBrand === 'mazecar') {
                    const { data } = await getCarSearch(filters as CarSearchFilters)
                    setVehicles(data)
                }

                if (currentBrand === 'mazemotorcycle') {
                    const { data } = await getMotorcycleSearch(filters as MotorcycleSearchFilters)
                    setVehicles(data) 
                }

            } catch(error) {
                console.error(error)
                setIsToastOpen(true)
            } finally {
                setIsVehiclesLoading(false)
            }
        }

        getVehicleInformation()
    }, [filters.brand, filters.maxPrice, filters.minPrice, filters.year])

    function renderVehicleListItem() {
        if (isVehiclesLoading) {
            const skeletonListProperties: SkeletonListUtilProps = {
                itemsWidth: '280px',
                itemsHeight: '300px',
                itemsBorderRadius: '5px',
                amountOfSkeletonItems: 12
            }

            return getSkeletonLoaderList(skeletonListProperties)
        }

        return vehicles?.map(({id, brand, model, price, year, image}) => {
            return <VehicleCard id={id} brand={brand} model={model} price={price} year={year} image={image}/>
        })
    }

    return <div className="search-page-container">
        <Header />

        {isFiltersOpen && 
            <FiltersModal 
            setFilters={(filters) => 
            setFilters(filters)} 
            setIsModalOpen={(isOpen) => setIsFiltersOpen(isOpen)}
            clearVehicles={() => setVehicles([])}
            />
        }
        <Toast
        handleCloseToast={() => setIsToastOpen(false)} 
        isToastOpen={isToastOpen} 
        message='Error while trying to load vehicles.'
        />
        <main className="vehicle-list-container">
            <button className="filters-button" onClick={() => setIsFiltersOpen(true)}>
                <FilterAltIcon />
            </button>
            
            <ul className="vehicle-list">
                {renderVehicleListItem()}
            </ul>
        </main>
    </div>
}