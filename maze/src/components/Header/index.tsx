import { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { IMAGES } from "../../assets/images";
import { BRAND_DISPLAY_NAME, BRAND_NAME } from "../../constants";
import { useMobileOrTabletCheck } from "../../hooks";
import './style.scss'
import { getAppRoutePaths } from "../../utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const location = useLocation();
    const navigate = useNavigate()
    const isDeviceTabletOrMobile = useMobileOrTabletCheck()

    const appRoutes = getAppRoutePaths()

    function handleClickHeaderItems() {
        const isUserInHomePage = location.pathname === appRoutes.HOME

        if (!isUserInHomePage) navigate(appRoutes.HOME)
    }

    function renderHeaderNavigationItems() {
        const isMobileMenuOpen = isDeviceTabletOrMobile && isMenuOpen
        const isDesktopOrNotebook = !isDeviceTabletOrMobile
        const isNavigationItemsVisible = isDesktopOrNotebook || isMobileMenuOpen
        const vehicleKeyword = BRAND_NAME === "mazecar" ? "Cars" : "Motorcycles"

        if (isNavigationItemsVisible) return (
        <ul className="navigation-links-list">
            <li className="navigation-item" onClick={(() => navigate(appRoutes.HOME))}>Home</li>
            <li className="navigation-item" onClick={handleClickHeaderItems}>
                <a className="scroll-link" href="#vehicles">{vehicleKeyword}</a>
            </li>
            <li className="navigation-item" onClick={handleClickHeaderItems}>
                <a className="scroll-link" href="#about">About</a>
            </li>
            <li className="navigation-item" onClick={() => navigate(appRoutes.SEARCH_VEHICLES)}>Search</li>
        </ul>
        )
    }

    function renderHamburgerMenuIcon() {
        if (isDeviceTabletOrMobile) return (
        <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon fontSize="large"/>
        </button>
        )
    }

    return <header className="header-container">
            <img src={IMAGES.LOGO} alt={`${BRAND_DISPLAY_NAME} logo`} className="header-logo"/>

            <nav className="navigation-container">
                {renderHamburgerMenuIcon()}
                {renderHeaderNavigationItems()}
            </nav>
    </header>
}