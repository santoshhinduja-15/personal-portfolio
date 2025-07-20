import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-0 border-top border-light">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 small">
          © 2025 <strong>Santosh Hinduja</strong>. All rights reserved.
        </p>
        <div>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3 text-decoration-none"
          >
            <i className="bi bi-github me-1"></i>GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
          >
            <i className="bi bi-linkedin me-1"></i>LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
