import { useState } from "react"
import { Link } from "react-router-dom"
import mno from "../../assets/portfolio/mno.jpg"
import kkco from "../../assets/portfolio/kkco.jpg"
import holistic from "../../assets/portfolio/holistic.jpg"
import dum1 from "../../assets/portfolio/dum13.jpeg"
import dum2 from "../../assets/portfolio/dum12.jpeg"
import dum3 from "../../assets/portfolio/dum14.png"
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const WorkBody = () => {
    const [ option, setOption ] = useState("All")
  return (
    <div className="work-body">
             <div className="inner-row">
                      <div className="work-body-content">
                                <div className="work-body-shifts">
                                           <ul>
                                                    <li className={ option === "All" ? "active" : ""} onClick={() => setOption("All")}>All</li>
                                                    <li className={ option === "Graphic Design" ? "active" : ""} onClick={() => setOption("Graphic Design")}>Graphic Design</li>
                                                    <li className={ option === "Website Development" ? "active" : ""} onClick={() => setOption("Website Development")}>Website Development</li>
                                           </ul>
                                </div>
                                
                                <div className="portfolio-wrap-row">
                                         <div className="portfolio-moja">
                                               <div className="image-section">
                                                        <img src={mno} alt="" />
                                               </div>
                                               <div className="portfolio-texts">
                                                     <h4>MNO Legal Advocates</h4>
                                
                                                        <Link to={""} target="_blank">View project <span><HiOutlineArrowUpRight /></span></Link>
                                                </div>
                                        </div>
                                        <div className="portfolio-moja">
                                                <div className="image-section">
                                                      <img src={kkco} alt="" />
                                               </div>
                                                <div className="portfolio-texts">
                                                       <h4>KKCO East africa LLP</h4>
                                                       <Link to={""} target="_blank">View project <span><HiOutlineArrowUpRight /></span></Link>
                                              </div>
                                      </div>
                                      <div className="portfolio-moja">
                                              <div className="image-section">
                                                    <img src={holistic} alt="" />
                                               </div>
                                              <div className="portfolio-texts">
                                                       <h4>Holistic Weight Management Center</h4>
                                                       <Link to={""} target="_blank">View project <span><HiOutlineArrowUpRight /></span></Link>
                                              </div>
                                     </div>
                                      <div className="portfolio-moja">
                                              <div className="image-section">
                                                      <img src={dum1} alt="" />
                                              </div>
                                              <div className="portfolio-texts">
                                                      <h4>MNO Legal Advocates</h4>
                                                     <Link to={""} target="_blank">View project <span><HiOutlineArrowUpRight /></span></Link>
                                              </div>
                                      </div>
                                    <div className="portfolio-moja">
                                             <div className="image-section">
                                                   <img src={dum2} alt="" />
                                             </div>
                                              <div className="portfolio-texts">
                                                    <h4>MNO Legal Advocates</h4>
                                                       <Link to={""} target="_blank">View project <span><HiOutlineArrowUpRight /></span></Link>
                                           </div>
                                  </div>
                                 <div className="portfolio-moja">
                                          <div className="image-section">
                                                <img src={dum3} alt="" />
                                          </div>
                                          <div className="portfolio-texts">
                                                  <h4>MNO Legal Advocates</h4>
                                
                                                <Link to={""} target="_blank">View project <span><HiOutlineArrowUpRight /></span></Link>
                                          </div>
                              </div>
                     </div>
                 </div>
             </div>
    </div>
  )
}

export default WorkBody