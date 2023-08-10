import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                    <i className="las la-flask"></i> Lab
                    </h4>
                    <h1 className="scroll-animation">Personal <span>Projects</span></h1>
                </div>
                {/* <div><h3>Soon...</h3></div> */}
                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/lab-vitribot-inventory.jpg" data-lightbox="lab-webhooks">
                                    <img src="../assets/images/lab-vitribot-inventory.jpg" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://www.pipedream.com" target="_blank" rel="noreferrer">Webhooks</a>
                                    </li>
                                    <li>
                                        <a href="https://api.slack.com/bot-users" target="_blank" rel="noreferrer">Slack Bot</a>
                                    </li>
                                    <li>
                                        <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>Simple inventory bot for my convenience store.</h2>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/RPA.gif" data-lightbox="lab-rpa" data-toggle="lightbox">
                                {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-toggle="lightbox"> */}
                                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjI2NjU5MWJjZGFjMDk5OGEwNGVkYTA0YmQxYzExZjk4ZWVhYzk4MyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/7iHp0Hnvct97qZ999K/giphy-downsized-large.gif" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://ui.vision/" target="_blank" rel="noreferrer">RPA</a>
                                    </li>
                                    <li>
                                        <a href="https://www.python.org/" target="_blank" rel="noreferrer">Python</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>RPA (Robotic process automation) to sincronize my store inventory with a delivery provider (without an API).</h2>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lucjByNjc3b3V3NzRveWFxMDEzZXBsaGhrYWxocmYzbDQ0enNrZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGKsjx3SrbC6TqCH2d/giphy.gif" data-lightbox="lab-games" data-toggle="lightbox">
                                {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-toggle="lightbox"> */}
                                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lucjByNjc3b3V3NzRveWFxMDEzZXBsaGhrYWxocmYzbDQ0enNrZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGKsjx3SrbC6TqCH2d/giphy.gif" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://howlerjs.com" target="_blank" rel="noreferrer">howler.js</a>
                                    </li>
                                    <li>
                                    <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>Game development for marketing campaigns.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
