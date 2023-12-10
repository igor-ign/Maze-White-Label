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

export interface CarDetailsResponse {
    id: number;
    brand: string;
    model: string;
    description: string;
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