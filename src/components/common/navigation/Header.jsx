import logo from "../../../assets/logo.png"
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
              <div className="inner-row">
                         <div className="header-content">
                                   <div className="logo">
                                           <img src={logo} alt="" />
                                    </div>
                                    <nav>
                                          <ul>
                                                <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                                <li><Link to='about' activeClass="active" smooth={true} spy={true}>About Us</Link></li>
                                                <li><Link to='services' activeClass="active" smooth={true} spy={true}>Services</Link></li>
                                         </ul>
                                    </nav>
                                    <div className="header-action">
                                               <Link to='contact' activeClass="active"  smooth={true} spy={true}>Contact Us</Link>
                                    </div>
                         </div>
              </div>
    </header>
  )
}

export default Header