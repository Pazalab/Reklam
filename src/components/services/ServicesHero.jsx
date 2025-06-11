import hero from "../../assets/service_hero2.jpg"
const ServicesHero = () => {
  return (
    <div className="service-hero">
             <div className="inner-row">
                     <div className="service-hero-content">
                               <div className="service-left-column">
                                        <h3 data-aos="zoom-in">Services</h3>
                                        <h2 data-aos="zoom-in-right">We craft smart, creative solutions that move brands forward.</h2>
                               </div>
                              <div className="service-right-column">
                                           <h4 data-aos="zoom-in-left">Think of us as your digital sidekick; here to make your brand shine. We mix brains and heart to craft everything from clever content to bold campaigns, always with your goals (and your audience) in mind.</h4>
                              </div>
                     </div>
                     <div className="service-hero-image" data-aos="zoom-in-up">
                                 <img src={hero} alt="" />
                     </div>
             </div>
    </div>
  )
}

export default ServicesHero