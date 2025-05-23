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
            <p>"Um pequeno rio chamado Duden corre por ali e abastece o local com as regalias necessárias."</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Cursos</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
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
