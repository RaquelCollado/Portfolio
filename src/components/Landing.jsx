import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <h1 className="title">RAQUEL COLLADO </h1>
      <div className="landing">
        <section className="landing_about">
          <p className="landing_about_text">
            ¿Alguna vez habéis conocido a alguien que haya pasado de escanear
            artículos en una caja registradora a escribir código?
            <span>¡Esa soy yo! </span>
            Durante años, desempeñé funciones como cajera y atención al cliente.
            Esa sonrisa constante y la habilidad para manejar situaciones
            difíciles que vinieron con el territorio. En algún momento, me dí
            cuenta que quería algo más. Quería desafíos nuevos, quería aprender
            y crecer en una dirección completamente diferente y que desde
            siempre me ha gustado. Así que, decidí lanzarme a la piscina y me
            sumergí en el mundo del desarrollo web. Y sí, fue un cambio radical,
            pero estoy aquí para demostrar que nunca es demasiado tarde para
            reinventarse. Me lancé de cabeza a un bootcamp de programación web,
            absorbí todo lo que pude y me sumergí en la creación de código como
            nueva aventura emocionante. Ahora, aquí estoy, lista para combinar
            mi experiencia en servicio al cliente con mis nuevas habilidades en
            programación web.
            <span>¿La combinación perfecta? ...</span>
            <span>¡Podría ser!</span>
          </p>
        </section>
        <ul className="landing_list">
          <Link className="landing_list_link" to="/herramientas">
            <li className="landing_list_tools">Herramientas</li>
          </Link>
          <Link className="landing_list_link" to="/proyectos">
            <li className="landing_list_projects">Proyectos</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Landing;
