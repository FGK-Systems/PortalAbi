import React, { useEffect } from "react"
import $ from "jquery"
import "magnific-popup"
import "magnific-popup/dist/magnific-popup.css"
import "./price.css"

const images = [
  { src: "./images/galeria/1.jpg", title: "Cortejo de Carnaval - 2020" },
  { src: "./images/galeria/2.jpg", title: "Cortejo de Carnaval - 2020" },
  { src: "./images/galeria/3.jpg", title: "Cortejo de Carnaval - 2020" },
  { src: "./images/galeria/4.jpg", title: "Cortejo de Carnaval - 2020" },

  { src: "./images/galeria/5.jpg", title: "1º Encontro das Tradições" },
  { src: "./images/galeria/6.jpg", title: "1º Encontro das Tradições" },
  { src: "./images/galeria/7.jpg", title: "1º Encontro das Tradições" },
  { src: "./images/galeria/8.jpg", title: "1º Encontro das Tradições" },

  { src: "./images/galeria/9.jpg", title: "Lançamento do Livro: Ser(tão) Negro com o Abí Axé Egbé" },
  { src: "./images/galeria/10.jpg", title: "Lançamento do Livro: Ser(tão) Negro com o Abí Axé Egbé" },
  { src: "./images/galeria/11.jpg", title: "Lançamento do Livro: Ser(tão) Negro com o Abí Axé Egbé" },
  { src: "./images/galeria/12.jpg", title: "Lançamento do Livro: Ser(tão) Negro com o Abí Axé Egbé" },

  { src: "./images/galeria/13.jpg", title: "Cortejo de Carnaval - 2019" },
  { src: "./images/galeria/14.jpg", title: "Cortejo de Carnaval - 2019" },
  { src: "./images/galeria/15.jpg", title: "Cortejo de Carnaval - 2019" },
  { src: "./images/galeria/16.jpg", title: "Cortejo de Carnaval - 2019" },
]

const PriceCard = () => {
  useEffect(() => {
    $("#galeria-fotos").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return item.el.attr("title")
        },
      },
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function (element) {
          return element.find("img")
        },
      },
    })
  }, [])

  return (
    <section id="fotos" className="galeria-section">

      <div id="galeria-fotos" className="galeria-container">
        {images.map((img, idx) => (
          <a href={img.src} title={img.title} key={idx}>
            <img src={img.src} alt={img.title} className="galeria-thumb" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default PriceCard
