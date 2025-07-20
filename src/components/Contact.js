import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section py-5 bg-dark" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="fw-bold display-5 text-light mb-3 pt-5">
            <i className="bi bi-envelope-at-fill text-danger me-2"></i>Get In Touch
          </h2>
          <p className="lead text-light">
            I'm always open to discuss new projects or opportunities.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="bg-info rounded-4 shadow p-4 p-md-5 text-center border border-5 border-danger">
              <p className="fs-4 mb-4">
                Whether you have a query or just want to say hello, I'll get back to you !
              </p>

              <div className="d-grid gap-3">
                <a
                  href="mailto:hindujas20@gmail.com"
                  className="btn btn-danger btn-lg d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-envelope-fill fs-5"></i>
                  hindujas20@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/santosh-hinduja-81634133b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info btn-lg text-white bg-danger d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                  linkedin.com/in/santosh-hinduja
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
