import { IMAGES } from "../../assets/images";
import { Header } from "../../components";
import { BRAND_DISPLAY_NAME } from "../../constants";
import './style.scss'

export function MainPage() {
    const bannerTitleParagraphAndImageAltKeyword = BRAND_DISPLAY_NAME === "Maze Cars" ? "car" : "motorcycle" 

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
            </article>
    </main>
}