import logo from "../../assets/logo2.png"
import { Link } from "react-router-dom"
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri";
import { PiEnvelopeThin, PiBuildingOffice } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs"
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
        <div className="inner-row-w">
             <div className="footer">
                     <div className="footer-top-strip">
                             <Link to={"/"}>
                                    <img src={logo} alt="" />
                             </Link>
                             <ul>
                                   <li><Link to={"/about-us"}>About Us</Link></li>
                                   <li><Link to={"/services"}>Services</Link></li>
                                   <li><Link to={"/work"}>Our Work</Link></li>
                                   <li><Link to={"/eccentric"}>Eccentric</Link></li>
                           </ul>
                    </div>
                     <div className="footer-bottom-strip">
                             <div className="newsletter-column">
                                      <h3>Subscribe for more updates</h3>
                                      <p>Stay updated with our latest news, trendy digital insights and more</p>

                                      <div className="newsletter-form">
                                                <span className="icon"><PiEnvelopeThin /></span>
                                                <input type="email" placeholder="Your email address" />
                                                <button><span><BsArrowRight /></span></button>
                                      </div>
                             </div>
                             <div className="details-strip">
                                       <div className="details-strip-moja">
                                                  <h3><span><PiBuildingOffice /></span> Office</h3>
                                                  <p>Le&apos;Mac Towers, 7th Floor, Off Church Rd, Waiyaki Way, Nairobi Kenya</p>
                                       </div>
                                       <div className="details-strip-moja">
                                                  <h3><span><TbDeviceLandlinePhone /></span>Get in Touch</h3>
                                                  <p>+254 700 209 805</p>
                                                  <p>hello@reklamsolutions.com</p>
                                       </div>
                             </div>
                     </div>

                     <div className="copyright">
                             <p>All rights reserved &copy; { new Date().getFullYear() } Reklam Solutions Ltd</p>
                             <div className="social-links">
                                     <ul>
                                                <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                <li><Link to={"/"}><span><RiInstagramLine /></span></Link></li>
                                                <li><Link to={"/"}><span><RiTwitterXFill /></span></Link></li>
                                                <li><Link to={"/"}><span><GrLinkedinOption /></span></Link></li>
                                     </ul>
                             </div>
                     </div>
             </div>
             </div>
    </footer>
  )
}

export default Footer