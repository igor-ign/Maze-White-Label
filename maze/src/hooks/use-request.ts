import axios from "axios"
import { CarDetailsResponse, MotorcycleDetailsResponse, VehicleListResponse } from "../interfaces"

export function useRequest() {
    const baseUrl = 'http://localhost:3000'

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

    return {
        getCarOverview,
        getMotorcycleOverview,
        getCarDetails,
        getMotorcycleDetails
    }
}