import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
//import ActionStatement from "../components/home/ActionStatement"
import ExtraInfo from "../components/home/ExtraInfo"
import HeroSection from "../components/home/HeroSection"
import ServicesSection from "../components/home/ServicesSection"
import "../css/home.css"
//import ContactSection from "../components/home/ContactSection"
//import Footer from "../components/common/Footer"
import CallToAction from "../components/common/CallToAction"
import PortfolioSection from "../components/home/PortfolioSection"
const Home = () => {
  return (
    <>
              <section id="hero"  className="landing">
                        <Navbar />
                        <HeroSection />
              </section>
              <AboutSection />
              <PortfolioSection />
              <ServicesSection />
              <ExtraInfo />
              {/* <ActionStatement /> */}
              {/* <ContactSection /> */}
              <CallToAction />
              {/* <Footer /> */}
    </>
  )
}

export default Home