import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'><span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2023 - Present</span>
                        <h2>Founder / It Consultant</h2>
                        <p>
                            <a href="https://fuix.cl" title='Fuix' target="_blank" rel="noreferrer" style={{color: '#e4af12'}}>
                                <img src="assets/images/logo-min.svg" height={60} alt="logo" style={{marginRight: '0px'}}/>
                                <span>Fuix</span>
                            </a>
                        </p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2022 - 2023</span>
                        <h2>CTO</h2>
                        <p>Passline Chile</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2017 - 2020</span>
                        <h2>Business Development Manager</h2>
                        <p>2Brains / BBK Group</p>
                        <h2>It Consultant</h2>
                        <p>Contable</p>
                        <h2>Co-Founder</h2>
                        <p>Front SpA</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2014 - 2017</span>
                        <h2>KAM</h2>
                        <p>2Brains</p>
                        <h2>Team Leader</h2>
                        <p>2Brains / BBK Group</p>
                        <h2>Fullstack Developer</h2>
                        <p>Why / BBK Group</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2011 - 2013</span>
                        <h2>Frontend Developer</h2>
                        <p>2Brains / BBK Group</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2007 - 2010</span>
                        <h2>Co-Founder</h2>
                        <p>Gallo Negro <br /><span>Digital Marketing Agency</span></p>
                        <h2>Freelance Developer</h2>
                        <p>Japan, USA, Australia<br /><span>Remote development</span></p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2004 - 2006</span>
                        <h2>Freelance Developer</h2>
                        <p>Cencosud<br /><span>Digital campaings</span></p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
