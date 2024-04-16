import { IMAGES } from "../../assets/images";
import { Header } from "../../components";
import { BRAND_DISPLAY_NAME, BRAND_NAME } from "../../constants";
import { BrandCarousel, VehicleOverview } from "./components";
import { getAboutUsParagraphsBasedOnCurrentBrandName } from "./utils";
import './style.scss'

export function MainPage() {
    const keywordBasedOnBrand = BRAND_NAME === "mazecar" ? "car" : "motorcycle"
    const aboutUsParagraphs = getAboutUsParagraphsBasedOnCurrentBrandName(BRAND_NAME)

    return <main className="main-page-container">
            <Header /> 

            <article className="page-content">
                <section className="page-banner">
                    <div className="banner-title-container">
                        <h1 className="banner-title">Search, find and buy
                        the ideal {keywordBasedOnBrand} easily.</h1>
                        <p className="banner-paragraph">The easiest and safest way of buying 
                        your dream {keywordBasedOnBrand}.</p>
                    </div>

                    <img src={IMAGES.BANNER_IMAGE} alt={`${BRAND_DISPLAY_NAME} banner. White ${keywordBasedOnBrand} without background.`} className="banner-image" />
                </section>
                
                <section className="about-us-container" id="about">
                    <div className="about-us-content">
                        <h2 className="about-us-title">About Us</h2>
                        {aboutUsParagraphs?.map(({ key, paragraph }) => {
                            return <p className="about-us-text" key={key}>{paragraph}</p>
                        })}

                        <h2 className="trusted-brands-title">Brands that we work with</h2>
                        <BrandCarousel />
                    </div>
                </section>

                <VehicleOverview brandKeyword={keywordBasedOnBrand}/>
            </article>
    </main>
}