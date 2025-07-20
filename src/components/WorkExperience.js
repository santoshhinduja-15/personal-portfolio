import React from "react";
import "./WorkExperience.css";

const experiences = [
  {
    title: "Intern – Web Developer",
    company: "Insys Technologies, Thane",
    duration: "4th July 2022 - 19th August 2022",
    points: [
      "Developed web apps using HTML, CSS, JS, PHP & MySQL",
      "Deployed and hosted sites using FileZilla FTP",
      "Created responsive UI with Bootstrap & custom styling",
      "Applied clean coding & version control standards",
      "Worked both independently and in a team setting",
    ],
    certificate: "/internship_certificate.pdf",
  },
];

export default function WorkExperience() {
  return (
    <section className="projects-section text-light" id="experience">
      <div className="container py-5">
        <h2 className="text-center fw-bold display-5 mt-5">
          <i className="bi bi-person-vcard-fill text-warning me-2"></i>Work Experience
        </h2>
        <p className="lead text-center mb-5 fs-5">
          My industry-level internship and development experience.
        </p>

        <div className="row g-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="col-md-12">
              <div className="card shadow-sm project-card border border-5 border-warning" id = "card-color">
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-4">
                    <i className="bi bi-briefcase-fill me-2 text-info"></i>
                    {exp.title}
                  </h5>
                  <h6 className="card-subtitle mb-3 fw-semibold">
                    <i className="bi bi-building me-2 text-light"></i>
                    {exp.company}
                  </h6>
                  <p className="mb-3">
                    <i className="bi bi-calendar-event-fill me-2 text-light"></i>
                    {exp.duration}
                  </p>
                  <ul className="list-unstyled ps-3 mb-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-arrow-right-circle-fill text-warning me-2"></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="text-end">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-dark text-warning"
                    >
                      <i className="bi bi-file-earmark-text me-2"></i>View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
