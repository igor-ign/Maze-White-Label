import { IMAGES } from "../../assets/images";
import { Header } from "../../components";
import { BRAND_DISPLAY_NAME, BRAND_NAME } from "../../constants";
import { BrandCarousel } from "./components";
import { getAboutUsTextBasedOnCurrentBrandName } from "./utils";
import './style.scss'

export function MainPage() {
    const bannerTitleParagraphAndImageAltKeyword = BRAND_DISPLAY_NAME === "Maze Cars" ? "car" : "motorcycle"
    const aboutUsParagraphs = getAboutUsTextBasedOnCurrentBrandName(BRAND_NAME)

    return <main className="main-page-container">
            <Header /> 

            <article className="page-content">
                <section className="page-banner">
                    <div className="banner-title-container">
                        <h1 className="banner-title">Search, find and buy
                        the ideal {bannerTitleParagraphAndImageAltKeyword} easily.</h1>
                        <p className="banner-paragraph">The easiest and safest way of buying 
                        your dream {bannerTitleParagraphAndImageAltKeyword}.</p>
                    </div>

                    <img src={IMAGES.BANNER_IMAGE} alt={`${BRAND_DISPLAY_NAME} banner. White ${bannerTitleParagraphAndImageAltKeyword} without background.`} className="banner-image" />
                </section>
                
                <section className="about-us-container">
                    <div className="about-us-content">
                        <h2 className="about-us-title">About Us</h2>
                        {aboutUsParagraphs?.map(paragraph => {
                            return <p className="about-us-text">{paragraph}</p>
                        })}

                        <h2 className="trusted-brands-title">Brands that we work with</h2>
                        <BrandCarousel />
                    </div>
                </section>
            </article>
    </main>
}