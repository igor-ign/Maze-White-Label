import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { IMAGES } from "../../../../assets/images"
import './style.scss'
import { useRef } from 'react';

export function BrandCarousel() {
    const carouselRef = useRef<HTMLUListElement>(null)
    const { TRUSTED_BRANDS } = IMAGES

    function handleClickMoveCarouselButton(direction: 'LEFT' | 'RIGHT') {
        if (carouselRef.current && direction === 'LEFT') {
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        }

        if (carouselRef.current && direction === 'RIGHT') {
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
    }

    return <div className="carousel-container">
        <button className="carousel-button" onClick={() => handleClickMoveCarouselButton('LEFT')}>
            <ArrowBack />
        </button>
        <ul className="trusted-brands-list" ref={carouselRef}>
            { TRUSTED_BRANDS.map(({ alt, image }) => {
                return <li key={alt} className="brands-list-item">
                    <img src={image} alt={alt} />
                </li>
            })}
        </ul>
        <button className="carousel-button" onClick={() => handleClickMoveCarouselButton('RIGHT')}>
            <ArrowForward /> 
        </button>
    </div>
}