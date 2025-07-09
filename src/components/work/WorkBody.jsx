import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMiniLink } from "react-icons/hi2";
import { portfolio } from "../data/portfolio"

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
                                           { option === "All" ?
                                                 portfolio.map(item => 
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
                                                 ) :
                                                 option === "Graphic Design" ?
                                                 portfolio.filter(item => item.category === "graphics").map(kitu => 
                                                        <div className="portfolio-moja" key={kitu.id}>
                                                                <div className={"image-section"}>
                                                                       <img src={kitu.image} alt="" />
                                                               </div>
                                                        </div>
                                                 ) :
                                                option === "Website Development" ?
                                                portfolio.filter(kitu => kitu.category === "websites").map(item => 
                                                        <div className="portfolio-moja" key={item.id}>
                                                               <div className={"image-section"}>
                                                                       <img src={item.image} alt="" />
                                                                       <Link target="_blank" to={item.link} className="portfolio-overlay">
                                                                              <span><HiMiniLink /></span>
                                                                       </Link>
                                                              </div>
                                                       </div>
                                                ) :
                                                 "What is"
                                           }
                              </div>
                 </div>
             </div>
    </div>
  )
}

export default WorkBody