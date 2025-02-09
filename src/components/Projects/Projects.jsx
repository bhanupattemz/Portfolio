import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../assets/Projects/chatify.png";
import epic_essentials from "../../assets/Projects/epic_essentials.png"
import yelpCamp from "../../assets/Projects/YelpCamp.png"
import bikerentals from "../../assets/Projects/bikerentals.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={epic_essentials}
              isBlog={false}
              title="Epic Essentials"
              description="A responsive e-commerce platform has been developed, featuring user authentication, shopping cart functionality, product search, filtering options, reviews, and order tracking, with Stripe integrated as a payment gateway for testing purposes. Additionally, an admin dashboard is being implemented to manage products and users, track orders, and monitor sales in real time, along with inventory management, while ensuring cross-device compatibility."
              ghLink="https://github.com/bhanupattemz/Epic_Essentials.git"
              demoLink="https://epic-essentials.onrender.com/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={yelpCamp}
              isBlog={false}
              title="YelpCamp"
              description="The platform allows users to discover and review various campgrounds, featuring user authentication, image uploads, and campground management. Built with technologies such as Node.js, Express, MongoDB, and Mongoose, the project follows a unified architecture where both front-end and back-end are integrated. YelpCamp highlights responsive design and effective web development practices, making it a practical and user-friendly solution."
              ghLink="https://github.com/bhanupattemz/YelpCamp.git"
              demoLink="https://yelpcamp-u9q5.onrender.com"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bikerentals}
              isBlog={false}
              title="Neighborhood Wheels"
              description="This dynamic web application was developed for a college coding club to manage bike rentals, built using Firebase and React with a fully responsive design for an optimal user experience across devices. Neighborhood Wheels enables users to list their bikes for rent, while potential renters can browse and rent available bikes with ease."
              ghLink="https://github.com/bhanupattemz/Neighborhood__wheels-main.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat App"
              description="Designed and developed a clean, user-friendly chat interface with real-time messaging, active user status, and notifications, utilizing WebSocket technology via Socket.io for instant communication. The project leverages MongoDB for efficient data storage, optimized through indexing and well-structured data models. It also ensures secure user authentication and authorization using JWT (JSON Web Tokens)."
              ghLink="https://github.com/bhanupattemz/Chat_App.git"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
