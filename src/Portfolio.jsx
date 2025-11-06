import React, { useState } from "react";

import "./Portfolio.css";
import { FaStar, FaHeart, FaRegSun, FaCloud, FaCircle } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";
import { FaGraduationCap, FaLaptopCode, FaRegFileAlt, } from "react-icons/fa";
import { LuCornerDownRight } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


// Font Awesome (fa)
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa";

// Simple Icons (si)
import {
  SiMongodb,
  SiCplusplus,
  SiExpress,
  SiVercel,
  SiC,
  SiMysql,
  SiFigma,
  SiLeetcode,
  SiHackerrank,
  SiGithub,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";





const Portfolio = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">
      {/* 🌸 Navbar */}
     <nav className="navbar">
      {/* 🌸 Hamburger (only visible on mobile) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 🌿 Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>HOME</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS & TOOLS</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION & EXPERIENCE</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
      </ul>
    </nav>

      {/* 🌷 Header Section */}
    {/* 🌟 Header Section */}
    <div className="portfolio-header">
  <p className="est-text">A journey painted in pastel code.</p>
  <div className="header-decor"></div>

  <div className="header-stars">
    {/* Left Star Column */}
    <div className="star-stack">
      <span className="star big">★</span>
      
    </div>

    <h1 className="title">Kritika Singh</h1>

    {/* Right Star Column */}
    <div className="star-stack">
      <span className="star big">★</span>
      
    </div>
  </div>

  <p className="subtitle">Web Developer</p>
</div>



      {/* 🌼 Hero Section */}
 
{/* 🌼 Hero Section */}
<div id="home" className="hero-section fade-up">
  <div className="hero-left">
    <div className="img-wrapper">
      <img src="ks5.jpg" alt="Kritika" className="hero-img-rect" />

      {/* 🌸 React Icon Doodles Around Image */}
      <FaStar className="doodle doodle-star" />
      <FaHeart className="doodle doodle-heart" />
      <FaRegSun className="doodle doodle-sun" />
      <FaCloud className="doodle doodle-cloud" />
      <FaCircle className="doodle doodle-dot" />
    </div>
  </div>

  <div className="hero-right">
  <h2 className="intro-heading">
    <span>Hey there!</span>
  </h2>

  <p className="intro-text">
    I’m <strong>Kritika Singh</strong> — a computer science student who loves turning ideas into
    pixel perfect experiences.
  </p>

  
  <a
  href="https://www.linkedin.com/messaging/thread/new/?recipient=kritika-singh-73363b35b"
  target="_blank"
  rel="noopener noreferrer"
  className="fancy-btn"
>
  Let's Talk...
</a>


  {/* <button className="btn fancy-btn">My Work</button>
  <a href="/Kritikaresume.pdf" target="_blank" rel="noopener noreferrer" className="btn fancy-btn">
    Resume
  </a> */}
  
  



  <div className="below-stars">
    <span className="star-shape">✦</span>
    <span className="star-shape1">✦</span>
  </div>
</div>

</div>



<div id="about" className="abt-section-wrapper">
  <div className="abt-wave-top"></div>

  <div className="aboutme-stylish fade-up">
  <div className="sun-icon">
    <WiSunrise />
  </div>

  <h1 className="aboutme-title">About Me</h1>

  <p className="aboutme-desc">
  Hey there! I’m <strong>Kritika Singh</strong> , a Computer Science student and
  a creative web developer who loves blending design and technology to build
  meaningful digital experiences. This space is a glimpse into my journey , the
  ideas I explore, the projects I create, and the little steps that shape who I’m
  becoming.
</p>

<p className="aboutme-desc">
  I believe in growing through curiosity, consistency, and creation. Every line
  of code or design I craft is an attempt to make something purposeful and
  inspiring. I hope you enjoy exploring my work as much as I’ve enjoyed building
  it. Let’s create something amazing together.
</p>

  <div className="btn-row">
  <a href="#projects" className="btn fancy-btn">
  My Work
</a>

  <a href="/Kritikaresume.pdf" target="_blank" rel="noopener noreferrer" className="btn fancy-btn">
    Resume
  </a>
  </div>
  
</div>





  <div className="abt-wave-bottom"></div>
</div>



<section id="skills" className="skills-section fade-up">
      <h2 className="skills-title">SKILLS & TOOLS</h2>
      <p className="skills-subtext">My integrated toolkit for modern development.</p>

      <div className="skills-wrapper">
        {/* 💻 My Skills */}
        <div className="skills-category">
          <h3 className="skills-heading skills-green">MY SKILLS</h3>
          <div className="skills-grid">
            <div className="skill-card"><FaHtml5 color="#E34F26" /><span>HTML</span></div>
            <div className="skill-card"><FaCss3Alt color="#1572B6" /><span>CSS</span></div>
            <div className="skill-card"><FaJs color="#F7DF1E" /><span>JavaScript</span></div>
            <div className="skill-card"><FaReact color="#61DAFB" /><span>React</span></div>
            <div className="skill-card"><FaNodeJs color="#339933" /><span>Node.js</span></div>
            <div className="skill-card"><SiExpress color="#68A063" /><span>Express</span></div>
            <div className="skill-card"><SiMongodb color="#47A248" /><span>MongoDB</span></div>
            <div className="skill-card"><FaJava color="#ED8B00" /><span>Java</span></div>
            <div className="skill-card"><SiCplusplus color="#00599C" /><span>C++</span></div>
            <div className="skill-card"><SiC color="#A8B9CC" /><span>C</span></div>
            <div className="skill-card"><SiMysql color="#4479A1" /><span>MySQL</span></div>
          </div>
        </div>

        {/* 🧰 My Tools */}
        <div className="skills-category">
          <h3 className="skills-heading skills-orange">MY TOOLS</h3>
          <div className="skills-grid">
            <div className="skill-card"><SiGithub color="#181717" /><span>GitHub</span></div>
            <div className="skill-card">
            <img src="/vscode.jpg" alt="VS Code" style={{ width: "30px", height: "30px" }} />
            <span>VS Code</span>
          </div>
            <div className="skill-card"><FaCode color="#6C63FF" /><span>Cursor</span></div>
            <div className="skill-card"><SiLeetcode color="#FFA116" /><span>LeetCode</span></div>
            <div className="skill-card"><SiHackerrank color="#00EA64" /><span>HackerRank</span></div>
            <div className="skill-card"><SiVercel color="#000000" /><span>Vercel</span></div>
            <div className="skill-card"><SiFigma color="#F24E1E" /><span>Figma</span></div>
          </div>


        </div>
      </div>
    </section>




    <div id="projects" className="projects-section">
  <h2 className="projects-title">My Projects</h2>
  <p className="projects-p">
    Minimal, elegant, and built with precision here’s a glimpse of what I’ve created.
  </p>

  <div className="project-stack">

    <div className="project-card">
      <h3>QTrack</h3>
      <p>
        A smart queue management system enabling real-time tracking, analytics,
        and remote ticketing for hospitals and offices.
      </p>
      <span>HTML • CSS3 • JavaScript</span>
      <a href="#" className="view-link">View Project →</a>
    </div>

    <div className="project-card">
      <h3>Market.trad</h3>
      <p>
        A finance-focused web concept, for a trading company, offering a modern interface for trading with sleek UI and real-time insights..
      </p>
      <span>MERN Stack • API Integration</span>
      <a href="#" className="view-link">View Project →</a>
    </div>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>
        A personal showcase blending clean design, smooth animations, and
        responsive layouts for every device.
      </p>
      <span>React • CSS </span>
      <a href="#" className="view-link">View Project →</a>
    </div>

    <div className="project-card">
      <h3>Forexpediaa</h3>
      <p>
      A high-conversion landing page for Forexpediaa, a trading company, designed to showcase their services, run ad campaigns, and capture leads effectively.
      </p>
      <span>HTML • CSS3 • JavaScript</span>
      <a href="#" className="view-link">View Project →</a>
    </div>

  </div>
</div>



<section id="education" className="edu-exp-section fade-up">
      <h2 className="edu-exp-title">Education & Experience</h2>
      <p className="edu-exp-subtext">My academic background, work, and certifications.</p>

      <div className="edu-exp-container">
        {/* 🎓 Education */}
        <div className="edu-exp-block">
          <div className="edu-exp-heading">
            <FaGraduationCap className="edu-exp-icon" />
            <h3>Education</h3>
          </div>
          <ul className="edu-exp-list">
            <li><LuCornerDownRight  className="edu-exp-icon" />Completed 10th & 12th from Navnidh Hassomal Lakhani Public School with Grade A.</li>
            <li><LuCornerDownRight  className="edu-exp-icon" />Pursuing B.Tech in Computer Science & Engineering at Bansal Institute of Science & Technology with 8.01 CGPA.</li>
          </ul>
        </div>

        {/* 💼 Experience */}
        <div className="edu-exp-block">
          <div className="edu-exp-heading">
            <FaLaptopCode className="edu-exp-icon" />
            <h3>Experience</h3>
          </div>
          <ul className="edu-exp-list">
            <li><LuCornerDownRight  className="edu-exp-icon1" />Worked as a Web Development Intern at Capex Global Solution, gaining hands-on experience in building responsive and dynamic web interfaces.</li>
          </ul>
        </div>

        {/* 🏅 Certificates */}
        <div className="edu-exp-block">
          <div className="edu-exp-heading">
            <FaRegFileAlt className="edu-exp-icon" />
            <h3>Certificates</h3>
          </div>
          <ul className="edu-exp-list">
            <li><LuCornerDownRight  className="edu-exp-icon" />C programming, Sheriyans coding school. [January, 2025]</li>
            <li><LuCornerDownRight  className="edu-exp-icon" />C++, Udemy (at learning stage). [December, 2024]</li>
            <li><LuCornerDownRight  className="edu-exp-icon" />Fundamentals of Azure AI, Microsoft. [November, 2024]</li>
            <li><LuCornerDownRight  className="edu-exp-icon" />JavaScript Essentials 1, Cisco Networking Academy. [November, 2024]</li>
          </ul>
        </div>
      </div>
    </section>





      {/* 🌊 Content Section with Soft Waves */}
      <div id="contact" className="beautiful-section-wrapper">
        <div className="wave-top"></div>
        <div className="contact-section fade-up">
  <div className="contact-left">
  <h2 className="contact-title">
  Let’s Create Something Together <FaLeaf className="leaf-icon" />
</h2>

    <p>
      I’d love to collaborate and bring your ideas to life - whether it’s
      a website, a brand concept, or something entirely new.
    </p>

    <div className="contact-info">
      <p><FaEnvelope className="contact-icon" /> kritikasingh8349@email.com</p>
      {/* <p><FaPhone className="contact-icon" /> +91 98765 43210</p> */}
      <p><FaMapMarkerAlt className="contact-icon" /> Bhopal, India</p>
    </div>

    <div className="contact-links">
      <a href="https://github.com/Kritikas8349" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/kritika-singh-73363b35b/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kritikasingh8349@email.com&su=Let's%20Connect&body=Hi%20Kritika,"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

    </div>

    <a href="https://www.linkedin.com/messaging/thread/new/?recipient=kritika-singh-73363b35b
" className="contact-btn">
  Hire Me
</a>
  </div>
</div>

      </div>

    </div>
  );
};

export default Portfolio;
