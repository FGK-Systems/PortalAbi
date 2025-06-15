import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Início</Link>
            </li>
            <li>
              <Link to='/courses'>Formação</Link>
            </li>
            {/* <li>
              <Link to='/about'>Sobre nós</Link>
            </li> */}
            <li>
              <Link to='/team'>Coordenação</Link>
            </li>
            <li>
              <Link to='/pricing'>Galeria</Link>
            </li>
            <li>
              <Link to='/journal'>Materias</Link>
            </li>
            <li>
              <Link to='/contact'>Contate-nos</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>
                <a href="http://127.0.0.1:8000/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
                  Acessar o SGPD <i className='fa fa-long-arrow-alt-right'></i>
                </a>
              </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
