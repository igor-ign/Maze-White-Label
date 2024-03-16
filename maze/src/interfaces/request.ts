export interface VehicleListResponse {
    id: number;
    brand: string;
    image: string;
    model: string;
    price: number;
}

export type TransmissionTypes = "AUTOMATIC" | "MANUAL";
export type VehicleColorTypes = "White" | "Black" | "Green" | "Red" | "Blue" | "Silver" | "Grey";
export type VehicleFuelTypes = "Gasoline" | "Diesel";
type MotorcycleBrandTypes = 'Kawasaki' | 'Ducatti' | 'Honda' | 'BMW' | 'Suzuki' | 'Yamaha'
type CarBrandTypes = 'Nissan' | 'BMW' | 'Alfa Romeo' | 'Volvo' | 'Land Rover' | 'Mercedes-Benz' | 'Jaguar' | 'Ford' | 'Volkswagen'
export type VehicleBrandTypes = MotorcycleBrandTypes & CarBrandTypes

export interface CarDetailsResponse {
    id: number;
    brand: string;
    model: string;
    images: string[];
    km: number;
    price: number;
    year: number;
    tranmission: TransmissionTypes;
    color: VehicleColorTypes;
    fuel: VehicleFuelTypes;
}

export interface MotorcycleDetailsResponse {
    id: number;
    brand: string;
    model: string;
    images: string[];
    km: number;
    price: number;
    year: number;
    color: VehicleColorTypes;
}

export interface VehicleSearchResponse {
    id: number;
    brand: VehicleBrandTypes;
    model: string;
    image: string;
    price: number;
    year: number;
}

export interface CarSearchFilters {
    brand?: CarBrandTypes;
    model?: string;
    price?: number;
    year?: string;
}

export interface MotorcycleSearchFilters {
    brand?: MotorcycleBrandTypes;
    model?: string;
    price?: number;
    year?: string;
}