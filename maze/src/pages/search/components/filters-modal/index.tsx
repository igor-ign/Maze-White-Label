import CloseIcon from '@mui/icons-material/Close';
import { FiltersModalProps } from "../../interfaces";
import './style.scss'

export function FiltersModal({ setFilters, setIsModalOpen }: FiltersModalProps) {
    // minPrice?: number;
    // maxPrice?: number;
    return <div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title">Filters</h1>
                <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                    <CloseIcon/>
                </button>
            </div>
            <form className="filters-form">
                <label>
                    Brand
                    <select name="brand"></select>    
                </label>
                <label>
                    Year
                    <select name="year"></select>    
                </label>
            </form>
        </div>
    </div>
}