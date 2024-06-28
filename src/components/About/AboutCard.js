import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Ethan Dawkins </span>
            from <span className="purple"> Sydney, Australia.</span>
            <br />
            I am currently looking for work as a gameplay / game systems engineer.
            <br />
            I have an Advanced Diploma of Professional Game Development from the Academy of Interactive Entertainment.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Walking my dog, Charlie
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't strive for perfection, strive for results!"{" "}
          </p>
          <footer className="blockquote-footer">Ethan Dawkins</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
