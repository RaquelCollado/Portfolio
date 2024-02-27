import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../images/anterior.png";

function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
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
      <form className="form" onSubmit={handleSubmit}>
        <label className="form_label" htmlFor="nombre">
          Nombre:
        </label>
        <input
          className="form_input"
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label className="form_label" htmlFor="email">
          Email:
        </label>
        <input
          className="form_input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="form_label" htmlFor="mensaje">
          Mensaje:
        </label>
        <textarea
          className="form_inpuText"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          cols="50"
          required
        ></textarea>

        <input className="form_inputSend" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form;
