import "./App.css";
import Accueil from "./components/accueil/Accueil";
import { Routes, Route } from "react-router-dom";
import Competences from "./components/competences/Competences";
import Projet from "./components/projets/Projets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Accueil />} />
        <Route path={"/competences"} element={<Competences />} />
        <Route path={"/projet"} element={<Projet />} />
      </Routes>
    </div>
  );
}

export default App;
