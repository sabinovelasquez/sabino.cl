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
                    {/* FlixMe — featured game (full width) */}
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/lab-flixme.jpg" data-lightbox="lab-flixme" data-toggle="lightbox">
                                    <img src="../assets/images/lab-flixme.jpg" alt="FlixMe"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://flutter.dev" target="_blank" rel="noreferrer">Flutter</a>
                                    </li>
                                    <li>
                                        <a href="https://dart.dev" target="_blank" rel="noreferrer">Dart</a>
                                    </li>
                                    <li>
                                        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">Python FastAPI</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>FlixMe &mdash; tell us how you want to feel and we'll pick the movie for you.</h2>
                            <p className="text-center mt-2">
                                <a href="https://games.sabino.cl/flixme/" target="_blank" rel="noreferrer" className="theme-btn">
                                    <i className="las la-play"></i> Play with it!
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Zoom-In Chile (half) */}
                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/lab-zoominchile.jpg" data-lightbox="lab-zoominchile" data-toggle="lightbox">
                                    <img src="../assets/images/lab-zoominchile.jpg" alt="Zoom-In Chile"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://flutter.dev" target="_blank" rel="noreferrer">Flutter</a>
                                    </li>
                                    <li>
                                        <a href="https://dart.dev" target="_blank" rel="noreferrer">Dart</a>
                                    </li>
                                    <li>
                                        <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>Zoom-In Chile &mdash; a photo puzzle to discover Chile piece by piece.</h2>
                            <p className="text-center mt-2">
                                <a href="https://games.sabino.cl/zoominchile/" target="_blank" rel="noreferrer" className="theme-btn">
                                    <i className="las la-play"></i> Play with it!
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* RPA (half) */}
                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
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

                    {/* Vitribot inventory (full) */}
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

                    {/* Game development for marketing (half) */}
                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
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
                            <h2>Game development for marketing campaigns (fun!).</h2>
                        </div>
                    </div>

                    {/* MovieMe (half) */}
                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <span style={{position:'absolute', top:'20px', right:'20px', zIndex:2, background:'#ff5252', color:'#fff', fontSize:'12px', fontWeight:600, letterSpacing:'0.5px', textTransform:'uppercase', padding:'6px 14px', borderRadius:'19px'}}>Deprecated</span>
                                <a href="../assets/images/movieme.webp" data-lightbox="lab-movieme" data-toggle="lightbox">
                                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVvbjJ5YzhoM2N0NnFhMW9ocTAzOHZzOGJiNWV0MTVwM3ZjczRkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qH7aiz3Yji4yBn8IBl/giphy-downsized-large.gif" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">Python FastAPI</a>
                                    </li>
                                    <li>
                                        <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/features/copilot" target="_blank" rel="noreferrer">Github Copilot</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>Movie recommender made with <a href="https://vibecoding.com" target="_blank" rel="noreferrer">VibeCoding</a> in a personal one night hackathon. Deprecated &mdash; evolved into <a href="https://games.sabino.cl/flixme/" target="_blank" rel="noreferrer">FlixMe</a>.</h2>
                            <p className="text-center mt-2">
                                <a href="/movieme" target="_blank" rel="noreferrer" className="theme-btn">
                                    <i className="las la-play"></i> Play with it!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
