import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.781919151563!2d-37.988790269439455!3d-9.348186712473453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7092752f4bf42e1%3A0x829e278d9a333861!2sUniversidade%20Federal%20de%20Alagoas%20-%20Campus%20Sert%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1747957393871!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '

  return (
    <>
      <Back title='Contate-nos' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contate-nos</h1>
            <p>Estamos abertos a qualquer sugestão ou apenas para bater um papo</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ENDEREÇO:</h4>
                <p>AL-145, 3849 - Cidade Universitária, Delmiro Gouveia - AL, 57480-000</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> abiaxeegbeufal@gmail.com</p>
              </div>
              <div className='box'>
                <h4>TELEFONE:</h4>
                <p> +55 (82) 3641-0121</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Nome Completo' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Assunto' />
              <textarea cols='30' rows='10'>
                Digite sua mensagem aqui...
              </textarea>
              <button className='primary-btn'>ENVIAR MENSAGEM</button>
            </form>

            <h3>Siga-nos nas redes sociais</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
