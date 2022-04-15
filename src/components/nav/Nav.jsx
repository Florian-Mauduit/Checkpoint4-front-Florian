import React from "react";
import "./nav.css";
import linkedin from "../img/linkedin-logo.png";
import github from "../img/github.png";
import cvLogo from "../img/resume.png";
import CvFlo from "../img/CVFlorianMauduit.pdf";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header>
      <div className="pres">
        <h3 className="name">Florian Mauduit</h3>
        <a href="https://www.linkedin.com/in/florian-mauduit/" target="_blank">
          <img src={linkedin} alt="logo Linkedin" className="linkedinImg" />
        </a>
        <a href="https://github.com/Florian-Mauduit" target="_blank">
          <img src={github} alt="logo Github" className="githubImg" />
        </a>
        <a href={CvFlo} target="_blank">
          <img src={cvLogo} alt="logo cv" className="cvImg" />
        </a>
      </div>
      <div className="nav">
        <NavLink className="lienNav" to="/">
          Accueil
        </NavLink>
        <NavLink className="lienNav" to="/competences">
          Mes compétences
        </NavLink>
        <NavLink className="lienNav" to="/projet">
          Mes projets
        </NavLink>
      </div>
    </header>
  );
}

export default Nav;
