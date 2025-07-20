import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <header id="hero" className="min-vh-100 d-flex justify-content-center align-items-center hero-gradient-bg text-white fade-in-up pt-5 bg-dark">
      <div className="container text-center border border-5 border-info pb-3 pt-2">
        <div className="mb-4">
          <h1 className="display-3 fw-bold">
            Hi, I'm <span>Santosh Hinduja</span>
          </h1>
          <p className="lead fs-4">
            <i className="bi bi-code-slash me-2"></i>
            Front-End React Developer & Full-Stack Web Developer (PHP/MySQL)
          </p>
        </div>
        <div className="mb-4">
          <p className="fs-5">
            I build responsive and interactive user interfaces using React and Bootstrap. <br/>I also develop full-stack websites using PHP and MySQL.
          </p>
          <p className="fs-6 text-light">
            <span className="badge bg-secondary me-2 text-dark fs-6">HTML5</span>
            <span className="badge bg-secondary me-2 text-dark fs-6">CSS3</span>
            <span className="badge bg-secondary me-2 text-dark fs-6">Bootstrap</span>
            <span className="badge bg-secondary me-2 text-dark fs-6">JavaScript</span>
            <span className="badge bg-secondary me-2 text-dark fs-6">React</span>
            <span className="badge bg-secondary me-2 text-dark fs-6">PHP</span>
            <span className="badge bg-secondary me-2 text-dark fs-6">MySQL</span>
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/projects" className="btn btn-light btn-lg shadow">
            <i className="bi bi-arrow-bar-down me-2"></i>View Projects
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg shadow">
            <i className="bi bi-person-lines-fill me-2"></i>Hire Me
          </Link>
          <a
            href="/Santosh_Hinduja_Resume.pdf"
            className="btn btn-outline-warning btn-lg shadow"
            download
          >
            <i className="bi bi-download me-2"></i>Download Resume
          </a>
          <a
            href="https://github.com/santoshhinduja-15"
            className="btn btn-outline-info btn-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github me-2"></i>View GitHub
          </a>
        </div>
      </div>
    </header>
  );
}