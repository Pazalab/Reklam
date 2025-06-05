import CallToAction from "../components/common/CallToAction"
import Navbar from "../components/common/navigation/Navbar"
import WorkBody from "../components/work/WorkBody"
import WorkHero from "../components/work/WorkHero"
import "../css/work.css"

const Work = () => {
  return (
    <>
          <Navbar />
          <WorkHero />
          <WorkBody />
          <CallToAction />
    </>
  )
}

export default Work