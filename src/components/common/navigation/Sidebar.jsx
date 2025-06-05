import { useContext, useEffect, useRef } from "react"
import { CgClose } from "react-icons/cg"
import { Link, NavLink } from "react-router-dom"
import { sidebarContext } from "./navcontext"
import gsap from "gsap";

const Sidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
  const sidebarRef = useRef();

  useEffect(() => {
             if(sidebarStatus){
                    sidebarRef && sidebarRef.current.classList.add("active");
                    gsap.to(sidebarRef.current.querySelector(".sidebar-content"), {
                           x: 0,
                           duration: 0.8
                    })
             }else{
                    gsap.to(sidebarRef.current.querySelector(".sidebar-content"), {
                          x: "100%",
                          duration: 0.8
                    })

                    setTimeout(() => {
                           sidebarRef.current.classList.remove("active")
                    }, 1200)
             }
  }, [sidebarStatus])
  return (
     <div ref={sidebarRef} className="sidebar-section">
                 <div className="sidebar-content">
                            <div className="sidebar-header">
                                    <span onClick={() => setSidebarStatus(false)}><CgClose /></span>
                            </div>
                            <ul>
                                   <li><NavLink to="/">Home</NavLink></li>
                                   <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                   <li><NavLink to={"/services"}>Services</NavLink></li>
                                   <li><NavLink to={"/our-work"}>Work</NavLink></li>
                            </ul>

                            <div className="sidebar-action">
                                       <Link to={"/contact-us"}>Get in Touch</Link>
                            </div>
                 </div>
     </div>
  )
}

export default Sidebar