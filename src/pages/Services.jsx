import CallToAction from "../components/common/CallToAction"
import Navbar from "../components/common/navigation/Navbar"
import ServicesBody from "../components/services/ServicesBody"
import ServicesHero from "../components/services/ServicesHero"
import "../css/services.css"

const Services = () => {
  return (
    <>
           <Navbar />
           <ServicesHero />
           <ServicesBody />
           <CallToAction />
    </>
  )
}

export default Services