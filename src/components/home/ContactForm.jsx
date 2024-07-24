
const ContactForm = () => {
  return (
    <div className="contact-form" data-aos="zoom-in-right">
               <form action="">
                          <div className="form-row split">
                                     <div className="form-column">
                                               <input type="text" className="form-control" placeholder="Name" />
                                     </div>
                                     <div className="form-column">
                                               <input type="email" className="form-control" placeholder="Email"/>
                                     </div>
                          </div>
                          <div className="form-row">
                                    <input type="number" className="form-control" placeholder="Phone number" pattern="+[0,9]"/>
                          </div>
                          <div className="form-row">
                                    <textarea placeholder="Your message"></textarea>
                          </div>

                          <button type="submit">Send Message</button>
               </form>
    </div>
  )
}

export default ContactForm