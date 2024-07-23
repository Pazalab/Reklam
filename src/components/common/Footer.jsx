import { Link } from "react-scroll"
import logo from "../../assets/logo.png"
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
                                                          <p>6391 Elgin St.Celina, Delaware 102299</p>
                                                          <p>Call us: +254 700 209805</p>
                                                          <p>Email us: hello@reklamsolutions.com</p>
                                               </div>
                                               <div className="footer-detail">
                                                         <ul>
                                                                   <li><Link to="hero" offset={-100} smooth={true} >Home</Link></li>
                                                                    <li><Link to='about'  smooth={true}>About Us</Link></li>
                                                                    <li><Link to='services'  smooth={true}>Services</Link></li>
                                                                  <li><Link to='contact'   smooth={true}>Contact Us</Link></li>
                                                         </ul>
                                               </div>
                                               <div className="footer-detail">
                                                           <ul>
                                                                   <li><NavLink to={"/"} target="_blank">Instagram</NavLink></li>
                                                                   <li><NavLink to={"/"} target="_blank">Facebook</NavLink></li>
                                                                   <li><NavLink to={"/"} target="_blank">Twitter</NavLink></li>
                                                                   <li><NavLink to={"/"} target="_blank">LinkedIn</NavLink></li>
                                                           </ul>
                                               </div>
                                               <div className="footer-detail">
                                                        <p>All rights reserved &copy;{ new Date().getFullYear() } Reklam Solutions Limited</p>
                                               </div>
                                   </div>
                        </div>
             </div>
    </footer>
  )
}

export default Footer