import './style.scss'

export function VehicleCard() {
    return <li className="vehicle-card-container">
        <div className='mock-photo'>a</div>
        <span className="brand-name">Volkswagen</span>
        <h3 className="vehicle-name">Golf 2024</h3>
        <span className="vehicle-price">$100.000,00</span>
        <button className="info-button">See Details</button>
    </li>
}