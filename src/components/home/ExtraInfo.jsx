import partner1 from "../../assets/ncc.png"
import partner2 from "../../assets/qwetu.png"
import partner3 from "../../assets/radison.png"
import partner4 from "../../assets/lsk.png"
import partner5 from "../../assets/daystar.png"
import partner6 from "../../assets/pernod.png";
import partner7 from "../../assets/mzazi.png"
import partner8 from "../../assets/ccpit.png"
import partner9 from "../../assets/sg.png"
import partner10 from "../../assets/restore-renew.png"
import partner11 from "../../assets/baberia.jpeg"
import { MdOutlineStarPurple500,  MdOutlineStarHalf } from "react-icons/md";
import { testimonials } from "../data/testimonials"
import { useRef, useEffect } from "react"
const ExtraInfo = () => {
    const scrollerRef = useRef();

    useEffect(() => {
              const scrollerInner = scrollerRef.current.querySelector('.testimonials-scroller')
              const scrollerContent = Array.from(scrollerInner.children);

              scrollerContent.forEach(item => {
                      const duplicatedItem = item.cloneNode(true);
                      scrollerInner.appendChild(duplicatedItem);
              })
    }, [])
  return (
    <div className="extra-wrapper">
                <div className="inner-row">
                             <div className="extra-info-content">
                                       <div className="partner-row">
                                                   <h3 data-aos="zoom-in-down">200+ Big brands trust us</h3>
                                                   <div className="partner-row-content">
                                                               <img data-aos="zoom-in-up" src={partner1} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner2} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner3} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner4} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner5} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner6} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner7} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner8} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner9} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner10} alt="" />
                                                               <img data-aos="zoom-in-up" src={partner11} alt="" />
                                                   </div>
                                       </div>

                                       <div className="testimonials-row">
                                               <div className="testimonial-intro">
                                                        <h2 data-aos="zoom-in-up">Read what our <span>Customers</span> are saying about us.</h2>
                                                        <p data-aos="zoom-in-up">Whether you are a small startup or a multinational corporation, let us be your trusted advisor on the path to success.</p>
                                               </div>
                                               <div data-aos="zoom-in-up" ref={scrollerRef} className="testimonial-wrapper">
                                                          <div className="testimonials-scroller">
                                                                 { testimonials.map(item => 
                                                                     <div className="testimonial-moja" key={item.id}>
                                                                                { item.rating === 5 ? 
                                                                                     <div className="stars">
                                                                                           <span><MdOutlineStarPurple500 /></span>
                                                                                           <span><MdOutlineStarPurple500 /></span>
                                                                                           <span><MdOutlineStarPurple500 /></span>
                                                                                           <span><MdOutlineStarPurple500 /></span>
                                                                                           <span><MdOutlineStarPurple500 /></span>
                                                                                      </div>
                                                                                    : 
                                                                                        <div className="stars">
                                                                                               <span><MdOutlineStarPurple500 /></span>
                                                                                               <span><MdOutlineStarPurple500 /></span>
                                                                                               <span><MdOutlineStarPurple500 /></span>
                                                                                               <span><MdOutlineStarPurple500 /></span>
                                                                                               <span><MdOutlineStarHalf /></span>
                                                                                          </div>
                                                                                    }

                                                                                  <p>{item.saying}</p>

                                                                                   <div className="profile">
                                                                                            <h4>{item.name}</h4>
                                                                                            <p>{item.company}</p>
                                                                                   </div>
                                                                    </div>
                                                                 )}

                                                          </div>
                                               </div>
                                       </div>
                             </div>
                </div>
    </div>
  )
}

export default ExtraInfo