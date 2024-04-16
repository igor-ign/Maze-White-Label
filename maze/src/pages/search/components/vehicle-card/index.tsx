import { useNavigate } from 'react-router-dom'
import { getAppRoutePaths, getVehiclePriceFormatted } from '../../../../utils'
import { VehicleCardProps } from '../../interfaces'
import './style.scss'

export function VehicleCard({ id, image, brand, model, price}: VehicleCardProps) {
    const navigate = useNavigate()

    const appRoutes = getAppRoutePaths(id)

    return <li className="vehicle-card-container" key={id}>
        <img className='vehicle-image' src={image} alt={`${model} card`}/>
        <span className="brand-name">{brand}</span>
        <h3 className="vehicle-name">{model}</h3>
        <span className="vehicle-price">{getVehiclePriceFormatted(price)}</span>
        <button className="info-button" onClick={() => navigate(appRoutes.VEHICLE_DETAILS)}>See Details</button>
    </li>
}