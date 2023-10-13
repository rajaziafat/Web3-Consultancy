import FooterTop from "../components/footer-top/FooterTop"
import Footer from "../components/footer/Footer"
import GlobalySection from "../components/globally-section/GlobalySection"
import Header from "../components/header/Header"
import HelpYouSection from "../components/help-you-section/HelpYouSection"
import HeroBottom from "../components/hero-bottom/HeroBottom"
import HeroSection from "../components/hero-section/HeroSection"
import MapSection from "../components/map-section/MapSection"

const Home = () => {
    return (
        <div className="parent-container">
            <div className="child-container">
                <Header />
                <HeroSection />
                <HeroBottom />
                <MapSection />
                <div className="flex justify-center items-center">
                    <div className="max-w-[1500px] w-full ">
                        <div className="border-[#8A54FF] border-[3px] rounded-lg"></div>
                    </div>
                </div>
                <HelpYouSection/>
                <div className="flex justify-center items-center">
                    <div className="max-w-[1500px] w-full ">
                        <div className="border-[#8A54FF] border-[3px] rounded-lg"></div>
                    </div>
                </div>
                <GlobalySection/>
                <FooterTop/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
