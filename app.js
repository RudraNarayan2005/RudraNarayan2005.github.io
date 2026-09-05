/* ── HEADER ── */
const Header = () => (
  <header>
    <a href="#hero" className="brand">R.N.R</a>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

/* ── HERO ── */
const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-inner">
      <div className="hero-badge">
        <span className="hero-badge-dot"></span>
        Available for Internships
      </div>
      <h1>
        Rudra Narayan
        <span className="accent">Rout</span>
      </h1>
      <p className="hero-tagline">
        <strong>Aspiring AI/ML Professional</strong> &amp; Full-Stack Developer
      </p>
      <p className="hero-desc">
        Computer Science undergrad at KIIT, Bhubaneswar — building efficient
        software, exploring AI &amp; Machine Learning, and solving real-world
        problems with clean architecture.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-secondary">Get in Touch</a>
      </div>
      <div className="hero-socials">
        <a href="https://www.linkedin.com/in/rudranarayanrout" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://github.com/RudraNarayan2005" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href="mailto:rudranarayanrout2005@gmail.com" aria-label="Email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <a href="tel:+918249113542" aria-label="Phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

/* ── ABOUT ── */
const About = () => (
  <section id="about">
    <div className="section-wrap">
      <p className="section-label">Who I Am</p>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div>
          <div className="about-text">
            <p>
              I'm <strong>Rudra Narayan Rout</strong>, a passionate Computer Science
              undergraduate at <strong>KIIT University, Bhubaneswar</strong>. I love
              building things that live on the internet and make people's lives easier.
            </p>
            <p>
              My core interest lies at the intersection of <strong>AI/ML and Backend
              Development</strong> — I enjoy training models, designing APIs, and
              architecting systems that scale. I'm also actively strengthening my
              foundations in <strong>Data Structures &amp; Algorithms</strong>.
            </p>
            <p>
              When I'm not coding, I'm learning something new — whether it's a new
              framework, a research paper, or a different approach to solving problems.
            </p>
          </div>
          <div className="about-links">
            <a href="mailto:rudranarayanrout2005@gmail.com" className="about-link">
              rudranarayanrout2005@gmail.com ↗
            </a>
            <a href="Rudra_Narayan_Rout_Resume.pdf" download className="about-link">
              Download Resume ↓
            </a>
          </div>
          <div className="about-stats" style={{marginTop: '32px'}}>
            <div className="stat-card">
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-label">Internships Done</div>
            </div>
          </div>
        </div>
        <div>
          <div className="about-card">
            <div className="about-avatar">R</div>
            <h3>Rudra Narayan Rout</h3>
            <p className="role">CS Undergrad · KIIT University</p>
            <div className="about-info">
              <div className="about-info-row">
                <span className="about-info-icon">🎓</span>
                <span>B.Tech CSE — KIIT, Bhubaneswar</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-icon">📍</span>
                <span>Cuttack, Odisha, India</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-icon">✉️</span>
                <span>rudranarayanrout2005@gmail.com</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-icon">🔗</span>
                <span>github.com/RudraNarayan2005</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-icon">📞</span>
                <span>+91 8249113542</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── SKILLS ── */
const Skills = () => {
  const skills = [
    {
      icon: "💻",
      cat: "Languages",
      tags: ["Python", "Java", "JavaScript", "C"]
    },
    {
      icon: "⚙️",
      cat: "Backend & Frameworks",
      tags: ["Spring Boot", "FastAPI", "Flask", "Node.js", "REST APIs"]
    },
    {
      icon: "🤖",
      cat: "AI / ML",
      tags: ["Machine Learning", "Deep Learning", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"]
    },
    {
      icon: "🗄️",
      cat: "Databases",
      tags: ["MySQL", "PostgreSQL", "Hibernate", "Spring Data JPA"]
    },
    {
      icon: "🛠️",
      cat: "Tools & Principles",
      tags: ["Git", "Maven", "IntelliJ IDEA", "JUnit", "Postman"]
    },
    {
      icon: "🏗️",
      cat: "Architecture",
      tags: ["DSA", "OOP", "SOLID", "Layered Architecture", "JWT Auth"]
    }
  ];
  return (
    <section id="skills" className="section-alt">
      <div className="section-wrap section-inner">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies and tools I work with regularly.</p>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-card">
              <span className="skill-icon">{s.icon}</span>
              <p className="skill-cat">{s.cat}</p>
              <div className="skill-tags">
                {s.tags.map((t, j) => (
                  <span key={j} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── PROJECTS ── */
const Projects = () => {
  const projects = [
    {
      icon: "🏦",
      title: "Online Banking Management System",
      desc: "A full backend system for bank accounts, transactions, and customer records with JWT-based authentication, role-based access control, and JUnit tests for core business logic.",
      tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "JUnit"],
      link: "https://github.com/RudraNarayan2005"
    },
    {
      icon: "⚡",
      title: "EV Charging Station Booking System",
      desc: "Booking platform for EV station slot search, reservation, cancellation, and history retrieval via REST APIs with concurrent booking conflict handling and Postman-tested endpoints.",
      tags: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "Hibernate"],
      link: "https://github.com/RudraNarayan2005"
    },
    {
      icon: "🗺️",
      title: "EV Station Finder",
      desc: "A frontend web app for locating nearby EV charging stations with search and filter functionality. Responsive, mobile-friendly UI built with vanilla JS — received community stars on GitHub.",
      tags: ["Python", "HTML", "CSS", "JavaScript", "Maps API"],
      link: "https://github.com/RudraNarayan2005"
    },
    {
      icon: "🚨",
      title: "Smart Emergency Response System",
      desc: "A web platform connecting citizens with emergency services, featuring geolocation-aware incident reporting and an intuitive dashboard for citizens and responders with real-time status.",
      tags: ["HTML", "CSS", "JavaScript", "Geolocation API"],
      link: "https://github.com/RudraNarayan2005"
    }
  ];
  return (
    <section id="projects">
      <div className="section-wrap">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of things I've worked on.</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <span className="project-card-icon">{p.icon}</span>
              <div className="project-arrow">↗</div>
              <p className="project-title">{p.title}</p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="project-tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── EXPERIENCE ── */
const Experience = () => {
  const items = [
    {
      icon: "🎓",
      year: "2023 — Present",
      title: "B.Tech in Computer Science & Engineering",
      org: "KIIT University, Bhubaneswar · Enrollment: 23051211",
      desc: "Pursuing a rigorous CSE curriculum with focus on algorithms, software engineering, AI/ML, and full-stack development. Relevant coursework: OOP in Java, DBMS, Data Structures, Computer Networks."
    },
    {
      icon: "🤖",
      year: "Aug 2025 — Oct 2025",
      title: "AI & ML Internship",
      org: "IntersElite · Cert ID: IT/25/AIML-PY-A6/IC-11531",
      desc: "Verified internship in Artificial Intelligence & Machine Learning using Python. Demonstrated exceptional dedication and competence working with TensorFlow, scikit-learn, NumPy, and Pandas."
    },
    {
      icon: "💼",
      year: "Sep 2023 — Oct 2023",
      title: "Web Development in Java",
      org: "Elenxia · Industrial Training",
      desc: "Hands-on training covering Java-based web development, REST API development, Spring Boot, and database integration with MySQL. Applied layered architecture and SOLID principles."
    }
  ];
  return (
    <section id="experience" className="section-alt">
      <div className="section-wrap section-inner">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-subtitle">Where I've been and what I've learned.</p>
        <div className="timeline">
          {items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot">{item.icon}</div>
              <div>
                <p className="timeline-year">{item.year}</p>
                <p className="timeline-title">{item.title}</p>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CONTACT ── */
const Contact = () => {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    emailjs.send(
      'service_ktwnkqm',
      'template_drsau3i',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'zNBBe4wXpqAJash2q'
    ).then(() => {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }).catch((err) => {
      console.error('EmailJS error:', err);
      alert('Failed to send message. Please try again.');
    });
  };

  const contacts = [
    { icon: "✉️", label: "Email", val: "rudranarayanrout2005@gmail.com", href: "mailto:rudranarayanrout2005@gmail.com" },
    { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/rudranarayanrout", href: "https://www.linkedin.com/in/rudranarayanrout" },
    { icon: "🐙", label: "GitHub", val: "github.com/RudraNarayan2005", href: "https://github.com/RudraNarayan2005" }
  ];

  return (
    <section id="contact">
      <div className="section-wrap">
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div>
            <p className="contact-intro">
              I'm always open to internship opportunities, collaborations, and
              interesting conversations. Feel free to reach out!
            </p>
            <div className="contact-info-list">
              {contacts.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                  <div className="contact-info-icon">{c.icon}</div>
                  <div>
                    <p className="contact-info-label">{c.label}</p>
                    <p className="contact-info-val">{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Hey Rudra, I'd love to connect..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button className="form-btn" onClick={handleSubmit}>
              {sent ? "Message Sent ✓" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── FOOTER ── */
const Footer = () => (
  <footer>
    <p>© 2025 Rudra Narayan Rout. Built with ❤️ from Cuttack, India.</p>
    <p>Open to Work · <a href="mailto:rudranarayanrout2005@gmail.com">rudranarayanrout2005@gmail.com</a></p>
  </footer>
);

/* ── APP ── */
const App = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.07 }
    );
    document.querySelectorAll('.section-wrap').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
