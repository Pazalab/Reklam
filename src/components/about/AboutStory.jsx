import agency from "../../assets/agency2.jpg"
const AboutStory = () => {
  return (
    <div className="about-story">
               <div className="inner-row">
                         <div className="about-story-content">
                                    <h3 data-aos="zoom-in-up">Helping organizations tell their stories in ways that captivate, inspire action, and leave a lasting mark. Every strategy we craft is built around your audience, your goals and a shared commitment to creating meaningful impact.</h3>

                                    <div className="about-story-grid">
                                                <div className="about-grid-item">
                                                          <p data-aos="zoom-in-right">Six years ago, in the heart of Nairobi, a small team of visionary creatives set out with a bold mission to transform how brands tell their stories. Born from a shared passion for meaningful communication and a belief in Africa’s global influence, the agency began as a simple idea: to help organizations connect deeply with their audiences through strategic, authentic storytelling. Armed with experience in marketing, digital strategy, and communication, the team launched a boutique agency rooted in purpose, creativity, and a desire to spark real impact.</p>
                                                          <p data-aos="zoom-in-right">Today, that idea has grown into a thriving agency serving a diverse range of clients, from multinational corporations to local SMEs and global development partners. With a dynamic team of strategists, writers, and digital experts, we craft communication solutions that are bold, tailored, and deeply human. Every campaign we build is driven by empathy, results, and an unwavering commitment to our clients’ goals. We&apos;ve become a trusted partner for organizations seeking to cut through the noise and make their message matter.</p>
                                                          <p data-aos="zoom-in-right">As we look ahead, we’re driven by the same passion that started it all. Our vision is to expand our impact across borders, helping brands, changemakers, and innovators around the world harness the power of storytelling. With creativity as our compass and connection as our goal, we’re ready to co-create a future where bold ideas are amplified, stories travel farther, and every voice has the power to shape the world.</p>
                                                </div>
                                                <div className="about-grid-item" data-aos="zoom-in-left">
                                                            <img src={agency} alt="" />
                                                </div>
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default AboutStory