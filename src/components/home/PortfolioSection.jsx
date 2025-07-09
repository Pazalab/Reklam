import { Link } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { portfolio } from "../data/portfolio"
import { HiMiniLink } from "react-icons/hi2";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
            <div className="inner-row">
                       <div className="portfolio-content">
                                 <div className="portfolio-intro">
                                          <h2>Our Featured Work</h2>
                                          <div className="portfolio-intro-column">
                                                    <h3>Helping brands look sharper, smarter, and seriously better.</h3>
                                                    <p>Let&apos;s be real, your online presence is often your first handshake. Why waste it with forgettable design? The brands that truly stand out are the ones bold enough to break the mold and push creative boundaries.</p>
                                          </div>
                                 </div>
                                    
                                  <div className="portfolio-wrap-row">
                                            { portfolio.slice(0,9).map(item => 
                                                    <div className="portfolio-moja" key={item.id}>
                                                               <div className={ item.category === "websites" ? "image-section plus-link" : "image-section"}>
                                                                             <img src={item.image} alt="" />

                                                                             { item.category === "websites" && 
                                                                                  <Link target="_blank" to={item.link} className="portfolio-overlay">
                                                                                          <span><HiMiniLink /></span>
                                                                                 </Link>
                                                                              }
                                                               </div>
                                                    </div>
                                            )}
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