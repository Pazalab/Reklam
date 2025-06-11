import values from "../../assets/values.jpg"
const ValuesSection = () => {
  return (
    <div className="values-section">
                <div className="inner-row"> 
                          <div className="values-section-content">
                                    <div className="values-intro">
                                                <h3 data-aos="zoom-in-down">What Drives Us</h3>
                                                <h2 data-aos="zoom-in-up">At the heart of everything we do is a clear set of values that guide how we think, create, and collaborate. These principles are more than words, they&apos;re the DNA of our culture and the reason we’re trusted by brands big and small. From bold ideas to lasting partnerships, our values shape every step of the journey.</h2>
                                    </div>

                                    <div className="benefit-reasons-wrapper">
                                            <img data-aos="zoom-in-right" className="benefit-image" src={values} alt="" />
                                             <div className="reasons-wrap-row">
                                                      <div className="benefit-moja" data-aos="zoom-in-up">
                                                                 <h3>Lead with Integrity</h3>
                                                                <p>We earn trust by being transparent, accountable, and honest always. We communicate clearly, keep our promises, and do what’s right, not what’s easy.</p>
                                                     </div>
                                                     <div className="benefit-moja" data-aos="zoom-in-up">
                                                               <h3>Create to Innovate</h3>
                                                               <p>By blending creativity with cutting-edge tech, we craft fresh, data-driven strategies that help our clients stay ahead in a fast-evolving digital world.</p>
                                                    </div>
                                                      <div className="benefit-moja" data-aos="zoom-in-up">
                                                                <h3>Build Together</h3>
                                                                <p>We collaborate deeply with clients, partners, and each other. By bringing diverse minds into the room, we co-create smart, aligned solutions that deliver.</p>
                                                      </div>
                                                       <div className="benefit-moja" data-aos="zoom-in-up">
                                                                 <h3>Make It Matter</h3>
                                                                 <p>We focus on work that drives results and makes a difference. Every campaign, every message, every click, we aim for meaning, not just metrics.</p>
                                                       </div>
                                               </div>
                                   </div>
                          </div>
                </div>
    </div>
  )
}

export default ValuesSection