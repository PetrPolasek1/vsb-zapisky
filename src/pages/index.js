import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const semesters = [{'year': '2. ročník', 'semester': 'Letní semestr', 'semesterNumber': '4. semestr', 'description': 'Zápisky, teorie, cvičení a projekty pro tento semestr.', 'subjects': [{'code': 'ANJ4', 'name': 'Jazyk anglický IV pro FEI - pokročilá úroveň', 'link': '/docs/rocnik-2/letni-semestr/ANJ4/'}, {'code': 'APPS', 'name': 'Architektury počítačů a paralelních systémů', 'link': '/docs/rocnik-2/letni-semestr/APPS/'}, {'code': 'SKJ', 'name': 'Skriptovací jazyky', 'link': '/docs/rocnik-2/letni-semestr/SKJ/'}, {'code': 'TAMZ', 'name': 'Tvorba aplikací pro mobilní zařízení I', 'link': '/docs/rocnik-2/letni-semestr/TAMZ/'}, {'code': 'TDS', 'name': 'Technologie databázových systémů I', 'link': '/docs/rocnik-2/letni-semestr/TDS/'}, {'code': 'URO', 'name': 'Uživatelská rozhraní', 'link': '/docs/rocnik-2/letni-semestr/URO/'}, {'code': 'UTI', 'name': 'Úvod do teoretické informatiky', 'link': '/docs/rocnik-2/letni-semestr/UTI/'}]}, {'year': '3. ročník', 'semester': 'Zimní semestr', 'semesterNumber': '5. semestr', 'description': 'Zápisky, teorie, cvičení a projekty pro tento semestr.', 'subjects': [{'code': 'TEST', 'name': 'Testovací předmět', 'link': '/docs/rocnik-3/zimni-semestr/TEST/'}]}];

export default function Home() {
  return (
    <Layout
      title="Školní zápisky"
      description="Osobní znalostní databáze pro studium na VŠB"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>VŠB · OSOBNÍ ZNALOSTNÍ DATABÁZE</p>
            <h1>Školní zápisky</h1>
            <p className={styles.heroText}>
              Přehledné místo pro teorii, cvičení, projekty a přípravu ke zkouškám.
              Každý semestr a předmět má vlastní strukturu.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Otevřít dokumentaci
              </Link>
              <a
                className={styles.secondaryButton}
                href="https://github.com/PetrPolasek1/vsb-zapisky"
              >
                GitHub repo
              </a>
            </div>
          </div>
        </section>

        <section className={styles.semesterSection}>
          <div className={styles.sectionHeading}>
            <p>Rozcestník</p>
            <h2>Semestry</h2>
          </div>

          <div className={styles.semesterList}>
            {semesters.map((semester) => (
              <article
                className={styles.semesterCard}
                key={`${semester.year}-${semester.semester}`}
              >
                <div className={styles.semesterHeader}>
                  <div>
                    <p className={styles.semesterMeta}>{semester.year}</p>
                    <h3>{semester.semester}</h3>
                    <p>{semester.description}</p>
                  </div>

                  <div className={styles.semesterBadge}>
                    {semester.semesterNumber}
                  </div>
                </div>

                {semester.subjects.length > 0 ? (
                  <div className={styles.subjectGrid}>
                    {semester.subjects.map((subject) => (
                      <Link
                        className={styles.subjectCard}
                        to={subject.link}
                        key={subject.code}
                      >
                        <div className={styles.subjectCode}>{subject.code}</div>
                        <div className={styles.subjectName}>{subject.name}</div>
                        <div className={styles.subjectOpen}>Otevřít →</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className={styles.emptySemester}>
                    Zatím zde nejsou žádné předměty. Přidej je přes <code>school_create_subject</code>.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
