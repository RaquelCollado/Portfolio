import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../images/anterior.png";

function Form() {


  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contactForm">
      <Link to="/">
        <img className="arrow" src={image} alt="flecha" />
      </Link>
      <h2 className="titleForm">
        Tu opinión es muy importante para mí y estaría encantada de recibir
        cualquier feedback, sugerencia o pregunta que tengas. No dudes en
        contactarme para cualquier cosa que necesites o para compartir tus
        ideas. ¡Espero poder colaborar contigo pronto!
      </h2>
      <form className="form"  action="https://formsubmit.co/rcolladoherrera@gmail.com" method="POST">
        <label className="form_label" htmlFor="email">
          Email:
        </label>
        <input
          className="form_input"
          type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            title="Por favor introduce un email válido."
        />

        <label className="form_label" htmlFor="mensaje">
          Mensaje:
        </label>
        <textarea
          className="form_inpuText"
          id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
        ></textarea>

        <input className="form_inputSend" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form;
