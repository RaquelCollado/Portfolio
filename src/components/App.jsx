import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import WhoAre from "./WhoAre";
import Tools from "./Tools";
import Projects from "./Projects";
import Contact from "./Contact";


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
          path="/QuienSoy"
          element={
            <>
              <WhoAre />
            </>
          }
        ></Route>

        <Route
          path="/Herramientas"
          element={
            <>
              <Tools />
            </>
          }
        ></Route>

        <Route
          path="/Proyectos"
          element={
            <>
              <Projects />
            </>
          }
        ></Route>
        <Route
          path="/Contacto"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>

      </Routes>
    </div>
  );
}

export default App;
