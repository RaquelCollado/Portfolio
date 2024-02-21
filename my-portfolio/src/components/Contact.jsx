
import { Link } from 'react-router-dom'
import image from '../images/anterior.png';      

function Contact() {
  return (
    <div>
      <Link to="/" >
          <img className='arrow' src={image} alt="flecha" />
        </Link>
      <p>ESTO APARECE SOLO CUANDO ALGUIEN ENTRA EN CONTACTO</p>
    </div>
  )
}

export default Contact
