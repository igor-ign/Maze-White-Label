import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Header } from "../../components";
import { BRAND_NAME } from "../../constants";
import { useRequest } from "../../hooks";
import { CarSearchFilters, MotorcycleSearchFilters, VehicleSearchResponse } from "../../interfaces";
import { FiltersModal, VehicleCard } from "./components";
import { INITIAL_VEHICLE_SEARCH_FILTERS } from "./constants";
import './style.scss'

export function Search() {
    const [vehicles, setVehicles] = useState<VehicleSearchResponse[]>()
    const [isVehiclesLoading, setIsVehiclesLoading] = useState<boolean>(false)
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)
    const [filters, setFilters] = useState<CarSearchFilters | MotorcycleSearchFilters>(INITIAL_VEHICLE_SEARCH_FILTERS)
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
            } finally {
                setIsVehiclesLoading(false)
            }
        }

        getVehicleInformation()
    }, [filters.brand, filters.maxPrice, filters.minPrice, filters.year])

    return <div className="search-page-container">
        <Header />

        {isFiltersOpen && 
        <FiltersModal 
        setFilters={(filters) => 
        setFilters(filters)} 
        setIsModalOpen={(isOpen) => setIsFiltersOpen(isOpen)}
        clearVehicles={() => setVehicles([])}
        />}
        <main className="vehicle-list-container">
            <button className="filters-button" onClick={() => setIsFiltersOpen(true)}>
                <FilterAltIcon />
            </button>
            
            <ul className="vehicle-list">
                {isVehiclesLoading && <li className="loading-container"><CircularProgress style={{ color: currentBrand === 'mazecar' ? '#F93E07' : '#3A3D8A'}}/></li>}
                {vehicles?.map(({id, brand, model, price, year, image}) => {
                    return <VehicleCard id={id} brand={brand} model={model} price={price} year={year} image={image}/>
                })}
            </ul>
        </main>
    </div>
}