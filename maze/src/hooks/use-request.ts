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
        return axios.get<VehicleSearchResponse[]>(`${baseUrl}/car-search`, { params: filters })
    }

    async function getMotorcycleSearch(filters?: MotorcycleSearchFilters) {
        return axios.get<VehicleSearchResponse[]>(`${baseUrl}/motorcycle-search`, { params: filters })
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