import React from "react";
import { Button } from "react-bootstrap";
import styles from "./MainBanner.module.css";
import videoBg from "./../../../images/bg.mp4";
const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <video autoPlay muted loop>
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className={styles.bannerContent}>
        <h1
          style={{ whiteSpace: "pre-wrap", color: `rgba(255,255,255,0.8)` }}
          className="mb-5"
        >
          TECHNOLOGY SOLUTIONS FOR OUR FAST-PACED WORLD
        </h1>
        <Button variant="dark" className="p-3">
          DISCOVER THE EMONICS DIFFERENCE
        </Button>
      </div>
    </section>
  );
};

export default MainBanner;
