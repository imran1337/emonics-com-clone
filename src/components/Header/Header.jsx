import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <Navbar className="container-fluid" bg="dark" expand="md">
      <Navbar.Brand>
        <Link to="/home">
          <img
            className="img-fluid"
            style={{ maxWidth: "163px" }}
            src={logo}
            alt="logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center text-white font-weight-bold">
          <NavLink activeClassName="is-active" to="/about" className="nav-link">
            ABOUT
          </NavLink>
          <NavLink
            activeClassName="is-active"
            to="/services"
            className="nav-link"
          >
            SERVICES
          </NavLink>

          <NavLink
            activeClassName="is-active"
            to="/industries"
            className="nav-link"
          >
            INDUSTRIES
          </NavLink>

          <NavLink
            activeClassName="is-active"
            to="/product"
            className="nav-link"
          >
            PRODUCT
          </NavLink>

          <NavLink activeClassName="is-active" to="/blog" className="nav-link">
            BLOG
          </NavLink>

          <NavLink
            activeClassName="is-active"
            to="/contact"
            className="nav-link"
          >
            CONTACT
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
