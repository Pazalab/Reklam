import benefit from "../../assets/benefit.jpg"
import expertise from "../../assets/expertise.png"
import collaboration from "../../assets/collaborations.png"
import time from "../../assets/time.png"
import data from "../../assets/data.png"

const Benefits = () => {
  return (
    <div className="benefits-row">
           <div className="benefits-intro">
                     <h3 data-aos="zoom-in-down">Why Choose Us</h3>
                     <h1 data-aos="zoom-in-up">Elevate your Brand with a Partner that goes above and Beyond</h1>
           </div>
           <div className="benefit-reasons-wrapper">
                      <img data-aos="zoom-in-right" className="benefit-image" src={benefit} alt="" />
                      <div className="reasons-wrap-row">
                                 <div className="benefit-moja" data-aos="zoom-in-up">
                                            <img src={expertise} alt="" />
                                            <h3>Expertise and Cutting-Edge Strategies</h3>
                                            <p>The digital marketing landscape is contantly evolving. We stay ahead of the curve, possessing the knowledge and tools to leverage the latest trends and technologies.</p>
                                 </div>
                                 <div className="benefit-moja" data-aos="zoom-in-up">
                                              <img src={time} alt="" />
                                              <h3>Time-Saving Efficiency and Scalability</h3>
                                              <p>We understand how challenging marketing can be hence we streamline the process, allowing you to focus on core business operations enabling you to scale your efforts as your business grows.</p>
                                 </div>
                                 <div className="benefit-moja" data-aos="zoom-in-up">
                                           <img src={data} alt="" />
                                           <h3>Data-Driven Optimization and Measurable Results</h3>
                                           <p>We are constantly analyzing performance and user behavior allowing us to prioritize strategies for maximum impact by providing clear metrics and reports detailing ROI of our marketing efforts.</p>
                                 </div>
                                 <div className="benefit-moja" data-aos="zoom-in-up">
                                           <img src={collaboration} alt="" />
                                           <h3>Collaborative Partnerships and Strategic Guidance</h3>
                                           <p>We become an extension of your team, collaborating with you to understand your goals and target audience. We also offer ongoing support and guidance, providing valuable insights and strategic recommendations to achieve long-term success.</p>
                                 </div>
                      </div>
           </div>
    </div>
  )
}

export default Benefits