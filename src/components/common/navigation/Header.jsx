import logo from "../../../assets/logo.png"
import { Link } from "react-scroll";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";

const Header = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)
  return (
    <header>
              <div className="inner-row">
                         <div className="header-content">
                                   <div className="logo" data-aos="fade-down">
                                           <img src={logo} alt="" />
                                    </div>
                                    <nav data-aos="fade-down">
                                          <ul>
                                                <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                                <li><Link to='about' activeClass="active" smooth={true} spy={true}>About Us</Link></li>
                                                <li><Link to='services' activeClass="active" smooth={true} spy={true}>Services</Link></li>
                                         </ul>
                                    </nav>
                                    <div data-aos="fade-down" className="header-action">
                                               <Link to='contact'  smooth={true} spy={true}>Get in Touch</Link>
                                               <span onClick={() => setSidebarStatus(true)} className="menu-btn"><HiOutlineMenu /></span>
                                    </div>
                         </div>
              </div>
    </header>
  )
}

export default Header