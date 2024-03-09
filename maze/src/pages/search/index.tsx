import { Header } from "../../components";
import { VehicleCard } from "./components";
import './style.scss'

export function Search() {
    return <div className="search-page-container">
        <Header />

        {/* TODO: Add page filters and vehicle list */}

        <main className="vehicle-list-container">
            <ul className="vehicle-list">
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            </ul>
        </main>
    </div>
}