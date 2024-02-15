import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Link to="/" >
          <img className='arrow' src="/anterior.png" alt="flecha" />
        </Link>
      <p>ESTO APARECE SOLO CUANDO ALGUIEN ENTRA EN CONTACTO</p>
    </div>
  )
}

export default Contact
