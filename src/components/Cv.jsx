
import { Link } from "react-router-dom";
import image from "../images/anterior.png";
import cvitae from "../images/cv.png";
import cvPdf from "../CV_RaquelCollado.pdf";
function Cv() {
  return (
    <>
      
        <Link to="/">
          <img className="arrow" src={image} alt="flecha" />
        </Link>
        <div className="curriculum">
          <p className="curriculum_text">Pincha en la imagen y descargarás mi curriculum</p>
          <a
            href={cvPdf}
            download="CV_RaquelCollado.pdf"
            ><img className="curriculum_image" src={cvitae} alt="Curriculum Vitae" />
          </a>
          <h3 className="curriculum_title">gracias por tu interés, ¡espero verte pronto!</h3>
      </div>
      
    </>
  );
}

export default Cv;
