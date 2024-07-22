import { useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { services } from "../data/services";
import process1 from "../../assets/process1.jpg";
import process2 from "../../assets/process2.jpg";
import Benefits from "./Benefits";
const ServicesSection = () => {
    const [active, setActive] = useState(1);

    const openService = (i) =>{
         setActive(i)
    }
  return (
    <div className="services-section">
              <div className="inner-row">
                        <div className="services-intro">
                                     <h3>Our Services</h3>
                                     <h1>What We Can Do for You</h1>
                                     <p>Reklam is not just a digital marketing agency; we&apos;re your catalyst for growth. With expertise in five key areas, we empower businesses like yours to soar in the digital landscape and become an industry powerhouse.</p>
                        </div>

                        <div className="services-row">
                                { services.map(item => 
                                  <div onClick={() => openService(item.id)} className={item.id === active ? "service-row-moja active" : "service-row-moja"} key={item.id}>
                                           <div className="icon">
                                                         <img src={item.icon} alt="" />
                                             </div>
                                             <h3>{item.title}</h3>
                                              <div className="service-texts">
                                                         <p>{item.content}</p>
                                              </div>
                                             <span onClick={() => openService(item.id)}><IoIosArrowRoundDown /></span>
                                  </div>
                                )}
                        </div>

                        <div className="process-row">
                                  <div className="process-texts">
                                           <h3>How We Serve</h3>
                                           <h1>We have designed a <span>Collaborative Journey </span> that ignites <span>Your Brand</span> and propels you to your Goals.</h1>

                                           <div className="process-specifics-row">
                                                    <div className="process-specific-column">
                                                                 <div className="process-moja">
                                                                             <div className="process-number">
                                                                                       <span>01</span>
                                                                             </div>
                                                                             <div className="process-moja-texts">
                                                                                        <h4>Deep Dive Discovery</h4>
                                                                                        <p>We become an extension of your team, conducting in-depth interviews and market research to understand your unique vision, target audient and competitive landscape.</p>
                                                                             </div>
                                                                 </div>
                                                                 <div className="process-moja">
                                                                             <div className="process-number">
                                                                                       <span>02</span>
                                                                             </div>
                                                                             <div className="process-moja-texts">
                                                                                        <h4>Collaborative Strategy</h4>
                                                                                        <p>Insights become a roadmap. We co-create a custom digital strategy with you, outlining key performance indicators, target channels, and a content calendar designed for maximum impact.</p>
                                                                             </div>
                                                                 </div>
                                                                 <div className="process-moja">
                                                                             <div className="process-number">
                                                                                       <span>03</span>
                                                                             </div>
                                                                             <div className="process-moja-texts">
                                                                                        <h4>Flawless Execution</h4>
                                                                                        <p>Our passionate team brings your vision to life. From crafting compelling content and executing social media campaigns to optimizing your website, we handle everything with meticulous attention to detail.</p>
                                                                             </div>
                                                                 </div>
                                                                 <div className="process-moja last">
                                                                             <div className="process-number">
                                                                                       <span>04</span>
                                                                             </div>
                                                                             <div className="process-moja-texts">
                                                                                        <h4>Project Completion & Continuous Optimization</h4>
                                                                                        <p>The journey doesn&apos;t end there. We continuously monitor and refine your strategy based on data analysis. This ensures your project stay ahead of the curve and deliver exceptional results.</p>
                                                                             </div>
                                                                 </div>
                                                    </div>
                                                    <div className="process-images">
                                                              <img src={process1} alt="" />
                                                              <img src={process2} alt="" />
                                                    </div>
                                           </div>
                                  </div>
                        </div>

                        <Benefits />
              </div>
    </div>
  )
}

export default ServicesSection