import { useEffect } from 'react'
import './style.scss'

export function Toast({ message, isToastOpen, handleCloseToast }: { 
    message: string
    isToastOpen: boolean
    handleCloseToast: () => void
}) {
    const toastDisplay = isToastOpen ? 'block' : 'none'

    useEffect(() => {
        if (isToastOpen) {
            const toastScreenTimeInMilliseconds = 4000
            setTimeout(handleCloseToast, toastScreenTimeInMilliseconds)
        }
    }, [isToastOpen, handleCloseToast])

    return <div className="toast-container" style={{ display: toastDisplay }}>{message}</div>
}