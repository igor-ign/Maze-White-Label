import { VehicleBrandTypes } from "../../../interfaces";

export interface VehicleCardProps {
    id: number;
    image: string;
    brand: VehicleBrandTypes;
    model: string;
    price: number;
    year: number;
}