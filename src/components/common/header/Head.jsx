import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ABÍ AXÉ EGBÉ</h1>
            <span>Grupo de Cultura Negra do Sertão</span>
          </div>

          <div className='social'>
            <a href='https://instagram.com/abiaxeegbe_oficial' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram icon'></i>
            </a>
            <a href='https://youtube.com/c/AbíAxéEgbé' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-youtube icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
