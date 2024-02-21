import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <h1 className="title">RAQUEL COLLADO HERRERA</h1>
      <div className="landing">
        <section className="landing_about">
          <p>
            ¿Alguna vez habéis conocido a alguien que haya pasado de escanear
            artículos en una caja registradora a escribir código?
          </p>
          <p>¡Esa soy yo! </p>
          <p>
            Durante años, me desempeñé funciones como cajera y atención al
            cliente. Esa sonrisa constante y la habilidad para manejar
            situaciones difíciles que vinieron con el territorio. Pero en algún
            momento, me dí cuenta que quería algo más. Quería desafíos nuevos,
            quería aprender y crecer en una dirección completamente diferente y
            que desde siempre me ha gustado. Así que, decidí lanzarme a la
            piscina y me sumergí en el mundo del desarrollo web. Y sí, fue un
            cambio radical, pero estoy aquí para demostrar que nunca es
            demasiado tarde para reinventarse. Me lancé de cabeza a un bootcamp
            de programación web, absorbí todo lo que pude y me sumergí en la
            creación de código como nueva aventura emocionante. Ahora, aquí
            estoy, lista para combinar mi experiencia en servicio al cliente con
            mis nuevas habilidades en programación web.
          </p>
          <p>¿La combinación perfecta? ...</p>
          <p>¡Podría ser!</p>
        </section>
        <ul className="landing_list">
          <li className="landing_list_tools">
            <Link className="landing_list_link" to="/herramientas">Herramientas</Link>
          </li>
          <li className="landing_list_projects">
            <Link className="landing_list_link" to="/proyectos">Proyectos</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Landing;
