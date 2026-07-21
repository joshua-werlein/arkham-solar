import React from 'react';
import Seo from '../../components/Seo';
import './LegalPage.css';
import { SITE } from "../../config/site";

export default function TermsOfService() {
  return (
    <main className="legal-page" id="main-content">
      <Seo
        title="Terms of Service | Apex Solar and Construction"
        description="Terms governing use of the Apex Solar and Construction website, including how online quote estimates relate to final signed agreements."
        path="/terms"
      />
      <div className="legal-page__inner">
        <p className="legal-page__eyebrow">Apex Solar and Construction</p>
        <h1>Terms of Service</h1>
        <p className="legal-page__effective">
          Effective date: <time dateTime="2026-07-16">July 16, 2026</time>
        </p>

        <p>
          Welcome to the Apex Solar and Construction website (the
          &ldquo;Site&rdquo;), operated by Apex Solar and Construction,
          serving Buffalo County and the Chippewa Valley region of Wisconsin.
          By using this Site, you agree to these Terms of Service.
        </p>

        <h2>Use of the Site</h2>
        <p>
          This Site provides information about our solar installation and
          general contracting services and allows visitors to request project
          quotes. You agree to use the Site only for lawful purposes and not
          to misuse it (e.g., attempting to disrupt the Site, submitting
          false information, or scraping content without permission).
        </p>

        <h2>Quotes Are Estimates, Not Contracts</h2>
        <p>
          Any quote, estimate, or pricing information generated through our
          Site&rsquo;s quote request tool is preliminary and for
          informational purposes only. It does not constitute a binding offer
          or contract. A final scope of work, pricing, and timeline will only
          be established through a signed written agreement between you and
          Apex Solar and Construction following an in-person or phone
          consultation and site assessment.
        </p>

        <h2>No Guarantee of Accuracy</h2>
        <p>
          We make reasonable efforts to keep information on this Site
          accurate and current, but we do not guarantee that all content
          &mdash; including project photos, service descriptions, or pricing
          information &mdash; is complete, current, or error-free. Photos of
          past projects are representative examples and do not guarantee
          identical results for future projects.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this Site &mdash; including text, photos, logos, and
          design elements &mdash; is owned by Apex Solar and Construction /
          Arkham Enterprises or used with permission, and may not be copied,
          reproduced, or distributed without our written consent.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This Site may link to third-party platforms, including our Facebook
          Page and Google Business Profile. We are not responsible for the
          content or practices of those third-party platforms.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Apex Solar and Construction
          is not liable for any indirect, incidental, or consequential
          damages arising from your use of this Site. This Site and its
          content are provided &ldquo;as is&rdquo; without warranties of any
          kind. This section does not limit any liability related to work
          actually performed under a signed service agreement, which is
          governed by that agreement&rsquo;s own terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Wisconsin,
          without regard to conflict-of-law principles. Any disputes arising
          from use of this Site will be resolved in the state or federal
          courts located in Wisconsin.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. The &ldquo;Effective
          date&rdquo; above will reflect the most recent revision. Continued
          use of the Site after changes means you accept the updated Terms.
        </p>

        <h2>Contact Us</h2>
        <address>
          Apex Solar and Construction
          <br />
          Serving Buffalo County and the Chippewa Valley region
          <br />
          Email:{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </address>
      </div>
    </main>
  );
}
