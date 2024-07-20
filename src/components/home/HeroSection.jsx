import { Link } from "react-scroll"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import heroImage from "../../assets/hero1.jpg"
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                       <div className="hero-section-content">
                                <h1>We Collaborate, We <br /> <span className="md">Create, </span><span>We Think</span> Outside Of the Box.</h1>
                                <div className="hero-explanation">
                                          <p>We&apos;re more than an agency; we&apos;re a team obsessed with delivering online success for our clients. Our passionate and skilled professionals are dedicated to becoming your partner in achieving your digital goals.</p>
                                </div>
                                <Link to='services' activeClass="active" smooth={true} spy={true}>Explore Our Services <span><HiOutlineArrowUpRight /></span></Link>
                                <div className="hero-image">
                                           <img src={heroImage} alt="" />
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default HeroSection