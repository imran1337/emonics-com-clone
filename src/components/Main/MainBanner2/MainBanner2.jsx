import React from "react";
import { Container } from "react-bootstrap";
import styles from "./MainBanner2.module.css";
const MainBanner2 = () => {
  return (
    <section
      className={`${styles.banner2} d-flex justify-content-center align-items-center text-white`}
    >
      <Container>
        <h2 className="mb-4">OUR MISSION:</h2>
        <h1>
          DELIVER THE MOST OPTIMAL INFORMATION TECHNOLOGY STAFFING SOLUTIONS BY
          LISTENING TO YOUR NEEDS
        </h1>
      </Container>
    </section>
  );
};

export default MainBanner2;