import ContactForm from "./ContactForm"
import { Link } from "react-router-dom"
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri";

const ContactBody = () => {
  return (
    <div className="contact-body">
               <div className="inner-row">
                        <div className="contact-body-row">
                                    <div className="contact-details">
                                               <div className="details-intro">
                                                         <h3 data-aos="zoom-in">Contact</h3>
                                                        <h1 data-aos="zoom-in-right">We&apos;d Love to hear from You</h1>
                                               </div>

                                               <div className="details-group">
                                                         <div className="detail-box" data-aos='zoom-in-right'>
                                                                  <h4>Phone</h4>
                                                                  <p>+254 700 209 805</p>
                                                         </div>
                                                         <div className="detail-box" data-aos='zoom-in-right'>
                                                                  <h4>Enquiries</h4>
                                                                  <p>hello@reklamsolutions.com</p>
                                                         </div>
                                                         <div className="detail-box" data-aos='zoom-in-right'>
                                                                   <h4>Address</h4>
                                                                   <p>Le&apos;Mac Towers, 7th Floor, Off Church Rd, Waiyaki Way, Nairobi Kenya</p>
                                                         </div>
                                                         <div className="detail-box" data-aos='zoom-in-right'>
                                                                  <h4>Social</h4>
                                                                  <div className="social-links">
                                                                          <ul>
                                                                                 <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                                                 <li><Link to={"/"}><span><RiInstagramLine /></span></Link></li>
                                                                                 <li><Link to={"/"}><span><RiTwitterXFill /></span></Link></li>
                                                                                 <li><Link to={"/"}><span><GrLinkedinOption /></span></Link></li>
                                                                          </ul>
                                                               </div>
                                                         </div>
                                               </div>
                                    </div>
                                    <ContactForm />
                        </div>
               </div>
    </div>
  )
}

export default ContactBody