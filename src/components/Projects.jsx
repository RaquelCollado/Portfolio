import React from "react";
import "../styles/layouts/Projects.scss";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <Link to="/">
        <img className="arrow" src="/anterior.png" alt="flecha" />
      </Link>
        <article className="projects_card">
          <h2 className="projects_card_title">ONE</h2>
          <img className="projects_card_img" src="/globo.png" alt="" />
          <p className="projects_card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate nobis inventore velit voluptatum nulla vel alias commodi possimus maxime. Omnis nihil ipsam iusto aperiam excepturi totam libero, vel labore.</p>
        </article> 
        <article className="projects_card">
        <img className="projects_card_img" src="/globo.png" alt="" />
          <h2 className="projects_card_title">TWO</h2>
          <p className="projects_card_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem suscipit nihil dolorum, molestias optio officiis voluptas dolores eos ea laborum numquam qui magni deserunt est ipsum odit veniam commodi! Magni.</p>
        </article> <article className="projects_card">
          <h2 className="projects_card_title">THREE</h2>
          <img className="projects_card_img" src="/globo.png" alt="" />
          <p className="projects_card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci officia nesciunt laborum dignissimos ducimus explicabo, pariatur reiciendis recusandae voluptates, voluptate aliquid. Doloremque quasi pariatur recusandae totam inventore dolore voluptas!</p>
        </article> <article className="projects_card">
          <img className="projects_card_img" src="/globo.png" alt="" />
          <h2 className="projects_card_title">FOUR</h2>
          <p className="projects_card_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, reiciendis? Consequuntur quisquam sed quidem facere quia, excepturi facilis pariatur vero eius ullam libero temporibus impedit eos rerum architecto minus unde!</p>
        </article> 
      



    </div>
  );
}

export default Projects;
