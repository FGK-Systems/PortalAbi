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
            <p>Muito, muito longe, atrás das montanhas das palavras, longe dos países Vokalia e Consonantia, vivem os textos cegos.</p>
            <div className='button'>
              <button className='primary-btn'>
                Acessar o SGPD <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Acessar o SGPD <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
