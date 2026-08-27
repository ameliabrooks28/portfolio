import './App.css'

const links = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  email: 'mailto:your.email@example.com',
}

const projects = [
  {
    title: 'Project One',
    description: 'A short description of this project goes here — what it does and why it matters.',
    tags: ['Python', 'Data Analysis'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of this project goes here — what it does and why it matters.',
    tags: ['React', 'JavaScript'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A short description of this project goes here — what it does and why it matters.',
    tags: ['R', 'Statistics'],
    link: '#',
  },
]

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.28 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  )
}

function App() {
  return (
    <>
      <header className="nav">
        <span className="nav__brand">Amelia Brooks</span>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <p className="hero__eyebrow">Class of 2028 &middot; QSS Major</p>
          <h1 className="hero__title">
            Hi, I&rsquo;m <span className="hero__highlight">Amelia Brooks</span>
          </h1>
          <p className="hero__subtitle">
            I study Quantitative Social Science, exploring the space where data, code, and human
            behavior meet. This is a home for what I&rsquo;m building and learning along the way.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View Projects
            </a>
            <a className="button button--ghost" href={links.email}>
              Get in Touch
            </a>
          </div>
          <div className="hero__socials">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={links.email} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2 className="section__title">Projects</h2>
          <p className="section__subtitle">A few things I&rsquo;ve worked on recently.</p>
          <div className="projects__grid">
            {projects.map((project) => (
              <a className="card" href={project.link} key={project.title}>
                <div className="card__thumb" aria-hidden="true" />
                <div className="card__body">
                  <h3 className="card__title">{project.title}</h3>
                  <p className="card__description">{project.description}</p>
                  <div className="card__tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2 className="section__title">Let&rsquo;s connect</h2>
          <p className="section__subtitle">
            Always happy to chat about data, projects, or opportunities.
          </p>
          <div className="contact__links">
            <a className="button button--primary" href={links.email}>
              <MailIcon /> Email Me
            </a>
            <a className="button button--ghost" href={links.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a className="button button--ghost" href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Amelia Brooks. Built with React &amp; Vite.</p>
      </footer>
    </>
  )
}

export default App
