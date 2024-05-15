import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { MazeSelect, Toast } from '../../../../components';
import { BRAND_NAME } from '../../../../constants';
import { useRequest } from '../../../../hooks';
import { SelectData, VehicleBrandTypes } from '../../../../interfaces';
import { getNumbersFromString } from '../../../../utils';
import { FiltersModalProps } from "../../interfaces";
import { getOptionsFormatted } from '../../utils';
import './style.scss'

export function FiltersModal({ setFilters, setIsModalOpen, clearVehicles }: FiltersModalProps) {
    const [isFiltersLoading, setIsFiltersLoading] = useState<boolean>(false)
    const [brands, setBrands] = useState<SelectData[]>([])
    const [years, setYears] = useState<SelectData[]>([])
    const [minPrice, setMinPrice] = useState<string>('0')
    const [maxPrice, setMaxPrice] = useState<string>('100000')
    const [selectedBrand, setSelectedBrand] = useState<VehicleBrandTypes>()
    const [selectedYear, setSelectedYear] = useState<string>('')
    const [isToastOpen, setIsToastOpen] = useState<boolean>(false)

    const { 
        getMazeCarBrands, 
        getMazeCarYears, 
        getMazeMotorcycleBrands, 
        getMazeMotorcycleYears 
    } = useRequest()

    useEffect(() => {
        async function getFiltersData() {
            setIsFiltersLoading(true)
            try {
                if (BRAND_NAME === 'mazecar') {
                    const [mazeCarBrands, mazeCarYears] = await Promise.all([
                        getMazeCarBrands(),
                        getMazeCarYears()
                    ])
                    setBrands(getOptionsFormatted(mazeCarBrands.data))
                    setYears(getOptionsFormatted(mazeCarYears.data))
                }

                if (BRAND_NAME === 'mazemotorcycle') {
                    const [mazeMotorcycleBrands, mazeMotorcycleYears] = await Promise.all([
                        getMazeMotorcycleBrands(),
                        getMazeMotorcycleYears()
                    ])
                    setBrands(getOptionsFormatted(mazeMotorcycleBrands.data))
                    setYears(getOptionsFormatted(mazeMotorcycleYears.data))
                }

            } catch (error) {
                console.error(error)
                setIsToastOpen(true)
            } finally {
                setIsFiltersLoading(false)
            }
        }

        getFiltersData()
    }, [])

    function handleClearFiltersClick() {
        setSelectedBrand(undefined)
        setSelectedYear('')
    }

    function handleSubmitFiltersForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setFilters({
            brand: selectedBrand || undefined,
            year: selectedYear || '',
            maxPrice: Number(maxPrice),
            minPrice: Number(minPrice)
        })
        setIsModalOpen(false)
        clearVehicles()
    }

    function getIsApllyButtonDisabled() {
        const hasNoSelectedBrand = !selectedBrand
        const hasNoSelectedYear = !selectedYear
        const isMinimumPriceBiggerThanMaximumPrice = Number(minPrice) > Number(maxPrice)

        if (hasNoSelectedBrand && hasNoSelectedYear) return true

        if (isMinimumPriceBiggerThanMaximumPrice) return true

        return false
    }

    return <div className="modal-container">
        <Toast
        handleCloseToast={() => setIsToastOpen(false)} 
        isToastOpen={isToastOpen} 
        message='Error while trying to load filters.'
        />
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title">Filters</h1>
                <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                    <CloseIcon/>
                </button>
            </div>
            <form className="filters-form" onSubmit={handleSubmitFiltersForm}>
            <MazeSelect 
                disabled={isFiltersLoading} 
                options={brands} 
                placeholder={isFiltersLoading ? 'Loading...' : 'Select'}
                selectLabel='Brand'
                onChange={(brand: string) => setSelectedBrand(brand as VehicleBrandTypes)}
                value={selectedBrand || ''}
            />
            <MazeSelect 
                disabled={isFiltersLoading} 
                options={years} 
                placeholder={isFiltersLoading ? 'Loading...' : 'Select'}
                selectLabel='Year'
                onChange={(year: string) => setSelectedYear(year)}
                value={selectedYear}
            />
            <div className="price-range-container">
                <label className='price-range'>
                    Minimum Price
                    <div className="price-range-inputs">
                        <input type="range" 
                        className="min-range-input" 
                        min="0" 
                        max="100000" 
                        value={minPrice}
                        onChange={({target}) => setMinPrice(target.value)}
                        step="1"/> 
                        <input type="text" value={minPrice} 
                        onChange={({target}) => setMinPrice(getNumbersFromString(target.value))}
                        />
                    </div>
                </label>

                <label className='price-range'>
                    Maximum Price
                    <div className="price-range-inputs">
                        <input type="range" 
                        className="max-range-input" 
                        min="0" 
                        max="100000" 
                        value={maxPrice}
                        onChange={({target}) => setMaxPrice(target.value)}
                        step="1"/> 
                        <input type="text" value={maxPrice} 
                        onChange={({target}) => setMaxPrice(getNumbersFromString(target.value))}
                        />
                    </div>
                </label>
            </div>
            <button className="submit-button" disabled={getIsApllyButtonDisabled()}>Apply</button>
            </form>
            <button className="clear-filters-button" onClick={handleClearFiltersClick}>Clear Filters</button>
        </div>
    </div>
}