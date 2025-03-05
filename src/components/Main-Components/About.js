import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i>
                        <span>About me</span>
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>I deeply enjoy developing <span>digital solutions</span></h1>
                    <h2 className="scroll-animation" data-aos='fade-right'>It's as simple as that</h2>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Whether for big companies, small businesses, or myself, I strongly believe technology should make our lives easier.<br/>I have built my carreer following that conviction, working purposefully and proactively in every part involved in the development of a <span>solution</span>.</p>
            </div>
        </div>
    </section>
  )
}
