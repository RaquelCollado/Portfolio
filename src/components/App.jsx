import "../styles/App.scss";
import Header from "./Header";
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
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
