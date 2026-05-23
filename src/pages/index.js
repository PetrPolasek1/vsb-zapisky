import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const semesters = [
  {
    year: '2. ročník',
    semester: 'Letní semestr',
    semesterNumber: '4. semestr',
    description: 'Aktuální semestr se zápisky, teorií, cvičeními a projekty.',
    subjects: [
      {
        code: 'APPS',
        name: 'Architektury počítačů a paralelních systémů',
        link: '/docs/rocnik-2/letni-semestr/APPS/teorie/architektura-pocitacu',
      },
      {
        code: 'ANJ4',
        name: 'Jazyk anglický IV',
        link: '/docs/rocnik-2/letni-semestr/ANJ4',
      },
      {
        code: 'SKJ',
        name: 'Skriptovací jazyky',
        link: '/docs/rocnik-2/letni-semestr/SKJ',
      },
      {
        code: 'URO',
        name: 'Uživatelská rozhraní',
        link: '/docs/rocnik-2/letni-semestr/URO',
      },
      {
        code: 'UTI',
        name: 'Úvod do teoretické informatiky',
        link: '/docs/rocnik-2/letni-semestr/UTI',
      },
      {
        code: 'TAMZ',
        name: 'Tvorba aplikací pro mobilní zařízení I',
        link: '/docs/rocnik-2/letni-semestr/TAMZ',
      },
      {
        code: 'TDS',
        name: 'Technologie databázových systémů I',
        link: '/docs/rocnik-2/letni-semestr/TDS',
      },
    ],
  },
];

export default function Home() {
  return (
    <Layout
      title="Školní zápisky"
      description="Osobní znalostní databáze ke studiu na VŠB"
    >
      <main className="home-modern">
        <section className="hero-modern">
          <div>
            <p className="hero-kicker">VŠB · osobní znalostní databáze</p>
            <h1>Školní zápisky</h1>
            <p className="hero-text">
              Přehledné místo pro teorii, cvičení, projekty a přípravu ke zkouškám.
              Každý předmět má vlastní strukturu a může být propojený s GitHubem.
            </p>

            <div className="hero-actions">
              <Link className="button button--primary button--lg" to="/docs/intro">
                Otevřít dokumentaci
              </Link>
              <a className="button button--secondary button--lg" href="https://github.com/PetrPolasek1/vsb-zapisky">
                GitHub repo
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-item">
              <span>Aktuálně</span>
              <strong>2. ročník · LS</strong>
            </div>
            <div className="hero-panel-item">
              <span>Semestr</span>
              <strong>4. semestr</strong>
            </div>
            <div className="hero-panel-item">
              <span>Předměty</span>
              <strong>7</strong>
            </div>
          </div>
        </section>

        <section className="semester-section">
          <div className="section-heading">
            <p>Rozcestník</p>
            <h2>Semestry</h2>
          </div>

          {semesters.map((semester) => (
            <article className="semester-card" key={semester.semesterNumber}>
              <div className="semester-card-header">
                <div>
                  <p className="semester-meta">{semester.year}</p>
                  <h3>{semester.semester}</h3>
                  <p>{semester.description}</p>
                </div>

                <div className="semester-badge">
                  {semester.semesterNumber}
                </div>
              </div>

              <div className="subject-grid">
                {semester.subjects.map((subject) => (
                  <Link className="subject-card" to={subject.link} key={subject.code}>
                    <div className="subject-code">{subject.code}</div>
                    <div className="subject-name">{subject.name}</div>
                    <div className="subject-open">Otevřít →</div>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
