import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Projects from "./Projects";
import Contact from "./Contact";
import Tools from "./Tools";

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
          path="/Proyectos"
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
