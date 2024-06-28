import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Ethan Dawkins Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div>
            <div className="left-col">
              <h1> EDUCATION </h1>
              <h2> Academy of Interactive Entertainment </h2>
              <h2 className="date"> 2022 </h2>
              <li> Advanced Diploma of Professional Game Development </li>
              <h2 className="date"> 2021 </h2>
              <li> Diploma of Screen and Media </li>
              <li> Diploma of Information Technology </li>
            </div>

            <div className="right-col">
              <h1> PROFESSIONAL EXPERIENCE </h1>
              <div>
                <h2 className="date-right"> Mar 2024-Jun 2024 </h2>
                <h2> Konami Australia </h2>
              </div>
              <li> Served as a major contributor to game software development, using C++. </li>
              <li> Collaborated with teams of engineers, designers, artists, and QA to ensure quality and market criteria meet product plans and customer requirements. </li>
              <li> Analyzed software requirements to determine feasibility of designs, timelines and completion schedules for product releases. </li>
              <li> Worked with other departments as needed to resolve issues reported from the field. </li>
            </div>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
