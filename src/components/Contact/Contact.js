import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { supabase } from "./../../supabase"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    try {
      const { data, error } = await supabase
        .from("profileDB")
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
        setIsLoading(false);
        return;
      }

      console.log(data);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send");
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "abinashskabi@gmail.com", link: "mailto:abinashskabi@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91 97902 57170", link: "tel:+919790257170" },
    { icon: FiMapPin, label: "Location", value: "Ranipet, Tamil Nadu", link: "#" },
  ];

  const socials = [
    { icon: FaGithub, url: "https://github.com/Abinash24Abi", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/abinash-k-a139b8248/", label: "LinkedIn" },
    { icon: FaWhatsapp, url: "https://wa.me/919790257170?text=Hi%20Abinash%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Let's Connect</h2>
          <p>Have a project in mind? Let's create something amazing together</p>
        </div>

        <div className={styles.content}>
          {/* Contact Info Cards */}
          <div className={styles.infoGrid}>
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  className={styles.infoCard}
                  style={{
                    animation: `fadeInUp 0.8s ease ${0.1 * (idx + 1)}s both`,
                  }}
                >
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    <div className={styles.infoValue}>{item.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.btn} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status && <div className={`${styles.status} ${status.includes("✅") ? styles.success : styles.error}`}>{status}</div>}
          </form>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <h3>Follow Me</h3>
          <div className={styles.icons}>
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.label}
                  style={{
                    animation: `fadeInUp 0.8s ease ${0.1 * (idx + 1)}s both`,
                  }}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
