import { Link } from "react-router-dom";
import image from "../images/anterior.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import mobile from "../images/mobile1.png";

function Contact() {
  return (
    <>
      <div className="back">
        <Link to="/">
          <img className="arrow" src={image} alt="flecha" />
        </Link>
      
      <h2 className="red">Aquí podrás encontrarme...</h2>
      </div>
      <div className="contact">
        <ul className="contact_list">
          <li>
            <a href="https://github.com/RaquelCollado" target="_blank">
              <img
                className="contact_list_git"
                src={github}
                alt="logo de github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rcolladoh/" target="_blank">
              <img
                className="contact_list_linkedin"
                src={linkedin}
                alt="logo de linkedin"
              />
            </a>
          </li>
          <li>
            <a href="tel:+34680947236" target="_blank">
              <img
                className="contact_list_phone"
                src={mobile}
                alt="imagen de un movil"
              />
            </a>
          </li>
          <li>
            <a href="mailto:rcolladoherrera@gmail.com" target="_blank">
              <img
                className="contact_list_email"
                src={email}
                alt="imagen de un sobre"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
