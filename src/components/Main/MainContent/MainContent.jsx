import React from "react";
import { Container } from "react-bootstrap";

const MainContent = () => {
  return (
    <Container
      fluid
      style={{ height: "360px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <h2>TAILORED I.T. STAFFING SOLUTIONS</h2>
        <small className="mt-3 mb-4 d-block" style={{ color: "#1d1d1d" }}>
          We get it right the first time
        </small>
        <p>
          Get IT Staffing Solutions and hire qualified IT professionals from
          Emonics LLC. We deliver immediate access to top-notch talent. we have
          the connections to get your IT staffing solutions in place without
          missing a beat. We understand that employee happiness is significant.
          Higher employee engagement results in higher efficiency, and respected
          employees are motivated to make actual, measurable contributions to
          their businesses. See how we are developing a better place of work,
          one job at a time.
        </p>
      </div>
    </Container>
  );
};

export default MainContent;
