import './App.css'

const links = {
  github: 'https://github.com/ameliabrooks28',
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.28 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  )
}

function QuestionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
      <text x="12" y="16.3" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
        ?
      </text>
    </svg>
  )
}

function DataIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="12" width="4" height="8.5" rx="1" fill="currentColor" />
      <rect x="10" y="6.5" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="16.5" y="3" width="4" height="17.5" rx="1" fill="currentColor" />
    </svg>
  )
}

function MethodsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.3 11 10 7.3M6.3 13 10 16.7M14 7.3 17.7 11M14 16.7 17.7 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="4.5" cy="12" r="2.3" fill="currentColor" />
      <circle cx="12" cy="5.5" r="2.3" fill="currentColor" />
      <circle cx="12" cy="18.5" r="2.3" fill="currentColor" />
      <circle cx="19.5" cy="12" r="2.3" fill="currentColor" />
    </svg>
  )
}

function ResultsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 17 9 10.5l4 3.5 7-8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.5 5h4.5v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TakeawaysIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9.5 18.5h5M10.3 21h3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 3a6.2 6.2 0 0 0-3.6 11.2c.6.44.9 1.1.9 1.8h5.4c0-.7.3-1.36.9-1.8A6.2 6.2 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function App() {
  return (
    <>
      <header className="masthead">
        <div className="masthead__topbar">
          <span className="masthead__brand">Amelia Brooks &middot; QSS</span>
          <nav className="masthead__nav">
            <a href="#question">Question</a>
            <a href="#data">Data</a>
            <a href="#methods">Methods</a>
            <a href="#results">Results</a>
            <a href="#takeaways">Takeaways</a>
          </nav>
          <a className="masthead__github" href={links.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        </div>
        <div className="masthead__inner">
          <p className="masthead__eyebrow">QSS20</p>
          <h1 className="masthead__title">
            The Influence of <span className="masthead__highlight">COVID-19 Misinformation</span>{' '}
            on the 2020 U.S. Presidential Election
          </h1>
          <p className="masthead__subtitle">
            Was believing COVID-19 misinformation associated with voting for Trump in 2020, and
            does that relationship hold once political party and demographic variables are taken
            into account?
          </p>
          <div className="masthead__stats">
            <div className="masthead__stat">
              <p className="masthead__stat-value">5.35&times;</p>
              <p className="masthead__stat-label">Odds of voting Trump, unadjusted</p>
            </div>
            <div className="masthead__stat">
              <p className="masthead__stat-value">3.6&times;</p>
              <p className="masthead__stat-label">Odds after controlling for party</p>
            </div>
          </div>
        </div>
        <a className="masthead__scroll" href="#question" aria-label="Scroll to content">
          &darr;
        </a>
      </header>

      <main>

        <section className="block" id="question">
          <div className="block__head">
            <span className="block__icon">
              <QuestionIcon />
            </span>
            <div>
              <p className="block__index">01</p>
              <h2 className="section__title">Question</h2>
            </div>
          </div>
          <blockquote className="callout">
            Was COVID-19 misinformation belief associated with voting for Trump in the 2020
            presidential election?
          </blockquote>
          <p className="block__text">
            This question was motivated by prior research measuring exposure to misinformation
            from political elites on Twitter, which found a strong relationship between
            misinformation exposure and political ideology: more ideologically extreme users
            were exposed to more misinformation, and that relationship was much stronger among
            conservative users. That raised a further question: does misinformation belief
            itself help explain voting behavior, above and beyond party?
          </p>
        </section>

        <section className="block" id="data">
          <div className="block__head">
            <span className="block__icon">
              <DataIcon />
            </span>
            <div>
              <p className="block__index">02</p>
              <h2 className="section__title">Data</h2>
            </div>
          </div>
          <p className="block__text">
            Data come from three waves of the Pew Research Center&rsquo;s American Trends Panel,
            linked at the respondent level.
          </p>
          <div className="wave-grid">
            <div className="wave-card">
              <p className="wave-card__label">Wave 23</p>
              <p className="wave-card__date">November&ndash;December 2016</p>
              <p className="wave-card__text">Self-reported 2016 presidential vote.</p>
            </div>
            <div className="wave-card">
              <p className="wave-card__label">Wave 63.5</p>
              <p className="wave-card__date">March 2020</p>
              <p className="wave-card__text">
                Measures of COVID-19 misinformation belief, political affiliation, ideology, and
                demographic characteristics.
              </p>
            </div>
            <div className="wave-card">
              <p className="wave-card__label">Wave 78</p>
              <p className="wave-card__date">November 2020</p>
              <p className="wave-card__text">Self-reported 2020 presidential vote.</p>
            </div>
          </div>

          <div className="measure-note">
            <p className="measure-note__label">How misinformation belief was measured</p>
            <p className="measure-note__text">
              In Wave 63.5, respondents were asked how they believed COVID-19 originated, with
              three response options: &ldquo;Was developed intentionally in a lab,&rdquo;
              &ldquo;Doesn&rsquo;t really exist,&rdquo; and &ldquo;Came about naturally.&rdquo;
              Respondents who chose either of the first two options were coded as holding a
              COVID-19 misinformation belief. Very few respondents selected &ldquo;Doesn&rsquo;t
              really exist,&rdquo; so throughout the rest of this page, &ldquo;misinformation
              believers&rdquo; effectively refers to respondents who believed COVID-19 was
              developed intentionally in a lab.
            </p>
          </div>

          <div className="table-wrap">
            <table className="table1">
              <caption>
                Table 1. Characteristics of the primary analysis sample (N = 5,068). Counts and
                percentages describe the distribution of 2020 presidential vote, COVID-19 origin
                belief, political party affiliation, age, and education among respondents
                included in the primary regression analysis.
              </caption>
              <thead>
                <tr>
                  <th>Characteristic</th>
                  <th>N</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table1__group">
                  <td colSpan="3">2020 Presidential Vote</td>
                </tr>
                <tr>
                  <td>Biden voter</td>
                  <td>3,299</td>
                  <td>65.1%</td>
                </tr>
                <tr>
                  <td>Trump voter</td>
                  <td>1,769</td>
                  <td>34.9%</td>
                </tr>
                <tr className="table1__group">
                  <td colSpan="3">COVID-19 Origin Belief</td>
                </tr>
                <tr>
                  <td>Natural origin</td>
                  <td>3,935</td>
                  <td>77.6%</td>
                </tr>
                <tr>
                  <td>Intentional lab</td>
                  <td>1,133</td>
                  <td>22.4%</td>
                </tr>
                <tr className="table1__group">
                  <td colSpan="3">Political Party</td>
                </tr>
                <tr>
                  <td>Dem/Lean Dem</td>
                  <td>3,118</td>
                  <td>61.5%</td>
                </tr>
                <tr>
                  <td>Rep/Lean Rep</td>
                  <td>1,894</td>
                  <td>37.4%</td>
                </tr>
                <tr>
                  <td>DK/Refused/No lean</td>
                  <td>56</td>
                  <td>1.1%</td>
                </tr>
                <tr className="table1__group">
                  <td colSpan="3">Age</td>
                </tr>
                <tr>
                  <td>18&ndash;29</td>
                  <td>399</td>
                  <td>7.9%</td>
                </tr>
                <tr>
                  <td>30&ndash;49</td>
                  <td>1,464</td>
                  <td>28.9%</td>
                </tr>
                <tr>
                  <td>50&ndash;64</td>
                  <td>1,666</td>
                  <td>32.9%</td>
                </tr>
                <tr>
                  <td>65+</td>
                  <td>1,539</td>
                  <td>30.4%</td>
                </tr>
                <tr className="table1__group">
                  <td colSpan="3">Education</td>
                </tr>
                <tr>
                  <td>H.S. graduate or less</td>
                  <td>497</td>
                  <td>9.8%</td>
                </tr>
                <tr>
                  <td>Some college</td>
                  <td>1,307</td>
                  <td>25.8%</td>
                </tr>
                <tr>
                  <td>College graduate+</td>
                  <td>3,264</td>
                  <td>64.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="block" id="methods">
          <div className="block__head">
            <span className="block__icon">
              <MethodsIcon />
            </span>
            <div>
              <p className="block__index">03</p>
              <h2 className="section__title">Methods</h2>
            </div>
          </div>
          <ol className="steps">
            <li className="steps__item">
              <p className="steps__item-text">
                Linked the three survey waves to bring misinformation belief, 2020 vote choice,
                2016 vote choice, and party affiliation &amp; demographics into a single
                respondent-level data set.
              </p>
            </li>
            <li className="steps__item">
              <p className="steps__item-text">
                Examined the relationships between misinformation belief, voting for Trump, and
                political party.
              </p>
              <div className="figures-grid">
                <figure className="figure-card">
                  <img
                    src="/figures/figure-1-misinfo-by-party.png"
                    alt="Bar chart showing COVID-19 misinformation belief by political party"
                  />
                  <figcaption>
                    <span className="figure-card__label">Figure 1 &middot; Misinformation Belief by Party</span>
                    <span className="figure-card__desc">
                      Belief in an intentional lab origin is far more common among
                      Republicans and independents than Democrats.
                    </span>
                  </figcaption>
                </figure>
                <figure className="figure-card">
                  <img
                    src="/figures/figure-2-trump-vote-by-misinfo.png"
                    alt="Bar chart showing Trump voting by COVID-19 misinformation belief"
                  />
                  <figcaption>
                    <span className="figure-card__label">Figure 2 &middot; Trump Vote by Misinformation Belief</span>
                    <span className="figure-card__desc">
                      Respondents who believed in an intentional lab origin voted for Trump
                      at more than double the rate of those who believed in a natural
                      origin.
                    </span>
                  </figcaption>
                </figure>
                <figure className="figure-card">
                  <img
                    src="/figures/figure-3-trump-vote-by-misinfo-party.png"
                    alt="Bar chart showing Trump voting by COVID-19 misinformation belief and political party"
                  />
                  <figcaption>
                    <span className="figure-card__label">Figure 3 &middot; Trump Vote by Belief and Party</span>
                    <span className="figure-card__desc">
                      The gap between believers and non-believers holds within every party
                      group, and is widest among independents.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </li>
            <li className="steps__item">
              <p className="steps__item-text">
                Ran a series of logistic regressions predicting a Trump vote from COVID
                misinformation belief, adding covariates progressively:
              </p>
              <ol className="model-list">
                <li className="model-list__item">
                  <span className="model-list__label">Model 1</span>
                  <span>Unadjusted</span>
                </li>
                <li className="model-list__item">
                  <span className="model-list__label">Model 2</span>
                  <span>+ political party</span>
                </li>
                <li className="model-list__item">
                  <span className="model-list__label">Model 3</span>
                  <span>+ age and education</span>
                </li>
                <li className="model-list__item">
                  <span className="model-list__label">Model 4</span>
                  <span>+ prior 2016 vote (2016&ndash;2020 subsample)</span>
                </li>
              </ol>
              <p className="steps__item-note">
                Sample size drops from n = 5,068 in Models 1&ndash;3 to n = 1,406 in Model 4,
                reflecting the subsample of respondents observed in both the 2016 and 2020
                waves.
              </p>
            </li>
          </ol>
        </section>

        <section className="block" id="results">
          <div className="block__head">
            <span className="block__icon">
              <ResultsIcon />
            </span>
            <div>
              <p className="block__index">04</p>
              <h2 className="section__title">Results</h2>
            </div>
          </div>
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

          <div className="stat-card stat-card--wide">
            <p className="stat-card__value">3.25&times;</p>
            <p className="stat-card__label">
              Odds of voting for Trump among misinformation believers, after controlling for
              political party, age, and education
            </p>
          </div>
          <figure className="figure-card figure-card--solo">
            <img
              src="/figures/figure-4-forest-models-1-3.png"
              alt="Forest plot of odds ratios for models 1 through 3, showing the association between COVID-19 misinformation belief and Trump voting"
            />
            <figcaption>
              <span className="figure-card__label">Figure 4 &middot; Odds Ratios Across Models 1&ndash;3</span>
              <span className="figure-card__desc">
                Point estimates and 95% confidence intervals for the odds of voting for Trump
                among misinformation believers, as party, age, and education are added as
                controls.
              </span>
            </figcaption>
          </figure>

          <div className="stat-card stat-card--wide">
            <p className="stat-card__value">4.50&times; &rarr; 8.41&times;</p>
            <p className="stat-card__label">
              Odds of voting for Trump among misinformation believers, after controlling for
              prior 2016 vote
            </p>
            <p className="stat-card__note">
              Both taken from the subsample of respondents who appeared in both the 2016 and
              2020 surveys (n = 1,406, down from n = 5,068 in the primary models).
            </p>
          </div>
          <figure className="figure-card figure-card--solo">
            <img
              src="/figures/figure-5-forest-model-4.png"
              alt="Forest plot of odds ratios for Model 4, comparing the subsample estimate adjusting for party, age, and education against the estimate that also adjusts for prior 2016 vote"
            />
            <figcaption>
              <span className="figure-card__label">Figure 5 &middot; Odds Ratios in the 2016&ndash;2020 Subsample</span>
              <span className="figure-card__desc">
                Among respondents observed in both survey waves, adjusting for a
                respondent&rsquo;s actual 2016 vote nearly doubles the estimated odds ratio.
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="block" id="takeaways">
          <div className="block__head">
            <span className="block__icon">
              <TakeawaysIcon />
            </span>
            <div>
              <p className="block__index">05</p>
              <h2 className="section__title">Takeaways</h2>
            </div>
          </div>
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
          <h2 className="section__title">Explore the project</h2>
          <p className="section__subtitle">
            Full code, data cleaning scripts, and analysis are available on GitHub.
          </p>
          <div className="contact__links">
            <a className="button button--primary" href={links.github} target="_blank" rel="noreferrer">
              <GithubIcon /> View on GitHub
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
