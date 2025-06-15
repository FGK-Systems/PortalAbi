import React from "react"
import "./about.css"

const AboutUs = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <h2>Nossa História</h2>
        <h3>Arte, Educação e Resistência Afro-Brasileira</h3>
        
        <div className="about-content">
          <div className="highlight-box">
            <p>
              O Abí Axé Egbé é um grupo de cultura negra nascido em 2013 como projeto de extensão da Universidade Federal de Alagoas (UFAL), no Campus do Sertão. Unindo arte, educação e militância, o grupo promove o ensino da cultura afro-brasileira e africana por meio de oficinas, formações, apresentações e ações comunitárias. </p>
          </div>

          <p>
            Composto por mais de 50 integrantes, o grupo realiza espetáculos com dança dos orixás, samba-reggae, afoxé e outras expressões afro-brasileiras, levando ao público beleza, ancestralidade e consciência social. Também atua na formação de professores e no combate ao racismo, à intolerância religiosa, ao machismo e à LGBTfobia. </p>

          <p>
           Reconhecido como equipamento cultural da UFAL, o Abí Axé Egbé é referência no sertão alagoano e em outras regiões do Brasil, inspirando educação antirracista e transformação social através da arte.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs