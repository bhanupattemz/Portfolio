import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Pattem Bhanu Prakash </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing a degree in Computer Science and Engineering at <span className="purple">JNTUA College of Engineering in Ananthapur</span>.
            <br />
            I completed my Intermediate education (MPC) with a <span className="purple">score of 95%</span> at Sri Chaitanya Junior College in Tirupati.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Physical Activities
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
