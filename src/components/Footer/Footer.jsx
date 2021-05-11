import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="p-5 pb-0 text-center"
      style={{ background: "#000", color: "#fff" }}
    >
      <h4>EMONICS LLC</h4>
      <p>
        Stay connected to us for the latest in technology staffing innovations.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <input type="text" placeholder="Email Address" className="p-2" />
        <Button variant="dark" className="p-2">
          SIGN UP
        </Button>
      </div>
      <div className="mt-4">
        <a className="m-2 link_style" href="#terms">
          Terms and Conditions
        </a>
        <a className="m-2 link_style" href="#privacy">
          Privacy Policy
        </a>
      </div>
      <p className="mt-2 mb-0">
        <small>&copy; {new Date().getFullYear()} EMONICS LLC</small>
      </p>
    </footer>
  );
};

export default Footer;
