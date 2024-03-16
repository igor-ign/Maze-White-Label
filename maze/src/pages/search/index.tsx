import { useEffect, useState } from "react";
import { Header } from "../../components";
import { BRAND_NAME } from "../../constants";
import { useRequest } from "../../hooks";
import { VehicleSearchResponse } from "../../interfaces";
import { VehicleCard } from "./components";
import './style.scss'
import { CircularProgress } from "@mui/material";

export function Search() {
    const [vehicles, setVehicles] = useState<VehicleSearchResponse[]>()
    const [isVehiclesLoading, setIsVehiclesLoading] = useState<boolean>(false)
    const { getCarSearch, getMotorcycleSearch } = useRequest()

    const currentBrand = BRAND_NAME

    useEffect(() => {
        async function getVehicleInformation() {
            setIsVehiclesLoading(true)
            try {
                if (currentBrand === 'mazecar') {
                    const { data } = await getCarSearch()
                    setVehicles(data)
                }

                if (currentBrand === 'mazemotorcycle') {
                    const { data } = await getMotorcycleSearch()
                    setVehicles(data) 
                }

            } catch(error) {
                console.error(error)
            } finally {
                setIsVehiclesLoading(false)
            }
        }

        getVehicleInformation()
    }, [])

    return <div className="search-page-container">
        <Header />

        {/* TODO: Add page filters */}

        <main className="vehicle-list-container">
            <ul className="vehicle-list">
                {isVehiclesLoading && <li className="loading-container"><CircularProgress style={{ color: currentBrand === 'mazecar' ? '#F93E07' : '#3A3D8A'}}/></li>}
                {vehicles?.map(({id, brand, model, price, year, image}) => {
                    return <VehicleCard id={id} brand={brand} model={model} price={price} year={year} image={image}/>
                })}
            </ul>
        </main>
    </div>
}