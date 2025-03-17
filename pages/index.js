import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import '@fortawesome/fontawesome-svg-core/styles.css';

import classnames from 'classnames';
import Head from 'next/head';
import Title from '../components/title';
import Subtitle from '../components/subtitle';
import { contactData, ENDASH, PIPE } from '../constants/constants';

import styles from '../styles/home.module.scss';
import { highlightFont } from '../utils/fonts';
import utilStyles from '../styles/utilStyles.module.scss';

const iconLookup = {
  Email: faEnvelope,
  LinkedIn: faLinkedin,
  GitHub: faGithub,
};

const contacts = contactData.map(({ id, href, text }) => (
  <div key={id} className={styles.contactItem}>
    <a href={href} target="_blank" rel="noopener">
      <FontAwesomeIcon className={utilStyles.icon} icon={iconLookup[text]} />
      {text}
    </a>
  </div>
));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Melissa Lafranchise</title>
        <meta
          name="description"
          content="Skills, experience, portfolio, and contact information for Melissa Lafranchise."
        />
      </Head>
      <section>
        <Title text="about" />
        <p>
          I’m interested in doing good in the world. I believe top performance
          comes from an environment where team members are encouraged and
          enabled to learn. I bring 14 years of marketing communications and
          project management experience, 5 years of web development experience,
          and the knowledge gained from a Masters of Library and Information
          Science. I’m diligent, reliable, and want to help.
        </p>
        <Subtitle text="skills" />
        <div className={styles.skill}>
          <h4
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Marketing, Content, and Design:
          </h4>{' '}
          <ul>
            <li>Marketing communication planning and budgeting</li>
            <li>Process improvement</li>
            <li>Accessible content design</li>
            <li>Content research and testing</li>
            <li>UI/UX design</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h4
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Project Management:
          </h4>{' '}
          <ul>
            <li>Waterfall and agile methodologies</li>
            <li>Scoping and planning</li>
            <li>Risk identification and mitigation</li>
            <li>Effective and appropriate communication</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h4
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Technology:
          </h4>{' '}
          <ul>
            <li>Javascript, React, Vue, Drupal</li>
            <li>Next, Nuxt</li>
            <li>React Query, Redux Toolkit</li>
            <li>CSS, Sass</li>
            <li>PHP, Node, Express</li>
            <li>SQL, REST APIs</li>
          </ul>
        </div>
        <Subtitle text="certifications" />
        <ul>
          <li>
            {`Currently completing ${PIPE} UX Content Collective: Fundamentals of UX Writing`}
          </li>
          <li>
            {`1/2025${ENDASH}3/2025 ${PIPE} UX Content Collective: Accessibility for UX Writers & Designers, UX Content Research`}
          </li>
          <li>{`8/2024 ${PIPE} W3Schools Certified PHP Developer`}</li>
          <li>{`2/2024${ENDASH}3/2024 ${PIPE} Google Project Management Certifications`}</li>
        </ul>
        <Subtitle text="contact" />
        {contacts}
      </section>
    </div>
  );
}
