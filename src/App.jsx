import './App.css'

const links = {
  github: 'https://github.com/ameliabrooks28',
  linkedin: 'https://www.linkedin.com/in/amelia-brooks-9b5b603a1',
  email: 'mailto:amelia.e.brooks.28@dartmouth.edu',
}

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
        <span className="nav__brand">Misinformation &amp; the 2020 Election</span>
        <nav className="nav__links">
          <a href="#question">Question</a>
          <a href="#data">Data</a>
          <a href="#methods">Methods</a>
          <a href="#results">Results</a>
          <a href="#takeaways">Takeaways</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero__eyebrow">Research Project &middot; Amelia Brooks, QSS</p>
          <h1 className="hero__title">
            The Influence of <span className="hero__highlight">COVID-19 Misinformation</span> on
            the 2020 U.S. Presidential Election
          </h1>
          <p className="hero__subtitle">
            Was believing COVID-19 misinformation associated with voting for Trump in
            2020&mdash;and does that relationship hold once political party is taken into
            account?
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#results">
              Jump to Results
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

        <section className="block" id="question">
          <p className="block__index">01</p>
          <h2 className="section__title">Question</h2>
          <blockquote className="callout">
            Was COVID-19 misinformation belief associated with voting for Trump in the 2020
            presidential election?
          </blockquote>
          <p className="block__text">
            This question was motivated by prior research measuring exposure to misinformation
            from political elites on Twitter, which found a strong relationship between
            misinformation exposure and political ideology&mdash;more ideologically extreme
            users were exposed to more misinformation, and that relationship was much stronger
            among conservative users. That raised a further question: does misinformation
            belief itself help explain political behavior, like voting, above and beyond party?
          </p>
        </section>

        <section className="block" id="data">
          <p className="block__index">02</p>
          <h2 className="section__title">Data</h2>
          <p className="block__text">
            Data come from two waves of the Pew Research Center&rsquo;s American Trends Panel,
            linked at the respondent level.
          </p>
          <div className="wave-grid">
            <div className="wave-card">
              <p className="wave-card__label">Wave 1</p>
              <p className="wave-card__text">Measures of COVID-19 misinformation belief.</p>
            </div>
            <div className="wave-card">
              <p className="wave-card__label">Wave 2</p>
              <p className="wave-card__text">
                Self-reported 2020 presidential vote and political party affiliation.
              </p>
            </div>
          </div>
        </section>

        <section className="block" id="methods">
          <p className="block__index">03</p>
          <h2 className="section__title">Methods</h2>
          <ol className="steps">
            <li className="steps__item">
              Linked the two survey waves to bring misinformation belief, vote choice, and party
              affiliation into a single respondent-level dataset.
            </li>
            <li className="steps__item">
              Examined the relationships between misinformation belief, voting for Trump, and
              political party.
            </li>
            <li className="steps__item">
              Ran a logistic regression predicting a Trump vote from COVID-19 misinformation
              belief.
            </li>
            <li className="steps__item">
              Ran a second logistic regression adding political party as a covariate to account
              for it as a potential confounder.
            </li>
          </ol>
        </section>

        <section className="block" id="results">
          <p className="block__index">04</p>
          <h2 className="section__title">Results</h2>
          <div className="stat-grid">
            <div className="stat-card">
              <p className="stat-card__value">5.35&times;</p>
              <p className="stat-card__label">
                Odds of voting for Trump among misinformation believers, unadjusted
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-card__value">3.6&times;</p>
              <p className="stat-card__label">
                Odds of voting for Trump among misinformation believers, after controlling for
                political party
              </p>
            </div>
          </div>
          <div className="figure-placeholder">Figure / chart coming soon</div>
        </section>

        <section className="block" id="takeaways">
          <p className="block__index">05</p>
          <h2 className="section__title">Takeaways</h2>
          <ul className="takeaways-list">
            <li className="takeaways-list__item">
              The relationship between misinformation belief and voting behavior goes beyond
              just political affiliation.
            </li>
            <li className="takeaways-list__item">
              Misinformation can matter for important political opinions and real decisions and
              outcomes, not just abstract beliefs.
            </li>
          </ul>
        </section>

        <section className="contact" id="contact">
          <h2 className="section__title">Questions about this project?</h2>
          <p className="section__subtitle">Happy to talk through the data, methods, or results.</p>
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
