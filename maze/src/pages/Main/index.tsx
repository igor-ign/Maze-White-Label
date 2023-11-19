import { IMAGES } from "../../assets/images";
import { BRAND_DISPLAY_NAME } from "../../constants";
import './style.scss'

export function MainPage() {

    return <main className="main-page-container">
        <header className="main-page-header">
            <img src={IMAGES.LOGO} alt={`${BRAND_DISPLAY_NAME} logo`} className="header-logo"/>

            <nav className="navigation-container">
                <ul className="navigation-links-list">
                    <li className="navigation-item">Home</li>
                    <li className="navigation-item">{BRAND_DISPLAY_NAME === "Maze Cars" ? "Cars" : "Motorcycles"}</li>
                    <li className="navigation-item">Search</li>
                    <li className="navigation-item">Contact</li>
                    <li className="navigation-item">About</li>
                </ul>
            </nav>
        </header>
    </main>
}