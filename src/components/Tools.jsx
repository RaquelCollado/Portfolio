import { Link } from "react-router-dom";
import image from "../images/anterior.png";

function Tools() {
  return (
    <>
      <Link to="/">
        <img className="arrow" src={image} alt="flecha" />
      </Link>
      <div className="tools">
        <ul className="tools_ul">
          <li className="tools_ul_liOne">
            <p>
              El control de versiones es una parte fundamental de mi flujo de
              trabajo, por lo que
              <span> utilizo Git de manera habitual</span>. Además, estoy
              familiarizada con algunas herramientas como
              <span>
                {" "}
                Slack, GitHub, VS Code, Gulp, Terminal, Linter, Zeplin y Postman
              </span>
              , que me han permitido colaborar de manera efectiva y desarrollar
              proyectos de forma más eficiente.
            </p>
          </li>
          <li className="tools_ul_liTwo">
            <h2 className="liTitle">Maquetación</h2>
            <p>
              Estoy familiarizada con
              <span> HTML5 y CSS3</span>, incluyendo técnicas avanzadas como
              <span> CSS Flexbox y CSS Grid</span>. También he trabajado en
              proyectos de diseño responsive y he utilizado <span> SASS </span>
              para mejorar la estructura y el mantenimiento de mis estilos.
            </p>
          </li>
          <li className="tools_ul_liThree">
            <h2 className="liTitle">Programación</h2>
            <p>
              Me siento cómoda trabajando con <span>JavaScript</span>, donde he
              adquirido conocimientos en la manipulación del DOM y en la
              integración de APIs de terceros utilizando datos en formato JSON.
              Además, he tenido la oportunidad de desarrollar algunas SPAs con
              <span> React</span>.
            </p>
          </li>
          <li className="tools_ul_liFour">
            <h2 className="liTitle">Back</h2>
            <p>
              He experimentado con
              <span> Node JS y Express</span> para crear algunas API de manera
              clara y concisa. También he incursionado en la creación de algunos
              servidores estáticos y dinámicos, así como en el despliegue de
              aplicaciones en producción utilizando plataformas como Render y
              FreeDB.
            </p>
          </li>
          <li className="tools_ul_liFive">
            <h2 className="liTitle">Bases de datos</h2>
            <p>
              He tenido la oportunidad de trabajar tanto con <span>SQL</span>{" "}
              como con <span>NoSQL</span>. He realizado algunos proyectos
              utilizando
              <span> MySQL y MySQL Workbench</span>, así como
              <span> MongoDB y Mongo Cloud</span>, donde he utilizado Mongoose
              para integrar estas bases de datos con aplicaciones
              <span> NodeJS</span>.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tools;
