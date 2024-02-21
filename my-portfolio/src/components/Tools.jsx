import { Link } from "react-router-dom";
import image from "../images/anterior.png";

function Tools() {
  return (
    <>
      <Link to="/">
        <img className="arrow" src={image} alt="flecha" />
      </Link>
      
        <p className="tools">
          En el ámbito de la maquetación, estoy familiarizada con HTML5 y CSS3,
          incluyendo técnicas avanzadas como CSS Flexbox y CSS Grid. También he
          trabajado en proyectos de diseño responsive y he utilizado SASS para
          mejorar la estructura y el mantenimiento de mis estilos. Me siento
          cómoda trabajando con JavaScript, donde he adquirido conocimientos en
          la manipulación del DOM y en la integración de APIs de terceros
          utilizando datos en formato JSON. Además, he tenido la oportunidad de
          desarrollar algunas SPAs con React, utilizando componentes, estados, y
          realizando pruebas con Jest y Testing Library. En el backend, he
          experimentado con Node JS y Express para crear algunas API de manera
          clara y concisa. También he incursionado en la creación de algunos
          servidores estáticos y dinámicos, así como en el despliegue de
          aplicaciones en producción utilizando plataformas como Render y
          FreeDB. En cuanto a las bases de datos, he tenido la oportunidad de
          trabajar tanto con SQL como con NoSQL. He realizado algunos proyectos
          utilizando MySQL y MySQL Workbench, así como MongoDB y Mongo Cloud,
          donde he utilizado Mongoose para integrar estas bases de datos con
          aplicaciones NodeJS. Por supuesto, el control de versiones es una
          parte fundamental de mi flujo de trabajo, por lo que utilizo Git de
          manera habitual . Además, estoy familiarizada con algunas herramientas
          como Slack, GitHub, VS Code, Gulp, Terminal, Linter, Zeplin y Postman
          , que me han permitido colaborar de manera efectiva y desarrollar
          proyectos de forma más eficiente.
        </p>
      
    </>
  );
}

export default Tools;
