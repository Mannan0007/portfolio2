import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Goventure from "../../Assets/Projects/Goventure.png";
import moviefy from "../../Assets/Projects/moviefy.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/cloud_connect.png";
import campus_sync from "../../Assets/Projects/campus_sync.png";
import Ping from "../../Assets/Projects/Ping.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cloud Connect "
              description="A real-time chat application enabling users to send and receive instant messages with one to one chat rooms and Group chats. Built for fast, reliable, and secure communication across devices."
              ghLink="https://github.com/mannan0007/chat-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ping}
              isBlog={false}
              title="Ping"
              description="A social media platform where users can post their pictures, share their thoughts, and interact with others. Built with a modern, responsive design to enhance user engagement."
              ghLink="https://github.com/Mannan0007/Ping"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus_sync}
              isBlog={false}
              title="Campus-Sync"
              description="A complete college management website designed to streamline administrative tasks for students, teachers, and staff. Features include managing student information, attendance, performance tracking, and circular announcements — all from a unified platform."
              ghLink="https://github.com/Mannan0007/Campus-Sync"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Goventure}
              isBlog={false}
              title="GoVenture"
              description="A complete travel booking platform that allows users to book hotels, vacations, and transportation easily. Designed for a seamless and intuitive travel planning experience."
              ghLink="https://github.com/Mannan0007/Travel-Booking-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviefy}
              isBlog={false}
              title="MovieFy"
              description="A web application for managing movies and TV shows, featuring search functionality, trending sections, and personalized watchlists to keep track of favorites easily."
              ghLink="https://github.com/Mannan0007/Moviefy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
