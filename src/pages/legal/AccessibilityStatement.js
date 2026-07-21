import React from 'react';
import Seo from '../../components/Seo';
import './LegalPage.css';
import { SITE } from "../../config/site";

export default function AccessibilityStatement() {
  return (
    <main className="legal-page" id="main-content">
      <Seo
        title="Accessibility Statement | Apex Solar and Construction"
        description="Our commitment to making the Apex Solar and Construction website accessible to everyone, including users of assistive technology."
        path="/accessibility"
      />
      <div className="legal-page__inner">
        <p className="legal-page__eyebrow">Apex Solar and Construction</p>
        <h1>Accessibility Statement</h1>
        <p className="legal-page__effective">
          Last reviewed: <time dateTime="2026-07-16">July 16, 2026</time>
        </p>

        <p>
          Apex Solar and Construction is committed to making our website
          usable by everyone, including people who use assistive technology
          such as screen readers, keyboard navigation, or voice recognition
          software. We aim to meet the Web Content Accessibility Guidelines
          (WCAG) 2.1 Level AA and continue to review and improve
          accessibility as our Site evolves.
        </p>

        <p>
          If you experience any difficulty accessing content on this Site or
          have suggestions for improvement, please contact us at{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>{' '}
          and we will work to address it promptly.
        </p>
      </div>
    </main>
  );
}
