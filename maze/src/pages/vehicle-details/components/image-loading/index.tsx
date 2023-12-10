import { CircularProgress } from '@mui/material'
import './style.scss'
import { BRAND_NAME } from '../../../../constants'

export function ImageLoading() {
    const brandPrimaryColor = BRAND_NAME === 'mazecar' ? "#F93E07" : "#3A3D8A"

    return <div className="image-loading-container">
        <CircularProgress style={{ color: brandPrimaryColor}}/>
    </div>
}