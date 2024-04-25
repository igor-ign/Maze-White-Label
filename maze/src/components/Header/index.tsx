import { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { IMAGES } from "../../assets/images";
import { BRAND_DISPLAY_NAME, BRAND_NAME } from "../../constants";
import { useMobileOrTabletCheck } from "../../hooks";
import { getAppRoutePaths } from "../../utils";
import './style.scss'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const location = useLocation();
    const navigate = useNavigate()
    const isDeviceTabletOrMobile = useMobileOrTabletCheck()
    
    const appRoutePaths = getAppRoutePaths()

    function handleClickHeaderItems() {
        const isUserInHomePage = location.pathname === appRoutePaths.HOME

        if (isDeviceTabletOrMobile) setIsMenuOpen(false)
        if (!isUserInHomePage) navigate(appRoutePaths.HOME)
    }

    function renderHeaderNavigationItems() {
        const isMobileMenuOpen = isDeviceTabletOrMobile && isMenuOpen
        const isDesktopOrNotebook = !isDeviceTabletOrMobile
        const isNavigationItemsVisible = isDesktopOrNotebook || isMobileMenuOpen
        const vehicleKeyword = BRAND_NAME === "mazecar" ? "Cars" : "Motorcycles"

        if (isNavigationItemsVisible) return (
        <ul className="navigation-links-list">
            <li className="navigation-item" onClick={(() => navigate(appRoutePaths.HOME))}>Home</li>
            <li className="navigation-item" onClick={handleClickHeaderItems}>
                <a className="scroll-link" href="#vehicles">{vehicleKeyword}</a>
            </li>
            <li className="navigation-item" onClick={handleClickHeaderItems}>
                <a className="scroll-link" href="#about">About</a>
            </li>
            <li className="navigation-item" onClick={() => navigate(appRoutePaths.SEARCH_VEHICLE)}>Search</li>
        </ul>
        )
    }

    return <header className="header-container">
        <div className="header-content">
            <img src={IMAGES.LOGO} alt={`${BRAND_DISPLAY_NAME} logo`} className="header-logo"/>

            {isDeviceTabletOrMobile && 
            <button 
            className="hamburger-icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <MenuIcon fontSize="large"/>
            </button>}
            <nav className="navigation-container">
                {renderHeaderNavigationItems()}
            </nav>
        </div>
    </header>
}