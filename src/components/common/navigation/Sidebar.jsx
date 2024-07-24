import { useContext, useEffect, useRef } from "react"
import { CgClose } from "react-icons/cg"
import { Link } from "react-scroll"
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
                            <span onClick={() => setSidebarStatus(false)}><CgClose /></span>
                            <ul>
                                   <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                   <li><Link to='about' activeClass="active" smooth={true} spy={true}>About Us</Link></li>
                                   <li><Link to='services' activeClass="active" smooth={true} spy={true}>Services</Link></li>
                            </ul>

                            <div className="sidebar-action">
                                       <Link to='contact' activeClass="active"  smooth={true} spy={true}>Get in Touch</Link>
                            </div>
                 </div>
     </div>
  )
}

export default Sidebar