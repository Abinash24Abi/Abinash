import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>About Me</h2>
          <p>Passionate Developer Creating Modern Web Solutions</p>
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
              I have delivered scalable full-stack solutions, optimized backend performance,
              and collaborated with cross-functional teams to release features on time with
              clean and reusable code.
            </p>
          </div>

          {/* Right Skills */}
          <div className={styles.skills}>
            <h3>My Skills</h3>

            <div className={styles.skill}>
              <span>JavaScript</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>React.js</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Node.js & Express.js</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>MongoDB & SQL Server</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>MySQL</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Redux & Redux-Saga</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "78%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>HTML, CSS & Bootstrap</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Git, GitHub, Docker, Jenkins</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
