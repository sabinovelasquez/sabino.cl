import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>I <span>Believe</span> in</h1>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <i className="lab la-slack"></i>
                                </div>
                                <p className="name">Good communication</p>
                            </div>
                        </div>
                        
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                <i className="lab la-trello"></i>
                                </div>
                                <p className="name">Agile</p>
                            </div>
                        </div>

                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <i className="las la-code-branch"></i>
                                    {/* <h1 className="percent">92%</h1> */}
                                </div>
                                <p className="name">Version control</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                <i className="lab la-aws"></i>
                                </div>
                                <p className="name">DevOps</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <i className="las la-robot"></i>
                                </div>
                                <p className="name">Automation</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                <i className="las la-project-diagram"></i>
                                </div>
                                <p className="name">UX</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <i className="lab la-figma"></i>
                                </div>
                                <p className="name">Design systems</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <i className="las la-users"></i>
                                </div>
                                <p className="name">Collaborative culture</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    </section>
  )
}
