import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { PiGraphBold } from "react-icons/pi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiEjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import {
  SiRedis,
  SiMysql,
  SiFlask,
  SiRedux
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbPrompt } from "react-icons/tb";
import { FaBrain } from "react-icons/fa6";
import { FaAlgolia } from "react-icons/fa6";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <span style={{ fontSize: "20px" }} className="purple">HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <span style={{ fontSize: "20px" }} className="purple">CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandJavascript />
        <span style={{ fontSize: "20px" }} className="purple">Javascript</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span style={{ fontSize: "20px" }} className="purple">React.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <span style={{ fontSize: "20px" }} className="purple">Redux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
        <span style={{ fontSize: "20px" }} className="purple">Bootstrap</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span style={{ fontSize: "20px" }} className="purple">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiGraphBold />
        <span style={{ fontSize: "20px" }} className="purple">LangGraph</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <span style={{ fontSize: "20px" }} className="purple">Multiagent</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <span style={{ fontSize: "20px" }} className="purple">RAG</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbPrompt />
        <span style={{ fontSize: "20px" }} className="purple">Prompt Engg</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAlgolia />
        <span style={{ fontSize: "20px" }} className="purple">DSA</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span style={{ fontSize: "20px" }} className="purple">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <span style={{ fontSize: "20px" }} className="purple">Flask</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span style={{ fontSize: "20px" }} className="purple">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <span style={{ fontSize: "20px" }} className="purple">Mysql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span style={{ fontSize: "20px" }} className="purple">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <span style={{ fontSize: "20px" }} className="purple">SQLite</span>
      </Col>
    </Row>
  );
}

export default Techstack;