import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import epic_essentials from "../../assets/Projects/epic_essentials.png"
import collegeClubs from "../../assets/Projects/collegeClubs.png"
import yelpCamp from "../../assets/Projects/YelpCamp.png"
import lessonplanner from "../../assets/Projects/lessonPlanner.png"
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
              imgPath={collegeClubs}
              isBlog={false}
              title="College Clubs"
              description="A responsive platform was developed to manage student clubs, events, donations, and announcements, featuring role-based dashboards for admins and coordinators to handle events, members, and club resources. It includes functionalities like event registrations, club polls, a donation system, a library, a gallery, YouTube integration, and a centralized announcement system, with student login enabled via college email ID. The platform was built using HTML, CSS, JavaScript, React, Redux, Material UI, Node.js, Express.js, MongoDB, Cloudinary, Passport.js, Razorpay, and Postman."
              ghLink="https://github.com/bhanupattemz/CollegeClubs.git"
              demoLink="https://collegeclubs.onrender.com/"
            />
          </Col>

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
              imgPath={lessonplanner}
              isBlog={false}
              title="Lesson Planner"
              description="A responsive web application was developed to assist educators in generating, editing, and managing lesson plans using AI, with built-in authentication and session management. It features AI-generated lesson plans based on topic and grade level, customizable lesson editing, PDF export, dark/light theme, and a demo login using local storage and bcrypt for password hashing. The application dynamically adapts lesson content and was built using React.js, ShadCN, TailwindCSS, Google Gemini API, Local Storage, Bcrypt, and PDF generation."
              ghLink="https://github.com/bhanupattemz/Lesson_Planner.git"
              demoLink="https://lesson-planner-two.vercel.app/"
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
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
