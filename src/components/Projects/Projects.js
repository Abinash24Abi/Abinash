import React from "react";
import styles from "./Projects.module.css";
import ts from '../../asset/ts.png';
import sms from '../../asset/sms.png';
import es from '../../asset/e-shop.png';
import hotel from '../../asset/hotel.png';

const projectsData = [
  {
    id: 1,
    title: "School Management System",
    description:
      "Built a school management system with role-based access, attendance tracking, class allocation, and student record management using React, Node.js, and SQL Server.",
    image: sms,
    github: "https://github.com/Abinash24Abi/SchoolSystem",
    demo: "#",
  },
  {
    id: 2,
    title: "ElectroMart E-Commerce",
    description:
      "Developed an e-commerce platform for electronics with product catalog, shopping cart, order management, and seamless checkout using the MERN stack.",
    image: es,
    github: "https://github.com/Abinash24Abi/ElectroMart",
    demo: "https://electro-mart-bice.vercel.app/",
  },
  {
    id: 3,
    title: "Time Sheet Management",
    description:
      "Created a role-based timesheet management app for daily work logs, server-side validation, and productivity summaries using Node.js, Express, and MySQL.",
    image: ts,
    github: "https://github.com/Abinash24Abi/TimeSheet",
    demo: "#",
  },
  {
    id: 4,
    title: "Hotel Room Booking",
    description:
      "Built a responsive hotel booking interface with availability checks, date-based reservation validation, and booking management using Node.js and MongoDB.",
    image: hotel,
    github: "https://github.com/Abinash24Abi/Moonrise_Hotel",
    demo: "https://moonrise-hotel.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Projects</h2>
          <p>Some of my recent work showcasing my skills and expertise</p>
        </div>

        <div className={styles.projectGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.image}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
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
