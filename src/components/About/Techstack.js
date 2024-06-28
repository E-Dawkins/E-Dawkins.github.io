import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiCplusplus,
  SiCsharp,
  SiGit,
  SiPython,
  SiOpengl,
  SiVulkan
 } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpengl />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVulkan />
      </Col>
    </Row>
  );
}

export default Techstack;
