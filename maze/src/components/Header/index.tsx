import { useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { IMAGES } from "../../assets/images";
import { BRAND_DISPLAY_NAME, BRAND_NAME } from "../../constants";
import { useMobileOrTabletCheck } from "../../hooks";
import './style.scss'
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const navigate = useNavigate()
    const isDeviceTabletOrMobile = useMobileOrTabletCheck()

    function renderHeaderNavigationItems() {
        const isMobileMenuOpen = isDeviceTabletOrMobile && isMenuOpen
        const isDesktop = !isDeviceTabletOrMobile
        const isNavigationItemsVisible = isDesktop || isMobileMenuOpen

        if (isNavigationItemsVisible) return (
        <ul className="navigation-links-list">
            <li className="navigation-item" onClick={(() => navigate('/'))}>Home</li>
            <li className="navigation-item">{BRAND_NAME === "mazecar" ? "Cars" : "Motorcycles"}</li>
            <li className="navigation-item">Search</li>
            <li className="navigation-item">About</li>
        </ul>
        )
    }

    return <header className="header-container">
            <img src={IMAGES.LOGO} alt={`${BRAND_DISPLAY_NAME} logo`} className="header-logo"/>

            <nav className="navigation-container">
                {isDeviceTabletOrMobile && <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}><MenuIcon fontSize="large"/></button>}
                {renderHeaderNavigationItems()}
            </nav>
    </header>
}