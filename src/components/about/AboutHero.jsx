import hero from "../../assets/agency1.jpg"
const AboutHero = () => {
  return (
    <div className="about-hero">
             <div className="inner-row">
                         <div className="about-hero-content">
                                  <div className="about-hero-image" data-aos="zoom-in-right">
                                            <img src={hero} alt="" />
                                  </div>
                                  <div className="about-hero-texts">
                                           <div className="about-texts-group" data-aos="zoom-in-left">
                                                    <h3>Who We Are</h3>
                                                   <h1>Redefining Digital Experiences Through Bold Storytelling and Smart Communication.</h1>
                                                   <p>We are a boutique agency based in Nairobi, Kenya,  empowering brands, big and small to unlock the magic of digital. We harness smart strategies and creative insights to turn digital potential into powerful tools for growth, helping your business work smarter and stand out</p>
                                           </div>
                                  </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutHero