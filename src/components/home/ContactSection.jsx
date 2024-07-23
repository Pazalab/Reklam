import ContactForm from "./ContactForm"

const ContactSection = () => {
  return (
    <div id="contact" className="contact-section">
               <div className="inner-row">
                          <div className="contact-section-content">
                                       <ContactForm />
                                       <div className="contact-texts">
                                                    <div className="contact-text-column">
                                                               <h2>Get in Touch</h2>
                                                               <p>We&apos;re here to listen. Got questions, comments, or feedback? Don&apos;t hesitate to reach out. Simply fill out the form on the side, and we&apos;ll get back to you swiftly.</p>
                                                    </div>
                                                    <div className="contact-text-column">
                                                                <p>Phone: +254 700 209805</p>
                                                                <p>Email: helllo@reklamsolutions.com</p>
                                                    </div>
                                       </div>
                          </div>
               </div>
    </div>
  )
}

export default ContactSection