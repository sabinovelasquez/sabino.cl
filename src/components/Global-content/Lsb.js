import React from 'react'

export default function Lsb() {
  return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-start">
                <img src="./assets/images/logo.png" alt="Logo"/>
                <h2>Sabino Velásquez</h2>
                
            </div>
            <img className="me" src="./assets/images/me.png" alt="Me"/>
            {/* <h2 className="email">sabinovelasquez@gmail.com</h2> */}
            <span className="designation">Entrepreneur | IT Consultant | Team Leader | Fullstack Developer</span>
            <p className="copyright">&copy; 2023</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                {/* <li>
                    <a href="https://twitter.com/"><i className="lab la-twitter"></i></a>
                </li> */}
                <li>
                    <a href="https://www.linkedin.com/in/sabinov/" target="_blank" rel="noreferrer"><i className="lab la-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://github.com/sabinovelasquez" target="_blank" rel="noreferrer"><i className="lab la-github"></i></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@sabinovelasquez" target="_blank" rel="noreferrer"><i className="lab la-youtube"></i></a>
                </li>
            </ul>
            <a href="https://calendly.com/sabino_vl/30min" target="_blank" rel="noreferrer" className="theme-btn">
                <i className="las la-calendar-day"></i> Let's talk!
            </a>
        </div>
  )
}   
