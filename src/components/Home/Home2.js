import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permettez-moi <span className="purple"> de me présenter </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle Kylian, j'ai 19 ans et je suis actuellement étudiant dans le domaine de l'administration informatique pour réaliser mon rêve,               <i>
                <b className="purple"> travailler dans ce métier </b> !
              </i>
              <br />
              <br />
              Mes centres d'intérêts dans ce domaine sont principalement de gérer des réseaux avec&nbsp;
              <i>
                <b className="purple">Windows Server</b> mais aussi avec
                <b className="purple">
                  {" "}
                  Linux
                </b>.
              </i>
              <br />
              <br />
              Mais j'aime aussi de temps en temps développer des projets
              avec la librairie <b className="purple">JavaScript</b> &
              <i>
                <b className="purple">
                  {" "}
                  Java
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ MOI SUR</h1>
            <ul className="home-about-social-links">

            <li className="social-icons">
            <a
                  href="https://github.com/Kylixn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kylian-papegay/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
