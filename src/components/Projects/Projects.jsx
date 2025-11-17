import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import epic_essentials from "../../assets/Projects/epic_essentials.png"
import collegeClubs from "../../assets/Projects/collegeClubs.png"
import yelpCamp from "../../assets/Projects/YelpCamp.png"
import lessonplanner from "../../assets/Projects/lessonPlanner.png"
import voiceAssistant from "../../assets/Projects/Voice_assistant.png"
import Reware from "../../assets/Projects/reware.png"
import puzzles from "../../assets/Projects/puzzles.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="projects-heading-container">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={voiceAssistant}
              isBlog={false}
              title="AI Voice Assistant for Windows"
              description="Developed a voice-controlled assistant for Windows laptops using LangGraph and Python to explore voice interaction and automation. The assistant allows users to open applications, adjust system settings such as Wi-Fi, Bluetooth and Airplane Mode, control volume and brightness, perform web searches, play YouTube videos, simulate keyboard inputs, and fetch information from Wikipedia. It also includes basic system monitoring for learning purposes and serves as a practical tool to experiment with voice-driven functionality on Windows."
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={puzzles}
              isBlog={false}
              title="Puzzle Place -- Centralized STEM Puzzle Hub"
              description="Developed a centralized web platform hosting 10 interactive STEM puzzle games with dynamic solving logic.
Integrated backtracking and linear programming-based optimization for efficient puzzle solving.
Designed and implemented a responsive, user-friendly interface using React and JavaScript, improving engagement by 20%."
              ghLink="https://github.com/bhanupattemz/CollegeClubs.git"
              demoLink="https://puzzle-place.vercel.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={collegeClubs}
              isBlog={false}
              title="College Clubs"
              description="A responsive platform was developed to manage student clubs, events, donations, and announcements, featuring role-based dashboards for admins and coordinators to handle events, members, and club resources. It includes functionalities like event registrations, club polls, a donation system, a library, a gallery, YouTube integration, and a centralized announcement system, with student login enabled via college email ID. The platform was built using HTML, CSS, JavaScript, React, Redux, Material UI, Node.js, Express.js, MongoDB, Cloudinary, Passport.js, Razorpay, and Postman."
              ghLink="https://github.com/bhanupattemz/CollegeClubs"
              demoLink="https://collegeclubs.onrender.com"
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
              imgPath={Reware}
              isBlog={false}
              title="ReWear - Community Clothing Exchange (Backend)"
              description="developed RESTful APIs to power the ReWear platform, enabling users to exchange unused clothing through direct swaps or a point-based system. The backend included secure user authentication with email/password signup and login, along with endpoints for browsing items, listing new items with detailed attributes, and managing swap requests and point redemptions. I also implemented admin APIs for moderating item listings and removing inappropriate content. Throughout development, I ensured seamless integration with the frontend while focusing on scalability, security, and delivering a smooth user experience."
              ghLink="https://github.com/bhanupattemz/rewear"
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
              imgPath={lessonplanner}
              isBlog={false}
              title="Lesson Planner"
              description="A responsive web application was developed to assist educators in generating, editing, and managing lesson plans using AI, with built-in authentication and session management. It features AI-generated lesson plans based on topic and grade level, customizable lesson editing, PDF export, dark/light theme, and a demo login using local storage and bcrypt for password hashing. The application dynamically adapts lesson content and was built using React.js, ShadCN, TailwindCSS, Google Gemini API, Local Storage, Bcrypt, and PDF generation."
              ghLink="https://github.com/bhanupattemz/Lesson_Planner.git"
              demoLink="https://lesson-planner-two.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
