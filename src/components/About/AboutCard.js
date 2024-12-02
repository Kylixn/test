import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Bonjour ! Je suis <span className="purple">Kylian PAPEGAY </span>
            je viens de <span className="purple"> France, des Hauts-De-France.</span>
            <br />
            <br />
            Je suis actuellement étudiant en 2ème année de BTS SIO au lycée <span className="purple">André Malraux</span> à Béthune !
            <br />
            <br />  
            Mise à part ma passion pour le réseau informatique, je pratique aussi d'autres activités !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux-vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire du sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Passer du temps en famille
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
