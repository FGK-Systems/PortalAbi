import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Galeria' />
      <section className='price padding'>
        <div className='container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
