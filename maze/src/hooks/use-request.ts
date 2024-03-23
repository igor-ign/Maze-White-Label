import axios from "axios"
import { CarDetailsResponse, CarSearchFilters, MotorcycleDetailsResponse, MotorcycleSearchFilters, VehicleListResponse, VehicleSearchResponse } from "../interfaces"

export function useRequest() {
    const baseUrl = 'http://localhost:3001'

    async function getCarOverview() {
        return await axios.get<VehicleListResponse[]>(`${baseUrl}/car-overview`)
    }

    async function getMotorcycleOverview() {
        return await axios.get<VehicleListResponse[]>(`${baseUrl}/motorcycle-overview`)
    }

    async function getCarDetails(id: number) {
        return await axios.get<CarDetailsResponse>(`${baseUrl}/cars/${id}`)
    }

    async function getMotorcycleDetails(id: number) {
        return await axios.get<MotorcycleDetailsResponse>(`${baseUrl}/motorcycles/${id}`)
    }

    async function getCarSearch(filters?: CarSearchFilters) {
        const filtersWithoutMaxAndMinPrice = {
            brand: filters?.brand,
            year: filters?.year
        }

        return axios.get<VehicleSearchResponse[]>(`${baseUrl}/car-search?price_gt=${filters?.minPrice}&price_lt=${filters?.maxPrice}`, { params: filtersWithoutMaxAndMinPrice })
    }

    async function getMotorcycleSearch(filters?: MotorcycleSearchFilters) {
        const filtersWithoutMaxAndMinPrice = {
            brand: filters?.brand,
            year: filters?.year
        }

        return axios.get<VehicleSearchResponse[]>(`${baseUrl}/motorcycle-search?price_gt=${filters?.minPrice}&price_lt=${filters?.maxPrice}`, { params: filtersWithoutMaxAndMinPrice })
    }

    return {
        getCarOverview,
        getMotorcycleOverview,
        getCarDetails,
        getMotorcycleDetails,
        getCarSearch,
        getMotorcycleSearch 
    }
}