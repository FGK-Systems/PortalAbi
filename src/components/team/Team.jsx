import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import "../about/about.css"

const Team = () => {
  return (
    <>
      <Back title='Coordenação' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Team
