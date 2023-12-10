import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { Header } from '../../components'
import { BRAND_NAME } from '../../constants';
import { useRequest } from '../../hooks';
import { CarDetailsResponse, MotorcycleDetailsResponse } from '../../interfaces';
import './style.scss'

export function VehicleDetailsPage() {
    const [vehicle, setVehicle] = useState<CarDetailsResponse | MotorcycleDetailsResponse>();
    const [currentImage, setCurrentImage] = useState<number>(0);

    const { getCarDetails, getMotorcycleDetails } = useRequest();
    const { id } = useParams()

    const isPreviousImageButtonDisabled = currentImage === 0
    const isNextImageButtonDisabled = currentImage + 1 === vehicle?.images?.length

    useEffect(() => {
        async function getVehicleDetails() {
            if (BRAND_NAME === 'mazecar') {
                const { data } = await getCarDetails(Number(id))
                setVehicle(data)
            } else {
                const { data } = await getMotorcycleDetails(Number(id))
                setVehicle(data)
            }
        }

        getVehicleDetails()
    }, [])

    function handleClickPreviousImage() {
        setCurrentImage((prevImageIndex) => prevImageIndex - 1)
    }

    function handleClickNextImage() {
        setCurrentImage((prevImageIndex) => prevImageIndex + 1)
    }

    return <main className="details-page-container">
        <Header />
        
        <div className="vehicle-details-container">
            <div className="vehicle-image-container">
                <button className="image-button" onClick={handleClickPreviousImage} disabled={isPreviousImageButtonDisabled}>
                    <ArrowBack />
                </button>
                <img src={vehicle?.images[currentImage]} alt={`${vehicle?.brand} ${vehicle?.model}`} className='vehicle-image'/>
                <button className="image-button" onClick={handleClickNextImage} disabled={isNextImageButtonDisabled}>
                    <ArrowForward />
                </button>
            </div>
            
            <div className="vehicle-info-container"></div>
        </div>
    </main>
}