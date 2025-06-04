import logo from "../../../assets/logo.png"
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
import { NavLink, Link} from "react-router-dom";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
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
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                <li><NavLink to={"/services"}>Services</NavLink></li>
                                                <li><NavLink to={"/our-work"}>Results</NavLink></li>
                                                <li><NavLink to={"/eccentric"}>Eccentric</NavLink></li>
                                         </ul>
                                    </nav>
                                    <div data-aos="fade-down" className="header-action">
                                               <Link to={"/contact-us"}>Get in Touch</Link>
                                               <span onClick={() => setSidebarStatus(true)} className="menu-btn"><HiOutlineMenu /></span>
                                    </div>
                         </div>
              </div>
    </header>
  )
}

export default Header