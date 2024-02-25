import { Link } from "react-router-dom";
import image from '../images/anterior.png';
import globo from '../images/globo.png';      
import "../styles/layouts/Projects.scss";

const proyectos = [
  {
    title: "ONE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate nobis inventore velit voluptatum nulla vel alias commodi possimus maxime. Omnis nihil ipsam iusto aperiam excepturi totam libero, vel labore."
  },
  {
    title: "TWO",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem suscipit nihil dolorum, molestias optio officiis voluptas dolores eos ea laborum numquam qui magni deserunt est ipsum odit veniam commodi! Magni."
  },
  {
    title: "THREE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci officia nesciunt laborum dignissimos ducimus explicabo, pariatur reiciendis recusandae voluptates, voluptate aliquid. Doloremque quasi pariatur recusandae totam inventore dolore voluptas!"
  },
  {
    title: "FOUR",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, reiciendis? Consequuntur quisquam sed quidem facere quia, excepturi facilis pariatur vero eius ullam libero temporibus impedit eos rerum architecto minus unde!"
  }
];

function renderProyectos() {
  return proyectos.map((proyecto, index) => (
    <article key={index} className="projects_card">
      <h2 className="projects_card_title">{proyecto.title}</h2>
      <img className="projects_card_img" src={globo} alt="" />
      <p className="projects_card_text">{proyecto.text}</p>
    </article>
  ));
}

function Projects() {
  return (
    <>
       <Link to="/">
        <img className="arrow" src={image} alt="flecha" />
      </Link>
    
      <div className="projects">
        {renderProyectos()}
      </div>
     
    </>
  );
}

export default Projects;

