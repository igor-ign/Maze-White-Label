import { SkeletonLoaderProps } from './interfaces'
import './style.scss'

export function SkeletonLoader({ width = '30px', height = '30px', borderRadius = '40px' }: SkeletonLoaderProps) {
    return <div className='skeleton-loading' style={{ width, height, borderRadius }}></div>
}