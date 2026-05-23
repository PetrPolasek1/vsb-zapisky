import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Školní zápisky"
      description="Osobní znalostní databáze ke studiu na VŠB"
    >
      <main className="homePage">
        <section className="heroBlock">
          <div className="heroContent">
            <p className="eyebrow">VŠB studijní systém</p>
            <h1>Školní zápisky</h1>
            <p className="subtitle">
              Přehledné zápisky, teorie, cvičení a projekty na jednom místě.
            </p>

            <div className="buttonRow">
              <Link className="button button--primary button--lg" to="/docs/intro">
                Otevřít zápisky
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/rocnik-2/letni-semestr/APPS/teorie/architektura-pocitacu">
                Ukázkový zápisek
              </Link>
            </div>
          </div>
        </section>

        <section className="cardGrid">
          <div className="infoCard">
            <h2>Kód</h2>
            <p>Každý předmět má vlastní složku a GitHub repozitář.</p>
          </div>

          <div className="infoCard">
            <h2>Zápisky</h2>
            <p>Zápisky píšeš v Obsidianu a publikuješ přes GitHub Pages.</p>
          </div>

          <div className="infoCard">
            <h2>Automatizace</h2>
            <p>SwiftBar menu ovládá vytváření zápisků, commity i kontrolu systému.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
