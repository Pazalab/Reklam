import { useState } from "react"
import { services } from "../data/services"
import { services2 } from "../data/services2"

const ServicesBody = () => {
    const [ active, setActive ] = useState(0)
  return (
    <div className="services-body">
              <div className="inner-row">
                       <div className="services-body-content">
                                <h3 data-aos="zoom-in-down">Whether you&apos;re an ambitious SME ready to grow or a global development partner driving impact, we bridge strategy, creativity, and tech to help your brand shine.</h3>

                                <div className="services-body-shifts" data-aos="zoom-in">
                                          <ul>
                                                  <li onClick={() => setActive(0)} className={ active === 0 ? "active" : ""}>Corporate Clients and SMEs</li>
                                                  <li onClick={() => setActive(1)} className={ active === 1 ? "active" : ""}>International Development Partners</li>
                                          </ul>
                                </div>

                                <div className="services-body-wrap-shifts">
                                           { active === 0 ? 
                                                 <div className="services-items-group">
                                                           { services.map(item => 
                                                            <div className="service-body-moja" key={item.id} data-aos="zoom-in-up">
                                                                      <img src={item.image} alt="" />
                                                                      <div className="service-body-texts">
                                                                               <h2>{item.title}</h2>
                                                                               { item.excerpt.map(item => <p key={item}>{item}</p>)}
                                                                      </div>
                                                           </div> 
                                                           )}
                                                 </div>
                                                 :
                                                 <div className="services-items-group">
                                                           { services2.map(item => 
                                                              <div className="service-body-moja" key={item.id}>
                                                                      <img src={item.image} alt="" />
                                                                      <div className="service-body-texts">
                                                                               <h2>{item.title}</h2>
                                                                               { item.excerpt.map(item => <p key={item}>{item}</p>)}
                                                                      </div>
                                                              </div> 
                                                           )}
                                                 </div>
                                        }
                                           
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default ServicesBody