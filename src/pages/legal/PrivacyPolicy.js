import React from 'react';
import Seo from '../../components/Seo';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <main className="legal-page" id="main-content">
      <Seo
        title="Privacy Policy | Apex Solar and Construction"
        description="How Apex Solar and Construction collects, uses, and protects information submitted through our website, including quote requests."
        path="/privacy"
      />
      <div className="legal-page__inner">
        <p className="legal-page__eyebrow">Apex Solar and Construction</p>
        <h1>Privacy Policy</h1>
        <p className="legal-page__effective">
          Effective date: <time dateTime="2026-07-16">July 16, 2026</time>
        </p>

        <p>
          Apex Solar and Construction (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          &ldquo;our&rdquo;), a solar installation and general contracting
          business serving Buffalo County and the greater Chippewa Valley
          region of Wisconsin, operates this website (the
          &ldquo;Site&rdquo;). This Privacy Policy explains what information
          we collect from visitors, how we use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <p>
          <strong>Information you give us directly.</strong> When you submit
          a quote request, contact form, or otherwise reach out to us through
          the Site, we may collect:
        </p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Property/project address</li>
          <li>
            Details about your project (e.g., roof type, project scope,
            timeline, budget range)
          </li>
        </ul>
        <p>
          <strong>Information collected automatically.</strong> Like most
          websites, our Site may automatically log basic technical
          information such as your browser type, device type, and pages
          visited, through standard hosting and analytics tools.
        </p>
        {/* TODO: When Google Analytics, Meta Pixel, or similar tools are
            added, list them here by name — Google and Meta both require
            this disclosure as a condition of using their tools. */}

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your quote request or inquiry</li>
          <li>
            Prepare project estimates and communicate about your project
          </li>
          <li>Improve our Site and services</li>
          <li>Maintain records related to our business operations</li>
        </ul>
        <p>
          We do not sell your personal information to third parties, and we
          do not use it for purposes unrelated to responding to your inquiry
          or providing our services.
        </p>

        <h2>How We Share Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>
            Service providers who help us operate our business (e.g., email
            hosting, scheduling, or customer-management tools), who are only
            permitted to use it to help us serve you
          </li>
          <li>
            Legal authorities, if required by law or to protect our legal
            rights
          </li>
        </ul>
        <p>
          We do not share your information with advertisers or data brokers.
        </p>

        <h2>Third-Party Links and Platforms</h2>
        <p>
          Our Site may link to or reference our Facebook Page and Google
          Business Profile. Those platforms have their own privacy policies,
          which govern any information you share directly with them &mdash;
          this Privacy Policy only covers information collected through this
          Site.
        </p>

        <h2>Your Choices</h2>
        <p>You may:</p>
        <ul>
          <li>Ask us what personal information we have about you</li>
          <li>Ask us to correct or delete your personal information</li>
          <li>Opt out of future communications from us at any time</li>
        </ul>
        <p>
          To make any of these requests, contact us using the information
          below.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain quote request and project information for as long as
          reasonably necessary to respond to your inquiry, complete any
          project you engage us for, and comply with our recordkeeping and
          legal obligations.
        </p>

        <h2>Children&rsquo;s Privacy</h2>
        <p>
          This Site is not directed at children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable steps to protect the information you provide,
          but no method of transmission or storage over the internet is 100%
          secure.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The
          &ldquo;Effective date&rdquo; above will reflect the most recent
          revision.
        </p>

        <h2>Contact Us</h2>
        <address>
          Apex Solar and Construction
          <br />
          Serving Buffalo County and the Chippewa Valley region
          <br />
          Email:{' '}
          <a href="mailto:redacted@example.com">
            redacted@example.com
          </a>
        </address>
      </div>
    </main>
  );
}
