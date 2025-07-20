import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Optional custom CSS for overrides

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm fixed-top">
      <div className="container">
        <NavLink
          className="navbar-brand fs-5 fw-bold d-flex align-items-center"
          to="/"
        >
          <i className="bi bi-person-circle me-2 text-info fs-5"></i>MyPortfolio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-house-door-fill me-1 text-primary"></i>Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/projects">
                <i className="bi bi-kanban-fill me-1 text-success"></i>Projects
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/experience">
                <i className="bi bi-person-vcard-fill me-1 text-warning"></i>Experience
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/contact">
                <i className="bi bi-envelope-at-fill me-1 text-danger"></i>Contact
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <a
                className="btn btn-outline-warning btn-sm px-3 rounded-3"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-1"></i>Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
