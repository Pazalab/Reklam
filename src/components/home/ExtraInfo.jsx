import partner1 from "../../assets/vodacom.png"
import partner2 from "../../assets/ESRI.png"
import partner3 from "../../assets/UNFPA.png"
import partner4 from "../../assets/JTI.png"
import partner5 from "../../assets/sahara-ventures.png"
import partner6 from "../../assets/jack-daniels.png"
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
                                                   <h3>200+ Big brands trust us</h3>
                                                   <div className="partner-row-content">
                                                               <img src={partner1} alt="" />
                                                               <img src={partner2} alt="" />
                                                               <img src={partner3} alt="" />
                                                               <img src={partner4} alt="" />
                                                               <img src={partner5} alt="" />
                                                               <img src={partner6} alt="" />
                                                   </div>
                                       </div>

                                       <div className="testimonials-row">
                                               <div className="testimonial-intro">
                                                        <h2>Read what our <span>Customers</span> are saying about us.</h2>
                                                        <p>Whether you are a small startup or a multinational corporation, let us be your trusted advisor on the path to success.</p>
                                               </div>
                                               <div ref={scrollerRef} className="testimonial-wrapper">
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