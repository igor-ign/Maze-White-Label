import { useNavigate } from 'react-router-dom';
import { getAppRoutePaths, getVehiclePriceFormatted } from '../../../../utils';
import { VehicleOverviewCardProps } from '../../interfaces';
import './style.scss'

export function VehicleOverviewCard({ id, brand, image, model, price }: VehicleOverviewCardProps) {
    const navigate = useNavigate()

    const appRoutes = getAppRoutePaths(id)

    return <li className="vehicle-list-item" key={id}>
        <img src={image} alt={`${brand} ${model} with a white background`} />
        <span className="item-brand">{brand}</span>
        <span className="item-name">{model}</span>
        <span className="item-price">{getVehiclePriceFormatted(price)}</span>
        <button className='item-buy-button' onClick={() => navigate(appRoutes.VEHICLE_DETAILS)}>See Details</button>
    </li>
}