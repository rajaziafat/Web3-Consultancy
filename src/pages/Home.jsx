import Header from "../components/header/Header"
import HeroBottom from "../components/hero-bottom/HeroBottom"
import HeroSection from "../components/hero-section/HeroSection"

const Home = () => {
    return (
        <div className="parent-container">
            <div className="child-container">
                <Header />
                <HeroSection/>
                <HeroBottom/>
            </div>
        </div>
    )
}

export default Home
