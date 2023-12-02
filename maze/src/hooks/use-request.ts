import axios from "axios"
import { VehicleListResponse } from "../interfaces"

export function useRequest() {
    const baseUrl = 'http://localhost:3000'

    async function getCarOverview() {
        return await axios.get<VehicleListResponse[]>(`${baseUrl}/car-overview`)
    }

    async function getMotorcycleOverview() {
        return await axios.get<VehicleListResponse[]>(`${baseUrl}/motorcycle-overview`)
    }

    return [
        getCarOverview,
        getMotorcycleOverview
    ]
}