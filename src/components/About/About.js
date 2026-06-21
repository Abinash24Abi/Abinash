import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { FiBriefcase, FiAward, FiUsers } from "react-icons/fi";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js & Express.js", level: 88 },
    { name: "MongoDB & SQL Server", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "Redux & Context API", level: 78 },
    { name: "HTML, CSS & Bootstrap", level: 92 },
    { name: "Git, Docker, Jenkins", level: 75 },
  ];

  const stats = [
    { icon: FiBriefcase, value: "3+", label: "Projects Delivered" },
    { icon: FiAward, value: "1.5+", label: "Years Experience" },
    { icon: FiUsers, value: "500+", label: "Daily Users Served" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        <div className={styles.title}>
          <h2>About Me</h2>
          <p>Full Stack Developer with Proven Track Record</p>
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={styles.statCard}
                style={{
                  animation: `fadeInUp 0.8s ease ${0.1 * (idx + 1)}s both`,
                }}
              >
                <Icon className={styles.statIcon} />
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.content}>
          {/* Left Text */}
          <div className={styles.text}>
            <p>
              I am <strong>Abinash K.</strong>, a Full Stack Developer with hands-on experience
              in React.js, Node.js, Express.js, MongoDB, and SQL Server. I build responsive
              web applications, RESTful APIs, and role-based systems with secure, maintainable code.
            </p>
            <p>
              I have delivered scalable full-stack solutions, optimized backend performance
              by <strong>42%</strong>, and collaborated with cross-functional teams to release
              features on time with clean and reusable code.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>✓ MERN Stack Expert</div>
              <div className={styles.highlight}>✓ REST API Design</div>
              <div className={styles.highlight}>✓ JWT Authentication</div>
              <div className={styles.highlight}>✓ SQL & NoSQL Databases</div>
            </div>
          </div>

          {/* Right Skills */}
          <div className={styles.skills}>
            <h3>Technical Skills</h3>

            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={styles.skill}
                style={{
                  animation: `fadeInUp 0.8s ease ${0.05 * (idx + 1)}s both`,
                }}
              >
                <div className={styles.skillHeader}>
                  <span>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillLevel}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${0.05 * idx}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
