import React from "react";
import Nav from "../nav/Nav";
import "./projet.css";
import projet1 from "../img/projet1.jpg";
import projet2 from "../img/projet2.jpg";
import projet3 from "../img/projet3.jpg";

function Projets() {
  return (
    <div>
      <Nav />
      <div className="allProject">
        <div className="project1">
          <img src={projet1} alt="ImgProjet1" className="imgProjet1" />
          <h3 className="titreProjet1">En cours de production</h3>
          <p className="dateProjet">15-12-2021</p>
        </div>
        <div className="project2">
          <img src={projet2} alt="ImgProjet2" className="imgProjet2" />
          <h3 className="titreProjet2">Undefined Cocktails</h3>
          <p className="dateProjet">18-10-2021 au 19-11-2021</p>
        </div>
        <div className="project3">
          <img src={projet3} alt="ImgProjet3" className="imgProjet3" />
          <h3 className="titreProjet3">Welcome to Paris</h3>
          <p className="dateProjet">27-09-2021 au 08-10-2021</p>
        </div>
      </div>
    </div>
  );
}

export default Projets;
