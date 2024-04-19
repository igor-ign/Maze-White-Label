import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { Header, SkeletonLoader } from '../../components'
import { BRAND_NAME } from '../../constants';
import { useRequest } from '../../hooks';
import { CarDetailsResponse, MotorcycleDetailsResponse } from '../../interfaces';
import { getVehiclePriceFormatted } from '../../utils';
import { CarInfo, MotorcycleInfo } from './components';
import './style.scss'

export function VehicleDetailsPage() {
    const [vehicle, setVehicle] = useState<CarDetailsResponse | MotorcycleDetailsResponse>();
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(false);

    const { getCarDetails, getMotorcycleDetails } = useRequest();
    const { id } = useParams()

    const isPreviousImageButtonDisabled = currentImage === 0
    const isNextImageButtonDisabled = currentImage + 1 === vehicle?.images?.length

    useEffect(() => {
        async function getVehicleDetails() {
            setIsDetailsLoading(true)
            if (BRAND_NAME === 'mazecar') {
                const { data } = await getCarDetails(Number(id))
                setVehicle(data)
            } else {
                const { data } = await getMotorcycleDetails(Number(id))
                setVehicle(data)
            }
            setIsDetailsLoading(false)
        }

        getVehicleDetails()
    }, [])

    function renderImageInfo() {
        if (!isDetailsLoading) {
            return (<img src={vehicle?.images[currentImage]} alt={`${vehicle?.brand} ${vehicle?.model}`} className='vehicle-image'/>)
        }

        return <SkeletonLoader width='500px' height='300px' borderRadius='0'/>
    }

    function renderVehicleInfo() {
        if (isDetailsLoading) {
            return <SkeletonLoader width='400px' height='334px' borderRadius='0px'/>
        }

        return  <div className="vehicle-info-container">
                    <h1 className="vehicle-name">
                        {vehicle?.brand} {vehicle?.model}
                    </h1>

                    <ul className="information-box-list">
                        {BRAND_NAME === 'mazecar' ? 
                        <CarInfo car={vehicle as CarDetailsResponse}/> 
                        : 
                        <MotorcycleInfo motorcycle={vehicle as MotorcycleDetailsResponse}/>}
                    </ul>

                    <span className="vehicle-price">{getVehiclePriceFormatted(vehicle?.price || 0)}</span>
                    <button className="buy-button">Buy Now</button>
                </div>
    }

    return <main className="details-page-container">
        <Header />
        
        <div className="vehicle-details-container">
            <div className="vehicle-image-container">
                <button className="image-button previous" onClick={() => setCurrentImage((prevImageIndex) => prevImageIndex - 1)} disabled={isPreviousImageButtonDisabled || isDetailsLoading}>
                    <ArrowBack />
                </button>

                {renderImageInfo()}

                <button className="image-button next" onClick={() => setCurrentImage((prevImageIndex) => prevImageIndex + 1)} disabled={isNextImageButtonDisabled || isDetailsLoading}>
                    <ArrowForward />
                </button>
            </div>

            {renderVehicleInfo()}
        </div>
    </main>
}