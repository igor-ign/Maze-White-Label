import { VehicleOverviewCardProps } from '../../interfaces';
import './style.scss'

export function VehicleOverviewCard({ id, brand, image, model, price }: VehicleOverviewCardProps) {
    return <li className="vehicle-list-item" key={id}>
        <img src={image} alt={`${brand} ${model} with a white background`} />
        <span className="item-brand">{brand}</span>
        <span className="item-name">{model}</span>
        <span className="item-price">${price}</span>
        <button className='item-buy-button'>Buy</button>
    </li>
}