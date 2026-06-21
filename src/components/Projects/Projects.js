import React from "react";
import styles from "./Projects.module.css";
import ts from '../../asset/ts.png';
import sms from '../../asset/sms.png';
import es from '../../asset/e-shop.png';
import hotel from '../../asset/hotel.png';
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "School Management System",
    description:
      "Digitized operations for 500+ student institution with RBAC, attendance tracking, class allocation, and eliminated paper records.",
    image: sms,
    tags: ["React", "Node.js", "SQL Server", "RBAC"],
    github: "https://github.com/Abinash24Abi/SchoolSystem",
    demo: "#",
  },
  {
    id: 2,
    title: "ElectroMart E-Commerce",
    description:
      "Full-featured electronics store with 500+ product listings, dynamic content, shopping cart, and responsive UI design.",
    image: es,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Abinash24Abi/ElectroMart",
    demo: "https://electro-mart-bice.vercel.app/",
  },
  {
    id: 3,
    title: "Time Sheet Management",
    description:
      "Dual-role dashboard for 200+ employees with work-hour summaries, saving 10+ hours/week of manual reporting.",
    image: ts,
    tags: ["React", "Node.js", "MySQL", "JWT Auth"],
    github: "https://github.com/Abinash24Abi/TimeSheet",
    demo: "#",
  },
  {
    id: 4,
    title: "Hotel Room Booking",
    description:
      "Responsive booking interface with real-time rates, conflict validation achieving 100% accuracy, processing 50+ weekly bookings.",
    image: hotel,
    tags: ["React", "Node.js", "MongoDB", "Date Logic"],
    github: "https://github.com/Abinash24Abi/Moonrise_Hotel",
    demo: "https://moonrise-hotel.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Projects</h2>
          <p>Delivered 3+ full-stack applications serving 500+ daily users</p>
        </div>

        <div className={styles.projectGrid}>
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{
                animation: `fadeInUp 0.8s ease ${0.1 * (idx + 1)}s both`,
              }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.demoBtn}`}
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
