import { Link } from "react-router-dom";
import image from "../images/anterior.png";
import "../styles/layouts/Projects.scss";

const proyectos = [
  {
    title: "Vuelta al cole",
    text: "Este proyecto consiste en la maquetación de una página web utilizando HTML y CSS, con un enfoque en las propiedades Flexbox y Grid para crear un diseño flexible y responsive. La maquetación se realiza siguiendo un patrón proporcionado, lo que requiere organizar y estructurar los elementos de la página de acuerdo con las especificaciones dadas.",
    link: "https://raquelcollado.github.io/Web-Vuelta-al-cole/",
    images: "https://www.moncloa.com/wp-content/uploads/2021/08/Mochilas-para-la-vuelta-al-cole.jpg",
  },
  {
    title: "Juego de Piedra, Papel o Tijera",
    text: "Implementación interactiva del clásico juego de 'Piedra, Papel o Tijera' utilizando tecnologías web como HTML, SCSS y JavaScript. La aplicación permite al usuario seleccionar una de las opciones: piedra, papel o tijera, y luego genera una elección aleatoria para la máquina. El objetivo del juego es acumular un máximo de 10 partidas ganadas contra la máquina.",
    link: "https://raquelcollado.github.io/Piedra-Papel-o-Tijera/",
    images: "https://github.com/RaquelCollado/Piedra-Papel-o-Tijera/blob/main/src/images/piedra-papel-tijeras.png?raw=true"

  },
  {
    title: "Owen Wilson's Wow",
    text: "Aplicación web desarrollada utilizando HTML, SCSS, React y Vite, que permite a los usuarios explorar las películas en las que el actor Owen Wilson ha participado. La aplicación se conecta a una API externa que proporciona datos sobre las películas en las que Owen Wilson ha actuado, filtrándolas por nombre y año.",
    link: "https://raquelcollado.github.io/Owen-Wilson-Wow-s/",
    images: "https://pipedream.com/s.v0/app_X8Phb5/logo/orig"

  },
  {
    title: "Buscador de series",
    text: "Este proyecto se enfoca en el desarrollo de un buscador de series utilizando tecnologías web como HTML, SCSS y JavaScript. La aplicación se conecta a una API externa que proporciona información detallada sobre una amplia gama de series de televisión, permitiendo a los usuarios buscar y explorar diferentes opciones permitiendo seleccionar las series favoritas.",
    link: "https://raquelcollado.github.io/Buscador-de-series/",
    images: "https://cdn.avpasion.com/wp-content/uploads/2023/01/netflix-1.jpg"

  },
  {
    title: "Hangman Game",
    text: "Implementación del clásico juego del ahorcado desarrollado en pair programming utilizando React y Vite. El juego desafía a los usuarios a adivinar una palabra oculta seleccionada al azar, mostrando una serie de guiones que representan las letras de la palabra. Los jugadores intentan adivinar las letras correctas para completar la palabra antes de que se agoten sus oportunidades.",
    link: "https://beta.adalab.es/promo-U-module-3-pair-2-sprint-2-hangman-game/",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXLAKzDtK6SDaNOuX5xH1vMGnJQmyS_KTho5rJVhhqgwBVCupOsFXlx829eyvoQzRznA&usqp=CAU"

  },
  {
    title: "Awesome Profile-Cards",
    text: "Este proyecto, desarrollado en equipo, tiene como objetivo proporcionar a los usuarios una herramienta para crear tarjetas personalizadas que faciliten el intercambio de información de contacto. La aplicación permite a los usuarios ingresar sus datos personales, como nombre, ocupación, correo electrónico y redes sociales, y generar una tarjeta virtual con un diseño atractivo y profesional.",
    link: "https://beta.adalab.es/Project-Promo-U-Module-2-Team-5/",
    images: "https://user-images.githubusercontent.com/94449849/166514800-4e44aad7-cb60-4e6b-a011-0878c7e11ba2.png"

  },
  {
    title: "Rebirth Web",
    text: "Proyecto, desarrollado en equipo, se basa en una maquetación proporcionada para crear un portal que ofrece información detallada sobre el equipo involucrado en proyectos web. La aplicación permite a los usuarios conocer a los miembros del equipo, sus roles, habilidades y contactos, lo que facilita la colaboración y la comunicación eficaz durante el desarrollo de proyectos.",
    link: "https://beta.adalab.es/project-promo-u-module-1-team-1/",
    images: "https://t2.ea.ltmcdn.com/es/posts/5/2/5/animales_que_sufren_la_metamorfosis_en_su_desarrollo_23525_orig.jpg"

  },
  {
    title: "Proyectos Cohete",
    text: "Plataforma web diseñada en equipo que permite a los usuarios gestionar y publicar sus proyectos, utilizando una base de datos personalizada para almacenar la información. La aplicación ofrece funcionalidades avanzadas que permiten a los usuarios introducir datos propios y de sus proyectos.",
    link: "https://rocket-project.onrender.com/",
    images: "https://previews.123rf.com/images/pchvector/pchvector2203/pchvector220300558/183995475-equipo-de-peque%C3%B1os-empresarios-lanzando-cohetes-juntos-gente-de-la-empresa-con-idea-innovadora.jpg"

  },
];

function renderProyectos() {
  return proyectos.map((proyecto, index) => (
    <a href={proyecto.link} key={index} target="_blank">
      <article className="projects_card">
        <h2 className="projects_card_title">{proyecto.title}</h2>
        <img
          className="projects_card_img"
          src={proyecto.images}
          alt={proyecto.title}
        />
        <p className="projects_card_text">{proyecto.text}</p>
      </article>
    </a>
  ));
}

function Projects() {
  return (
    <>
      <Link to="/">
        <img className="arrow" src={image} alt="flecha" />
      </Link>

      <div className="projects">{renderProyectos()}</div>
    </>
  );
}

export default Projects;
