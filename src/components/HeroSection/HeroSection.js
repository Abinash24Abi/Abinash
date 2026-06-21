import React from "react";
import styles from "./HeroSection.module.css";
import profile from '../../asset/profile.jpeg'

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Text Section */}
        <div className={styles.text}>
          <h1>
            Hello! I'm <span>Abinash K.</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build responsive web applications and RESTful APIs using React.js,
            Node.js, Express.js, MongoDB, and SQL Server. I focus on clean,
            efficient code, secure data handling, and polished user experiences.
          </p>
          <div className={styles.btnGroup}>
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.image}>
          <img
            src={profile}
            alt="Abinash K."
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
