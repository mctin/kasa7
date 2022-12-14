import React from "react";
import Banner2 from "../components/layout/banner2";
// ACCORDION
import Accordion from "../components/layout/Accordion";
import banner2 from "../assets/images/bannermobileinfo.png";
// STYLE
import "../styles/infoPage.css";

function About() {
  return (
    <div className="body-about">
      <Banner2 img={banner2} text="">
        {" "}
      </Banner2>
      <div className="container">
        <div className="accordion-container">
          <Accordion
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                et toutes les informations sont régulièrement vérifiées par nos équipes"
          />
        </div>

        <div className="accordion-container">
          <Accordion
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>

        <div className="accordion-container">
          <Accordion
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>

        <div className="accordion-container">
          <Accordion
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
                aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet 
                à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
                domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>
  );
}

export default About;
