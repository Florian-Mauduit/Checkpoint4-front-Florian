import React from "react";
import Nav from "../nav/Nav";
import "./competences.css";
function Competences() {
  return (
    <div>
      <Nav />
      <div className="skills">
        <div className="hardSkills">
          <h3 className="titreHard">HardSkills :</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>ReactJs</p>
          <p>Wordpress</p>
          <p>Elementor</p>
          <p>Methodes Agile SCRUM</p>
          <p>Git/gitHub</p>
          <p>Figma</p>
          <p>Trello</p>
        </div>
        <div className="softSkills">
          <h3 className="titreSoft">Soft Skills :</h3>
          <p>Esprit d'équipe</p>
          <p>Persévérant</p>
          <p>Polyvalent</p>
          <p>Capacité d'écoute</p>
          <p>Bon relationnel</p>
          <p>Patient</p>
        </div>
      </div>
    </div>
  );
}

export default Competences;
