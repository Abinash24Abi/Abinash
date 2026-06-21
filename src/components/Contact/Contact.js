import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { supabase } from "./../../supabase"; 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("Sending...");

  try {
    const { data, error } = await supabase
      .from("profileDB") // your table name
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

    if (error) {
      console.error(error);
      setStatus(`❌ ${error.message}`);
      return;
    }

    console.log(data);

    setStatus("✅ Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setStatus("❌ Failed to send");
  }
};

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Contact Me</h2>
          <p>
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
            <button type="submit" className={styles.btn}>
              Send Message
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>

          {/* Contact Info */}
          <div className={styles.info}>
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> abinashskabi@gmail.com</p>
            <p><strong>Phone:</strong> +91 97902 57170</p>
            <p><strong>Location:</strong> Arcot, India</p>
          </div>

          {/* Social Links */}
          <div className={styles.social}>
            <h3>Connect with Me</h3>
            <div className={styles.icons}>
              <a
                href="https://github.com/Abinash24Abi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abinash-k-a139b8248/"
                target="_blank"
                rel="noopener noreferrer"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
