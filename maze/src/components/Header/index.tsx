import { useNavigate} from "react-router-dom";
import { IMAGES } from "../../assets/images";
import { BRAND_DISPLAY_NAME, BRAND_NAME } from "../../constants";
import './style.scss'

// TODO: Hamburger Menu
export function Header() {
    const navigate = useNavigate()

    return <header className="header-container">
            <img src={IMAGES.LOGO} alt={`${BRAND_DISPLAY_NAME} logo`} className="header-logo"/>

            <nav className="navigation-container">
                <ul className="navigation-links-list">
                    <li className="navigation-item" onClick={(() => navigate('/'))}>Home</li>
                    <li className="navigation-item">{BRAND_NAME === "mazecar" ? "Cars" : "Motorcycles"}</li>
                    <li className="navigation-item">Search</li>
                    <li className="navigation-item">About</li>
                </ul>
            </nav>
    </header>
}