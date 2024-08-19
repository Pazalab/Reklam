import { Link } from "react-scroll"
import logo from "../../assets/logo2.png"
import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                        <div className="footer-content">
                                   <div className="footer-logo">
                                              <img src={logo} alt="" />
                                   </div>

                                   <div className="footer-grid">
                                               <div className="footer-detail">
                                                          <p>Lvl 7, Le’Mac, 7th Floor, Westlands</p>
                                                          <p>Call us: +254 700 209805</p>
                                                          <p>Email us: hello@reklamsolutions.com</p>
                                               </div>
                                               <div className="footer-detail">
                                                         <ul>
                                                                   <li><Link to="hero" offset={-100} smooth={true} >Home</Link></li>
                                                                    <li><Link to='about'  smooth={true}>About Us</Link></li>
                                                                    <li><Link to='services'  smooth={true}>Services</Link></li>
                                                         </ul>
                                               </div>
                                               <div className="footer-detail">
                                                           <ul>
                                                                   {/* <li><NavLink to={"/"} target="_blank">Instagram</NavLink></li>
                                                                   <li><NavLink to={"/"} target="_blank">Facebook</NavLink></li>
                                                                   <li><NavLink to={"/"} target="_blank">Twitter</NavLink></li> */}
                                                                   <li><NavLink to={"https://www.linkedin.com/company/reklam-solutions/"} target="_blank">LinkedIn</NavLink></li>
                                                           </ul>
                                               </div>
                                               <div className="footer-detail copyright">
                                                        <p>&copy;{ new Date().getFullYear() } Reklam Solutions Limited</p>
                                               </div>
                                   </div>
                        </div>
             </div>
    </footer>
  )
}

export default Footer