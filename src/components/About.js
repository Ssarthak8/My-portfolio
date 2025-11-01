import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "40px",
        color: "#e0e0e0",
        backgroundColor: "#121212",
        lineHeight: "1.8",
        fontSize: "1.05rem",
        textAlign: "justify",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        margin: "40px",
      }}
    >
      <h2 style={{ color: "#00adb5", fontSize: "1.8rem", marginBottom: "15px" }}>
        👤 About Me
      </h2>
      <p>
        Hello! I’m <b>Sarthak Ghatol</b>, a passionate <b>Computer Science Engineering</b> student 
        at <b>Pimpri Chinchwad University</b>, Pune. I’m deeply interested in <b>web development</b>, 
        <b> artificial intelligence</b>, and <b>machine learning</b>, and I enjoy building 
        creative solutions that bridge innovation with real-world applications.
      </p>

      <p>
        I believe in writing clean, efficient code and continuously exploring new 
        technologies. My goal is to become a developer who can build scalable and 
        intelligent systems that make a difference.
      </p>

      <p>
        Outside academics, I’m also an <b>avid flautist</b> 🎵 — music helps me maintain balance, 
        creativity, and focus in everything I do. I also enjoy reading tech blogs, exploring 
        UI/UX trends, and collaborating on innovative ideas with peers.
      </p>

      <p style={{ fontStyle: "italic", marginTop: "20px", color: "#aaaaaa" }}>
        “Technology and creativity go hand in hand — and I strive to bring both to every
        project I work on.”
      </p>
    </section>
  );
}

export default About;
