import AboutHero from "../components/about/AboutHero"
import AboutStory from "../components/about/AboutStory"
import Statements from "../components/about/Statements"
import ValuesSection from "../components/about/ValuesSection"
import CallToAction from "../components/common/CallToAction"
import Navbar from "../components/common/navigation/Navbar"
import ExtraInfo from "../components/home/ExtraInfo"
import "../css/about.css"

const About = () => {
  return (
    <>
          <Navbar />
          <AboutHero />
          <AboutStory />
          <Statements />
          <ValuesSection />
          <ExtraInfo />
          <CallToAction />
    </>
  )
}

export default About