import { Link } from "react-router-dom"
import mno from "../../assets/portfolio/mno.jpg"
import kkco from "../../assets/portfolio/kkco.jpg"
import holistic from "../../assets/portfolio/holistic.jpg"
import dum1 from "../../assets/portfolio/dum13.jpeg"
import dum2 from "../../assets/portfolio/dum12.jpeg"
import dum3 from "../../assets/portfolio/dum14.png"
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
            <div className="inner-row">
                       <div className="portfolio-content">
                                 <div className="portfolio-intro">
                                          <h2>Our Featured Work</h2>
                                          <div className="portfolio-intro-column">
                                                    <h3>Helping brands look sharper, smarter, and seriously better.</h3>
                                                    <p>Let&apos;s be real—your online presence is often your first handshake. Why waste it with forgettable design? The brands that truly stand out are the ones bold enough to break the mold and push creative boundaries.</p>
                                          </div>
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

                                 <div className="portfolio-btn">
                                           <Link to={"/our-work"}>Explore Portfolio <span><HiOutlineArrowUpRight /></span></Link>
                                 </div>
                       </div>
            </div>
    </div>
  )
}

export default PortfolioSection