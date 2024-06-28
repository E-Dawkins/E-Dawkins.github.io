import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project Thumbnails
import AbilitySystem from "../../Assets/Projects/ability-system.png";
import WesternOfTomorrow from "../../Assets/Projects/western-of-tomorrow.png";
import ShaderShowcase from "../../Assets/Projects/shader-showcase.png";
import Connections from "../../Assets/Projects/connections.png";
import WaveFunctionCollapse from "../../Assets/Projects/wave-function-collapse.png";
import AIShowcase from "../../Assets/Projects/ai-showcase.png";

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
              imgPath={AbilitySystem}
              isBlog={false}
              title="Ability System"
              description="A recreation of the ability system in the Dishonored franchise. Made as a personal side project."
              ghLink="https://github.com/E-Dawkins/AbilitySystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WesternOfTomorrow}
              isBlog={false}
              title="Western of Tomorrow"
              description="Western Of Tomorrow is a top-down shooter, where you work with copies of your past self to finish the level as quickly as possible."
              demoLink="https://carpe-diam-interactive.itch.io/western-of-tomorrow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShaderShowcase}
              isBlog={false}
              title="Shader Showcase"
              description="A shader playground that you can edit and interact with in real-time. Made for the Academy of Interactive Entertainment."
              ghLink="https://github.com/E-Dawkins/AIE_Graphics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Connections}
              isBlog={false}
              title="Connections"
              description="Connections is a feel-good game where you help people with their tasks. Made for the Academy of Interactive Entertainment."
              demoLink="https://e-dawkins.itch.io/connections"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WaveFunctionCollapse}
              isBlog={false}
              title="Wave Function Collapse"
              description="A simplified version of the wave function collapse algorithm, with additional tile-map clean up methods. Made as a personal side project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIShowcase}
              isBlog={false}
              title="AI Showcase"
              description="Simple demonstration of the Dijkstra's and A-Star AI path finding algorithms, integrated with multiple steering behaviors. Made for the Academy of Interactive Entertainment."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
