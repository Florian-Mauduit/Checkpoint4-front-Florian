import React from "react";
import "./introduction.css";

function Introduction() {
  return (
    <section className="sectionInfo">
      <div className="infoPerso">
        <div className="myPicture">
          {/* <img src={img} alt="" className="myImage" /> */}
          <div className="mail">
            <p>Mon email :</p>
            <p>flomauduit@orange.fr</p>
          </div>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            aliquam reiciendis expedita non natus! Consequuntur molestias rerum
            illo a dolore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
