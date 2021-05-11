import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-5 text-center">
      <h2>INTEGRITY DRIVES EVERYTHING</h2>
      <Container fluid className="mt-5">
        <Row className="text-start">
          <Col xs={12} md={6}>
            <img
              className="img-fluid"
              src="https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577533909500-VNDS9Z6W1HA45NI3Q9ZG/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/about+us"
              alt="about"
            />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="mb-3">OUR BELIEF SYSTEM</h3>
            <p>
              Emonics LLC is a Certified Minority Business Enterprise as
              designated by the National Minority Supplier Diversity Council.
              Our mission to connect the right people that are the right fit for
              the cultures of our clients.
            </p>
            <p>
              The company has built its business organically with the breadth of
              services for the IT staffing industry. We create enterprise
              solutions through the expertise, experience, and the power of our
              team.
            </p>
            <p>
              It today’s highly competitive environment, it pays to have
              technology talent that can work hard and fast as well as problem
              solve along the way. Because of our vast international network, we
              have the connections to get your IT staffing solutions in place
              without missing a beat.
            </p>
            <p>
              At Emonics LLC, we understand the importance of your organization
              of employee satisfaction. Higher levels of staff involvement lead
              to higher productivity. And employees who feel valued are
              motivated to make real and tangible contributions to the business.
            </p>
            <p>
              Let us help you find temporary or full-time professionals who suit
              your business and work to solve your business problems with great
              satisfaction. Recruiters from Emonics LLC help locate the job that
              makes people happy, and the technical skills that make a company
              stronger. See how we helped people find the right match for their
              company or profession just like you. Let's do the same for you
              then.
            </p>
          </Col>
        </Row>
        <Button variant="outline-dark" className="p-3 mt-3">
          <Link className="link_style" to="/contact">
            GET YOUR CUSTOM SOLUTION
          </Link>
        </Button>
      </Container>
      <Container className="pb-4">
        <hr />
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1579548351424-9UNAPPD7HSAWRABFD29P/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFUQAah1E2d0qOFNma4CJuw0VgyloEfPuSsyFRoaaKT76QvevUbj177dmcMs1F0H-0/United_States_Department_of_Defense_Seal.svg.png?format=300w"
              alt="usa"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="my-4">WE HONOR OUR VETERANS</h3>
            <p>
              Emonics fully recognizes, honors and enforces the Uniformed
              Services Employment and Reemployment Rights Act.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
