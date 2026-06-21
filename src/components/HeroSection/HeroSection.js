import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import profile from '../../asset/profile.jpeg'
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>

      <div className={styles.container}>
        {/* Text Section */}
        <div className={styles.text}>
          <div className={styles.badge}>👋 Welcome to my portfolio</div>
          <h1>
            Hello! I'm <span className={styles.highlight}>Abinash K.</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build responsive web applications and RESTful APIs using React.js,
            Node.js, Express.js, MongoDB, and SQL Server. I focus on clean,
            efficient code, secure data handling, and polished user experiences.
          </p>
          <div className={styles.btnGroup}>
            <a href="#projects" className={styles.btnPrimary}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              View My Work
              <FiArrowRight className={styles.icon} />
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBorder}></div>
          <img
            src={profile}
            alt="Abinash K."
            className={styles.profileImg}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
