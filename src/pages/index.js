import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main style={{padding: '4rem 2rem', maxWidth: 900, margin: '0 auto'}}>
      <h1>Školní zápisky</h1>
      <p>
        Osobní web pro zápisky, teorii, cvičení a přípravu na zkoušky.
      </p>
      <p>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Otevřít zápisky
        </Link>
      </p>
    </main>
  );
}
