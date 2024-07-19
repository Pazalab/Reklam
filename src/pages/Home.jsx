import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"
const Home = () => {
  return (
    <>
              <section id="hero"  className="landing">
                        <Navbar />
                        <HeroSection />
              </section>
    </>
  )
}

export default Home