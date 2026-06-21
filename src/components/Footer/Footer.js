import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brand}>
          <a href="#home">Abinash ✨</a>
          <p>Full Stack Developer building responsive apps with React, Node, MongoDB, and SQL Server.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className={styles.social}>
          <h4>Connect with Me</h4>
          <div className={styles.icons}>
            <a
              href="https://github.com/Abinash24Abi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abinash-k-a139b8248/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/919790257170?text=Hi%20Abinash%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
          <p className={styles.copy}>© {new Date().getFullYear()} Abinash K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
