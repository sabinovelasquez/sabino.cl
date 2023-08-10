import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Clientlogos() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section>
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="clients-logos">
                    <h4 className="scroll-animation" data-aos='fade-up'>worked with</h4>
                    <div className="row align-items-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-bchile.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-bci.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-cencosud.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-socovesa.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-falabella.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-tottus.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-cuprum.png" alt="Client"/>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-bice.png" alt="Client"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


