import { CarSearchFilters, MotorcycleSearchFilters } from "../../../interfaces";

export interface FiltersModalProps {
    setFilters: (filters: CarSearchFilters | MotorcycleSearchFilters) => void;
    setIsModalOpen: (isOpen: boolean) => void
}