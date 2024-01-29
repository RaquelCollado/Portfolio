import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";

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
              <Footer/>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
