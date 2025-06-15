import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='SEJA BEM VINDO AO' title='Portal do Abí Axé' />
            <p>Conectando histórias, culturas e vozes do Sertão, onde a tradição e a identidade negra ganham vida e força.</p>
            <div className='button'>

            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
