"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Financial Performance & Anomaly Investigation Agent",
    category: "AI ENGINEERING · FINANCIAL ANALYSIS",
    description:
      "A tool-using AI agent that analyses structured company financial data, detects significant performance changes and autonomously investigates their measurable drivers using deterministic analytical tools.",
    tech: "Python · OpenAI API · Pandas · Tool Calling",
    link: "https://github.com/aadsj12/financial-investigation-agent",
    linkText: "View on GitHub ↗",
    featured: true,
  },
  {
    number: "02",
    title: "Onyx Trading Risk Dashboard",
    category: "MARKET RISK · QUANTITATIVE FINANCE",
    description:
      "An interactive trading-risk dashboard for monitoring firm and desk-level exposure, tracking VaR utilisation and limit breaches, analysing P&L trends and identifying positions driving risk.",
    tech: "Tableau · Value at Risk · Market Risk · P&L Analysis",
    link: "https://public.tableau.com/views/OnyxRiskDashboard/Dashboard2?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    linkText: "View Tableau Dashboard ↗",
    featured: false,
  },
  {
    number: "03",
    title: "Task Management API",
    category: "BACKEND ENGINEERING",
    description:
      "A production-style REST API for task management, built with FastAPI and PostgreSQL, containerised with Docker and secured with Supabase authentication.",
    tech: "Python · FastAPI · PostgreSQL · Docker · Supabase",
    link: "https://github.com/aadsj12/task-api",
    linkText: "View on GitHub ↗",
    featured: false,
  },
  {
    number: "04",
    title: "Options Risk & Exposure Dashboard",
    category: "DERIVATIVES · QUANTITATIVE FINANCE",
    description:
      "An interactive Tableau dashboard analysing options risk across S&P 500 components, including spot price, implied volatility, Vega, Gamma, sector exposure and expiry-level risk concentration.",
    tech: "Tableau · Options Analytics · Greeks · Risk Analysis",
    link: "https://public.tableau.com/views/OptionsRiskExposureDashboard/Dashboard4?:language=en-GB&:sid=&:display_count=n&:origin=viz_share_link",
    linkText: "View Tableau Dashboard ↗",
    featured: false,
  },
  {
    number: "05",
    title: "Polite Web Scraper",
    category: "PYTHON · DATA ENGINEERING",
    description:
      "A responsible web-scraping pipeline designed around respectful request behaviour, caching, validation, structured data extraction and robust failure handling.",
    tech: "Python · Pydantic · Web Scraping · Data Validation",
    link: "https://github.com/aadsj12/Polite-scraper",
    linkText: "View on GitHub ↗",
    featured: false,
  },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Prevent another submission while the first one is in progress.
    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            value.toString(),
          ])
        ).toString(),
      });

      if (!response.ok) {
        alert(`Submission failed: ${response.status}`);
        return;
      }

      form.reset();
      alert("Thanks! Your message has been sent.");
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="logo" href="#top">
          AJ.
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <p className="eyebrow">FINTECH · AI · SOFTWARE ENGINEERING</p>

        <h1>
          Hi, I am <span>Aadya.</span>
        </h1>

        <h2>
          I am a recent Financial Technology graduate exploring how AI and
          software can solve problems in finance and beyond.
        </h2>

        <p className="heroText">
          My background combines computer science, financial technology and
          hands-on experience across AI, data and quantitative finance.
        </p>

        <div className="heroButtons">
          <a className="primaryButton" href="#projects">
            View My Work
          </a>

          <a className="secondaryButton" href="#contact">
            Get in Touch →
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <p className="sectionNumber">01</p>
        <h2 className="sectionTitle">About me</h2>

        <div className="aboutGrid">
          <p className="largeText">
            I&apos;m interested in the point where finance, software and
            intelligent systems meet.
          </p>

          <div className="aboutCopy">
            <p>
              My background combines computer science and financial
              technology, with experience across AI engineering, backend
              development, machine learning, data analytics and quantitative
              finance.
            </p>

            <p>
              I&apos;m particularly interested in practical AI systems,
              financial technology and building reliable software around
              complex real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <p className="sectionNumber">02</p>
        <h2 className="sectionTitle">Selected Projects</h2>

        <div className="projectGrid">
          {projects.map((project) => (
            <article
              className={`projectCard ${
                project.featured ? "featured" : ""
              }`}
              key={project.title}
            >
              <div className="projectTop">
                <p className="projectType">{project.category}</p>
                <span className="projectNumber">{project.number}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="projectDescription">{project.description}</p>

              <p className="tech">{project.tech}</p>

              <a
                className="projectLink"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkText}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <p className="sectionNumber">03</p>
        <h2 className="sectionTitle">Experience</h2>

        <div className="statement">
          <p>
            My experience spans AI engineering, backend software development,
            data analytics, quantitative finance and financial technology.
          </p>
        </div>
      </section>

      {/* WRITING */}
      <section className="section" id="writing">
        <p className="sectionNumber">04</p>
        <h2 className="sectionTitle">Writing & notes</h2>

        <div className="comingSoon">
          <p>
            Thoughts on AI, financial technology, software engineering and
            things I am building.
          </p>

          <span>Coming soon.</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contactSection" id="contact">
        <p className="sectionNumber">05</p>

        <h2>Let&apos;s build something interesting.</h2>

        <p>
          I am interested in conversations about technology, finance and
          opportunities to work on ambitious technical problems.
        </p>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="contactForm"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="What would you like to talk about?"
            rows={5}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message →"}
          </button>
        </form>

        <div className="contactLinks">
          <a
            href="http://www.linkedin.com/in/aadya-jha"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/aadsj12"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href="/cv.pdf" target="_blank">
            CV ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Aadya Jha</p>
        <p>Built with Next.js · 2026</p>
      </footer>
    </main>
  );
}