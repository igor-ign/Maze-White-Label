import axios from "axios"
import { 
    CarDetailsResponse, 
    CarSearchFilters, 
    MotorcycleDetailsResponse, 
    MotorcycleSearchFilters, 
    UserMessageRequest, 
    VehicleListResponse, 
    VehicleSearchResponse
} from "../interfaces"

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
        const filtersFormatted = {
            brand: filters?.brand,
            year: filters?.year,
            price_start: filters?.minPrice, 
            price_limit: filters?.maxPrice
        };
    
        return await axios.get<VehicleSearchResponse[]>(`${baseUrl}/car-search`, { params: filtersFormatted });
    }

    async function getMotorcycleSearch(filters?: MotorcycleSearchFilters) {
        const filtersFormatted = {
            brand: filters?.brand,
            year: filters?.year,
            price_start: filters?.minPrice, 
            price_limit: filters?.maxPrice
        };
    
        return await axios.get<VehicleSearchResponse[]>(`${baseUrl}/motorcycle-search`, { params: filtersFormatted });
    }

    async function getMazeCarBrands() {
        return await axios.get<string[]>(`${baseUrl}/mazecar-brands`)
    }

    async function getMazeCarYears() {
        return await axios.get<string[]>(`${baseUrl}/mazecar-years`)
    }

    async function getMazeMotorcycleBrands() {
        return await axios.get<string[]>(`${baseUrl}/mazemotorcycle-brands`)
    }

    async function getMazeMotorcycleYears() {
        return await axios.get<string[]>(`${baseUrl}/mazemotorcycle-years`)
    }

    async function postUserMessage(body: UserMessageRequest) {
        return await axios.post(`${baseUrl}/user-messages`, {...body})
    }

    return {
        getCarOverview,
        getMotorcycleOverview,
        getCarDetails,
        getMotorcycleDetails,
        getCarSearch,
        getMotorcycleSearch,
        getMazeCarBrands,
        getMazeCarYears,
        getMazeMotorcycleBrands,
        getMazeMotorcycleYears,
        postUserMessage
    }
}