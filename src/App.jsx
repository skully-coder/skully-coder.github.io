import React from "react";

import heroImage from "./images/abhinav-hero.jpg";
import workspaceImage from "./images/design-desk.jpeg";
import cvPdf from "url:./assets/documents/Abhinav_Agrawal_CV.pdf";

import "./styles.css";

const profile = {
  name: "Abhinav Agrawal",
  location: "Bengaluru, Karnataka, India",
  email: "abhinav.hfs@gmail.com",
  linkedIn: "https://www.linkedin.com/in/abhinav-agrawal-5baaa71a0",
  gitHub: "https://github.com/skully-coder",
};

const oracleAgenticBlogUrl = "https://blogs.oracle.com/scm/logistics-execution-command-center-agentic-ai";

const navItems = [
  { label: "Expertise", href: "#expertise" },
  { label: "Impact", href: "#impact" },
  { label: "Proof", href: "#proof" },
  { label: "Experience", href: "#experience" },
  { label: "Patents", href: "#patents" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = {
  email: {
    label: profile.email,
    href: `mailto:${profile.email}`,
    ariaLabel: "Email Abhinav Agrawal",
  },
  linkedIn: {
    label: "LinkedIn",
    href: profile.linkedIn,
    ariaLabel: "Open Abhinav Agrawal's LinkedIn profile",
  },
  gitHub: {
    label: "GitHub",
    href: profile.gitHub,
    ariaLabel: "Open Abhinav Agrawal's GitHub profile",
  },
  resume: {
    label: "Resume",
    href: cvPdf,
    ariaLabel: "Open Abhinav Agrawal's resume PDF",
  },
};

const metrics = [
  { value: "2+", label: "years in OTM optimization" },
  { value: "35%", label: "packing efficiency improvement" },
  { value: "50%", label: "execution time reduction" },
  { value: "58", label: "public GitHub repositories" },
];

const heroTags = ["OTM Algorithms", "MIP Packing", "Agentic AI", "Supply-Chain Systems"];

const focusAreas = [
  {
    title: "Optimization Engineering",
    text: "Mixed-integer programming, packing, sequencing, and executable optimization logic for transportation and global trade systems.",
    items: ["MIP formulation", "Constraint modeling", "Packing heuristics"],
  },
  {
    title: "Enterprise Product Delivery",
    text: "Customer-facing root-cause analysis, product enhancements, reliability improvements, and release-ready engineering across OTM components.",
    items: ["RCA", "Release readiness", "Customer blockers"],
  },
  {
    title: "Agentic AI Workflows",
    text: "GenAI apps, multi-agent concepts, and LLM-backed workflows that turn complex product behavior into practical operational assistance.",
    items: ["Fusion AI App Builder", "Agent orchestration", "Doc-grounded answers"],
  },
];

const positioningCards = [
  {
    label: "Best Fit",
    title: "Optimization, applied AI, and enterprise product engineering roles",
    text: "Strongest in teams that need algorithmic depth, production ownership, and practical AI workflows in the same engineer.",
  },
  {
    label: "Domain Edge",
    title: "Transportation systems with real operational constraints",
    text: "Experience translating capacity, compatibility, exception handling, and planner trust requirements into deployable product behavior.",
  },
  {
    label: "Differentiator",
    title: "Bridges mathematical modeling and user-facing AI assistance",
    text: "Pairs MIP and packing work with GenAI assistants that explain, recommend, and support action inside enterprise workflows.",
  },
];

const sourceSignals = [
  {
    value: "45",
    label: "GitHub followers",
    text: "Public profile signal from the skully-coder GitHub account.",
    href: "https://github.com/skully-coder",
    linkLabel: "View GitHub",
    ariaLabel: "View Abhinav Agrawal's GitHub profile",
  },
  {
    value: "9 stars / 27 forks",
    label: "ShikshaAI traction",
    text: "AI teaching assistant repository using TypeScript, Firebase, Genkit, and Google Gemini.",
    href: "https://github.com/skully-coder/shiksha-ai",
    linkLabel: "View Repo",
    ariaLabel: "View the ShikshaAI GitHub repository",
  },
  {
    value: "255 commits",
    label: "ShikshaAI build depth",
    text: "Public repository history shows sustained iteration across product, architecture, and educator workflow surfaces.",
    href: "https://github.com/skully-coder/shiksha-ai",
    linkLabel: "Inspect History",
    ariaLabel: "Inspect ShikshaAI repository history on GitHub",
  },
];

const operatingProfile = [
  {
    label: "Model",
    text: "Turns ambiguous operational rules into executable optimization logic, with a bias toward explainable constraints and planner trust.",
  },
  {
    label: "Ship",
    text: "Moves between algorithm design, customer-facing issue analysis, product hardening, and release-ready enterprise code.",
  },
  {
    label: "Extend",
    text: "Builds GenAI and agentic workflows that sit close to real product behavior instead of remaining isolated demos.",
  },
];

const evidenceTrail = [
  {
    label: "CV-backed scope",
    title: "Oracle OTM algorithms, patents, Samsung ONNX tooling",
    text: "Experience, patent, education, certification, and project claims are drawn from the current resume artifact linked on the site.",
  },
  {
    label: "Public GitHub",
    title: "58 repositories, 45 followers, ShikshaAI traction",
    text: "Public GitHub metadata supports the engineering signal and project proof points used across the portfolio.",
  },
  {
    label: "Product narrative",
    title: "Optimization + agentic AI as the positioning spine",
    text: "The page is organized around a consistent career thesis instead of a generic list of roles, tools, and links.",
  },
];

const openSourceFocus = [
  "Generative AI applications",
  "Agent-based systems",
  "Developer tools",
  "Backend systems in Java and Python",
];

const sourceReferences = [
  {
    label: "Resume artifact",
    text: "Role, patent, education, certification, and impact details.",
    href: cvPdf,
    ariaLabel: "Open the resume source artifact",
  },
  {
    label: "GitHub profile",
    text: "Repository count, follower signal, and public README focus.",
    href: profile.gitHub,
    ariaLabel: "Open the public GitHub profile source",
  },
  {
    label: "ShikshaAI repository",
    text: "Stars, forks, commits, README evidence, and live app link.",
    href: "https://github.com/skully-coder/shiksha-ai",
    ariaLabel: "Open the ShikshaAI repository source",
  },
  {
    label: "Oracle SCM blog",
    text: "Public write-up for the Logistics Execution Command Center Agentic App.",
    href: oracleAgenticBlogUrl,
    ariaLabel: "Open the Oracle SCM blog post about the Logistics Execution Command Center Agentic App",
  },
];

const impactStories = [
  {
    label: "Optimization",
    outcome: "35% efficiency gain",
    title: "Bulk packing model for constrained transportation capacity",
    text: "Designed a mixed-integer programming approach for bulk products with capacity, compatibility, split-penalty, and compartment constraints.",
  },
  {
    label: "Runtime",
    outcome: "50% faster execution",
    title: "Sharper algorithm behavior for enterprise planning flows",
    text: "Reduced execution time while preserving practical planner behavior, making optimization output easier to trust in operational scenarios.",
  },
  {
    label: "AI workflow",
    outcome: "Logistics Execution Command Center",
    title: "OTM + WMS agentic app for logistics execution",
    text: "Developed the OTM + WMS agentic app featured in Oracle's public SCM blog, helping surface execution risks, guided recommendations, and natural-language investigation across logistics workflows.",
    href: oracleAgenticBlogUrl,
    linkLabel: "Read Oracle blog",
    ariaLabel: "Read the Oracle SCM blog post about the Logistics Execution Command Center Agentic App",
  },
];

const experience = [
  {
    company: "Oracle",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Senior Applications Engineer",
        period: "Sep 2025 - Present",
        domain: "Oracle Transportation Management - Algorithms / Optimization",
        bullets: [
          "Developed a mixed-integer programming packing approach for bulk products, improving solution efficiency by 35% and reducing execution time by 50%.",
          "Developed the OTM + WMS agentic application behind Oracle's Logistics Execution Command Center public SCM blog, connecting transportation and warehouse execution signals for prioritized recommendations.",
          "Drive GenAI and agentic AI adoption inside the Transportation Management product by translating emerging capabilities into scalable product features.",
        ],
      },
      {
        title: "Application Developer",
        period: "Jul 2023 - Sep 2025",
        domain: "Oracle Transportation Management - Algorithms / Optimization",
        bullets: [
          "Built optimization and core algorithm enhancements across OTM components.",
          "Triaged and resolved critical internal issues within committed deadlines to improve stability, reliability, and release readiness.",
          "Partnered with customers to understand implementation blockers, accelerate root-cause analysis, and recommend practical adoption paths.",
          "Created a proof-of-concept GenAI agent that infers product documentation to generate clearer and more consistent answers across OTM components.",
        ],
      },
    ],
  },
  {
    company: "Samsung R&D Institute India",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "Mar 2022 - Aug 2022",
        domain: "ONNX / Model Tooling - C/C++",
        bullets: [
          "Developed C/C++ utilities to inspect, modify, and summarize ONNX models for machine learning and deep learning workflows.",
          "Implemented reusable helpers for model metadata, graph-node properties, and safe attribute updates.",
          "Cross-compiled an Android-compatible shared library for the arm64-v8a ABI to enable on-device model inspection and transformation.",
        ],
      },
    ],
  },
];

const patents = [
  {
    title: "MIP-Based Packing for Bulk Container Optimization",
    role: "Patent Application - Primary Inventor",
    text: "A mixed-integer programming approach for bulk container and compartment packing with capacity, compatibility, mixing rules, and split-penalty tuning.",
  },
  {
    title: "Agentic Simulated Annealing with Generational Iterations",
    role: "Patent Application",
    text: "An agent-population approach using simulated annealing with generational iterations to explore complex, multi-solution problem spaces.",
  },
];

const projects = [
  {
    title: "ShikshaAI",
    slug: "shiksha-ai",
    structuredId: "https://skully-coder.github.io/#project-shiksha-ai",
    tag: "AI for educators",
    outcome: "Lesson planning assistant for low-resource classrooms",
    text: "AI-powered teaching assistant for educators in low-resource environments. It automates lesson planning, assessment generation, and resource creation through a focused web experience.",
    stack: ["TypeScript", "Next.js", "Firebase", "Genkit", "Google Gemini"],
    stats: "9 stars / 27 forks",
    proof: "Public GitHub repo with Hacktoberfest participation and an active Vercel deployment.",
    evidence: [
      "Developing-region educator workflows",
      "Lesson planning, assessment generation, and resource creation",
      "Multilingual and diverse classroom support",
      "Genkit with Google Gemini models",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/skully-coder/shiksha-ai", ariaLabel: "Open the ShikshaAI GitHub repository" },
      { label: "Live App", href: "https://shiksha-ai-xi.vercel.app/", ariaLabel: "Open the ShikshaAI live app" },
    ],
  },
  {
    title: "Cupidity",
    slug: "cupidity",
    structuredId: "https://skully-coder.github.io/#project-cupidity",
    tag: "Music matching app",
    outcome: "Spotify-signal matching for listener compatibility",
    text: "Music-matching app that uses Spotify signals to connect people with similar listening preferences.",
    stack: ["Spotify API", "Node.js", "MongoDB", "Firebase", "Flutter", "Google Cloud"],
    stats: "Mobile product build",
    proof: "End-to-end app work across API design, mobile UI, cloud services, and third-party music data.",
    evidence: ["Spotify preference signals", "Mobile UI and API integration", "Cloud-backed matching workflow"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=in.co.cupidity&hl=en_IN&gl=US",
        ariaLabel: "Open Cupidity on the Google Play Store",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Java EE/SE", "Python", "C", "C++", "JavaScript"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Keras", "Pandas", "Jupyter", "LangChain", "LangGraph", "Multi-Agent Architecture"],
  },
  {
    title: "Web / Mobile",
    items: ["REST APIs", "Microservices", "Node.js", "Express.js", "Django", "Flutter", "Dart", "HTML/CSS"],
  },
  {
    title: "Data / Tools",
    items: ["Oracle", "MongoDB", "ChromaDB exposure", "Agile", "Scrum", "JIRA"],
  },
];

const certifications = [
  "Professional Scrum Master I (PSM I)",
  "Build and Secure Networks in Google Cloud",
  "Engineer Data in Google Cloud",
  "Integrate with Machine Learning APIs",
  "Global Tech Program Alum",
];

const opportunityFit = [
  {
    title: "Optimization Engineering",
    text: "Constraint-heavy planning, packing, sequencing, and algorithmic product work.",
  },
  {
    title: "Applied AI Workflows",
    text: "LLM-backed assistants, doc-grounded answers, and agentic exception handling.",
  },
  {
    title: "Enterprise Product Systems",
    text: "Customer-facing reliability, product hardening, and release-ready feature delivery.",
  },
];

const siteUrl = "https://skully-coder.github.io/";
const personId = `${siteUrl}#abhinav-agrawal`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Abhinav Agrawal Portfolio",
      url: siteUrl,
      description: "Professional portfolio for Oracle Transportation Management optimization, packing algorithms, and agentic AI workflows.",
      author: {
        "@id": personId,
      },
      about: {
        "@id": personId,
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}#profile-page`,
      url: siteUrl,
      name: "Abhinav Agrawal | Optimization and Agentic AI Engineer",
      description: "A professional profile and portfolio for Abhinav Agrawal, focused on transportation optimization, enterprise product systems, and agentic AI workflows.",
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      mainEntity: {
        "@id": personId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}social-preview.jpg`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}social-preview.jpg`,
      email: profile.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      jobTitle: "Senior Applications Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Oracle",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Manipal Institute of Technology",
      },
      sameAs: [profile.linkedIn, profile.gitHub, "https://github.com/skully-coder/shiksha-ai", "https://shiksha-ai-xi.vercel.app/"],
      knowsAbout: [
        "Oracle Transportation Management",
        "Mixed-integer programming",
        "Packing algorithms",
        "Supply-chain optimization",
        "Agentic AI workflows",
        "Enterprise product engineering",
      ],
      hasCredential: certifications.map((credential) => ({
        "@type": "EducationalOccupationalCredential",
        name: credential,
      })),
      owns: projects.map((project) => ({
        "@id": project.structuredId,
      })),
    },
    ...projects.map((project) => ({
      "@type": "CreativeWork",
      "@id": project.structuredId,
      name: project.title,
      description: project.text,
      url: project.links[0]?.href,
      creator: {
        "@id": personId,
      },
      keywords: project.stack.join(", "),
    })),
  ],
};

const App = () => {
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#expertise">
        Skip to content
      </a>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" aria-label="Abhinav Agrawal home">
          AA
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <img className="hero-image" src={heroImage} alt="Abhinav Agrawal smiling at an event" loading="eager" fetchPriority="high" decoding="async" />
          <div className="hero-overlay" />
          <div className="hero-layout">
            <div className="hero-content">
              <p className="eyebrow">Optimization engineer - Oracle Transportation Management</p>
              <h1>{profile.name}</h1>
              <p className="hero-copy">
                I build enterprise-grade optimization systems, packing algorithms, and agentic AI workflows for transportation and global trade operations.
              </p>
              <div className="hero-tag-list" aria-label="Primary engineering domains">
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#impact">
                  See Impact
                </a>
                <a className="button button-secondary" href={externalLinks.resume.href} target="_blank" rel="noopener noreferrer" aria-label={externalLinks.resume.ariaLabel}>
                  Download CV
                </a>
              </div>
            </div>
            <aside className="hero-proof" aria-label="Current work focus">
              <span>Current Focus</span>
              <strong>Optimization algorithms + agentic AI for enterprise logistics</strong>
              <p>Turning transportation constraints, exceptions, and product knowledge into systems that planners can operate with confidence.</p>
              <dl>
                <div>
                  <dt>Domain</dt>
                  <dd>OTM algorithms</dd>
                </div>
                <div>
                  <dt>Public Builds</dt>
                  <dd>58 GitHub repos</dd>
                </div>
              </dl>
            </aside>
          </div>
          <div className="hero-contact" aria-label="Profile contact links">
            <span>{profile.location}</span>
            <a href={externalLinks.email.href} aria-label={externalLinks.email.ariaLabel}>
              {externalLinks.email.label}
            </a>
            <a className="external-link" href={externalLinks.linkedIn.href} target="_blank" rel="noopener noreferrer" aria-label={externalLinks.linkedIn.ariaLabel}>
              {externalLinks.linkedIn.label}
            </a>
            <a className="external-link" href={externalLinks.gitHub.href} target="_blank" rel="noopener noreferrer" aria-label={externalLinks.gitHub.ariaLabel}>
              {externalLinks.gitHub.label}
            </a>
          </div>
        </section>

        <section className="metrics-strip" aria-label="Career metrics">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="positioning-strip" aria-label="Portfolio positioning summary">
          {positioningCards.map((item) => (
            <article className="positioning-card" key={item.label}>
              <span>{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="section section-split" id="expertise">
          <div className="section-kicker">Expertise</div>
          <div>
            <h2>Optimization engineer focused on usable enterprise intelligence.</h2>
            <p className="section-lede">
              My work sits where algorithms, product reliability, and AI-enabled user experiences meet. The goal is simple: make complex transportation decisions faster, explainable, and easier to act on.
            </p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <div className="mini-tag-list">
                  {area.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section impact-section" id="impact">
          <div className="section-heading compact-heading">
            <div className="section-kicker">Impact</div>
            <h2>Proof points from optimization, runtime, and AI-assisted operations.</h2>
          </div>
          <div className="impact-grid">
            {impactStories.map((story) => (
              <article className="impact-card" key={story.title}>
                <div className="impact-meta">
                  <span>{story.label}</span>
                  <strong>{story.outcome}</strong>
                </div>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                {story.href ? (
                  <a className="impact-link external-link" href={story.href} target="_blank" rel="noopener noreferrer" aria-label={story.ariaLabel}>
                    {story.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section proof-section" id="proof">
          <div className="section-heading compact-heading">
            <div className="section-kicker">Proof</div>
            <h2>Public engineering signals that support the product story.</h2>
          </div>
          <div className="proof-layout">
            <div className="source-grid">
              {sourceSignals.map((signal) => (
                <article className="source-card" key={signal.label}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                  <p>{signal.text}</p>
                  <a className="source-link external-link" href={signal.href} target="_blank" rel="noopener noreferrer" aria-label={signal.ariaLabel}>
                    {signal.linkLabel}
                  </a>
                </article>
              ))}
            </div>
            <div className="operating-panel">
              <div className="section-kicker">How I Work</div>
              {operatingProfile.map((item) => (
                <div className="operating-row" key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="evidence-trail" aria-label="Portfolio evidence trail">
            {evidenceTrail.map((item) => (
              <article className="evidence-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="open-source-focus" aria-label="Public GitHub README focus">
            <div>
              <span>Public GitHub README focus</span>
              <strong>What the broader build history points toward</strong>
            </div>
            <div className="open-source-focus-list">
              {openSourceFocus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="source-reference-row" aria-label="Portfolio source references">
            {sourceReferences.map((source) => (
              <a className="source-reference-link external-link" href={source.href} target="_blank" rel="noopener noreferrer" aria-label={source.ariaLabel} key={source.label}>
                <span>{source.label}</span>
                <strong>{source.text}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <div className="section-kicker">Experience</div>
            <h2>Shipping algorithms, product features, and AI workflows in enterprise systems.</h2>
          </div>

          <div className="timeline">
            {experience.map((company) => (
              <article className="company-block" key={company.company}>
                <div className="company-header">
                  <h3>{company.company}</h3>
                  <span>{company.location}</span>
                </div>
                <div className="role-list">
                  {company.roles.map((role) => (
                    <div className="role-card" key={`${company.company}-${role.title}`}>
                      <div className="role-topline">
                        <div>
                          <h4>{role.title}</h4>
                          <p>{role.domain}</p>
                        </div>
                        <span>{role.period}</span>
                      </div>
                      <ul>
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-media">
          <div className="media-panel">
            <img src={workspaceImage} alt="Desk with engineering workspace materials" loading="lazy" decoding="async" />
          </div>
          <div>
            <div className="section-kicker">Work Style</div>
            <h2>Practical research translated into production-ready product behavior.</h2>
            <p className="section-lede">
              I like problems that require both mathematical rigor and product empathy: modeling constraints correctly, debugging edge cases, and turning rough ideas into flows that real users can operate.
            </p>
          </div>
        </section>

        <section className="section" id="patents">
          <div className="section-heading compact-heading">
            <div className="section-kicker">Patents</div>
            <h2>Applied invention across optimization and agentic search.</h2>
          </div>
          <div className="card-grid two-column">
            {patents.map((patent) => (
              <article className="feature-card" key={patent.title}>
                <span>{patent.role}</span>
                <h3>{patent.title}</h3>
                <p>{patent.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section tinted-section" id="projects">
          <div className="section-heading compact-heading">
            <div className="section-kicker">Projects</div>
            <h2>Selected builds outside core product work.</h2>
          </div>
          <div className="card-grid two-column">
            {projects.map((project) => {
              const content = (
                <>
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                  <strong className="project-outcome">{project.outcome}</strong>
                  <p>{project.text}</p>
                  <div className="project-proof">
                    <strong>{project.stats}</strong>
                    <span>{project.proof}</span>
                  </div>
                  <ul className="project-evidence" aria-label={`${project.title} evidence`}>
                    {project.evidence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links" aria-label={`${project.title} links`}>
                    {project.links.map((link) => (
                      <a className="external-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} key={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </>
              );

              return (
                <article className="feature-card project-card" key={project.title}>
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skills-section">
          <div className="section-heading">
            <div className="section-kicker">Technology</div>
            <h2>Tools I use to build, model, and ship.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials-section">
          <div className="credential-block">
            <div className="section-kicker">Education</div>
            <h2>Manipal Institute of Technology</h2>
            <p>B.Tech. in Computer Science and Engineering</p>
            <p className="credential-meta">Jul 2019 - Jun 2023 | CGPA: 8.9/10.0</p>
          </div>
          <div className="credential-block">
            <div className="section-kicker">Certifications</div>
            <ul className="clean-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="credential-block">
            <div className="section-kicker">Leadership</div>
            <ul className="clean-list">
              <li>Developer Student Clubs, MIT Manipal - App Dev Subhead</li>
              <li>IECSE Manipal - Managing Committee Member</li>
              <li>Oracle volunteering coach and referee for young football players</li>
            </ul>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <div className="section-kicker">Contact</div>
            <h2>Have an optimization, AI workflow, or product engineering problem?</h2>
            <p>Reach out for engineering roles, collaboration, or product conversations around transportation systems and applied AI.</p>
          </div>
          <div className="contact-panel">
            <div className="fit-grid" aria-label="Best fit opportunities">
              {opportunityFit.map((item) => (
                <article className="fit-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href={externalLinks.email.href} aria-label={externalLinks.email.ariaLabel}>
                Email Me
              </a>
              <a className="button button-secondary dark-button" href={externalLinks.resume.href} target="_blank" rel="noopener noreferrer" aria-label={externalLinks.resume.ariaLabel}>
                {externalLinks.resume.label}
              </a>
              <a className="button button-secondary dark-button external-link" href={externalLinks.gitHub.href} target="_blank" rel="noopener noreferrer" aria-label={externalLinks.gitHub.ariaLabel}>
                {externalLinks.gitHub.label}
              </a>
              <a className="button button-secondary dark-button external-link" href={externalLinks.linkedIn.href} target="_blank" rel="noopener noreferrer" aria-label={externalLinks.linkedIn.ariaLabel}>
                {externalLinks.linkedIn.label}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>{profile.email}</span>
      </footer>
    </div>
  );
};

export default App;
