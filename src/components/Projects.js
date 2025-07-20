import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Personal Legal Rights",
    description:
      "Understand legal rights in Hinglish—arrest, domestic violence, tenancy, consumer laws with real-life examples.",
    github: "https://github.com/santoshhinduja-15/personal-legal-rights-react",
    tag: "React",
  },
  {
    title: "Custom Invitation Maker",
    description:
      "Create custom birthday/wedding/party invites with templates, icons, and download as PDF/image.",
    github: "https://github.com/santoshhinduja-15/custom-invitation-maker-react",
    tag: "React",
  },
  {
    title: "EcoSort - Smart Waste Segregation",
    description:
      "Classifies waste as biodegradable, recyclable, or hazardous. Promotes sustainable habits.",
    github: "https://github.com/santoshhinduja-15/smart-waste-segregation-guide-react",
    tag: "React",
  },
  {
    title: "Online Quiz",
    description:
      "Responsive quiz app using JS & Bootstrap. Dynamic questions, real-time feedback, no backend needed.",
    github: "https://github.com/santoshhinduja-15/Online-Quiz",
    tag: "JavaScript",
  },
  {
    title: "Expense Tracker",
    description:
      "Track daily expenses by category & date. Uses localStorage. Simple UI with Bootstrap.",
    github: "https://github.com/santoshhinduja-15/Expense-Tracker",
    tag: "JavaScript",
  },
  {
    title: "To-do List",
    description:
      "Task manager with Bootstrap alerts, sleek design, and interactive list management.",
    github: "https://github.com/santoshhinduja-15/To-do-List",
    tag: "JavaScript",
  },
  {
    title: "Apna Bazar (Ecommerce)",
    description:
      "User + Admin panels, product listings, orders, cart. Built with PHP & MySQL (no framework).",
    github: "https://github.com/santoshhinduja-15/apna-bazar",
    tag: "PHP",
  },
  {
    title: "Blood Donor Seeker",
    description:
      "Find nearby blood donors by blood group & city in emergency cases.",
    github: "https://github.com/santoshhinduja-15/BloodDonorSeeker",
    tag: "PHP",
  },
  {
    title: "Royal Hotel Booking System",
    description:
      "Book rooms online. Admin dashboard to manage bookings. Built with PHP & Bootstrap.",
    github: "https://github.com/santoshhinduja-15/royal-hotel",
    tag: "PHP",
  },
];

export default function Projects() {
  return (
    <section className="projects-section text-light" id="projects">
      <div className="container py-5">
        <h2 className="text-center fw-bold display-5 mt-4">
          <i className="bi bi-kanban-fill text-success me-2"></i>My Projects
        </h2>
        <p className="lead text-center mb-5 fs-5">
          Explore my full-stack, frontend, and utility web projects below.
        </p>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-sm-6 col-lg-4">
             <div className="card shadow-sm project-card border border-5 border-danger">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold fs-5">{project.title}</h5>
                  <p className="card-text fs-6 flex-grow-1">{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span
                      className={`badge bg-${
                        project.tag === "React"
                          ? "primary"
                          : project.tag === "PHP"
                          ? "danger"
                          : "warning"
                      } text-light fs-6`}
                    >
                      {project.tag}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-dark fw-semibold"
                    >
                      <i className="bi bi-github me-1"></i>GitHub
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
