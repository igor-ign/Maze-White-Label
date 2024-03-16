import { useNavigate } from 'react-router-dom'
import { getVehiclePriceFormatted } from '../../../../utils'
import { VehicleCardProps } from '../../interfaces'
import './style.scss'

export function VehicleCard({ id, image, brand, model, price}: VehicleCardProps) {
    const navigate = useNavigate()

    return <li className="vehicle-card-container">
        <img className='vehicle-image' src={image} alt={`${model} card`}/>
        <span className="brand-name">{brand}</span>
        <h3 className="vehicle-name">{model}</h3>
        <span className="vehicle-price">{getVehiclePriceFormatted(price)}</span>
        <button className="info-button" onClick={() => navigate(`/vehicle/${id}`)}>See Details</button>
    </li>
}