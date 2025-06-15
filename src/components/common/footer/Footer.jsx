import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Notícias - Fique ligado e receba as últimas atualizações</h1>
            <span></span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Informe seu e-mail' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ABÍ AXÉ EGBÉ</h1>
            <span>Grupo de Cultura Negra do Sertão</span>
            <p>"Conectando histórias, culturas e vozes do Sertão, onde a tradição e a identidade negra ganham vida e força."</p>

            <a href="http://www.facebook.com/profile.php?id=100063483945127" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="http://www.instagram.com/abiaxeegbe_oficial/" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a></div>
          <div className='box link'>

          </div>
          <div className='box last'>
            <h3>Dúvidas?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                AL-145, 3849 - Cidade Universitária, Delmiro Gouveia - AL, 57480-000
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +55 (82) 3641-0121
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                abiaxeegbeufal@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2025 Todos os direitos reservados | Grupo Abí Axé Egbé em parceria com FGK Systems <i className='fa fa-heart'></i>
        </p>
      </div>
    </>
  )
}

export default Footer
