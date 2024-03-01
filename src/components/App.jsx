import "../styles/App.scss";

import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Projects from "./Projects";
import Contact from "./Contact";
import Tools from "./Tools";
import Cv from "./Cv";
import Form from "./Form";

function App() {
 
  return (
    <div className='container'>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing/>
            </>
          }
        ></Route>
        <Route
          path="/curriculum"
          element={
            <>
              <Cv />
            </>
          }
        ></Route>
        <Route
          path="/contacto"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="/formulario"
          element={
            <>
              <Form />
            </>
          }
          ></Route>
        <Route
          path="/proyectos"
          element={
            <>
              <Projects />
            </>
          }
        ></Route>
        <Route
          path="/herramientas"
          element={
            <>
              <Tools />
            </>
          }
        ></Route>
       

      </Routes>
    </div>
  );
}

export default App;
