import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiRender
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import {
  FaWindows,
  FaDocker
} from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiCloudinary } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
        <span style={{ fontSize: "20px" }} className="purple">Windows</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span style={{ fontSize: "20px" }} className="purple">VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span style={{ fontSize: "20px" }} className="purple">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <span style={{ fontSize: "20px" }} className="purple">Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
        <span style={{ fontSize: "20px" }} className="purple">Render</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
        <span style={{ fontSize: "20px" }} className="purple">Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span style={{ fontSize: "20px" }} className="purple">GIT</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <span style={{ fontSize: "20px" }} className="purple">Github</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudinary />
        <span style={{ fontSize: "20px" }} className="purple">Cloudinary</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
