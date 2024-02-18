import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import '@fortawesome/fontawesome-svg-core/styles.css';

import classnames from 'classnames';
import Head from 'next/head';
import Title from '../components/title';
import Subtitle from '../components/subtitle';
import { contactData } from '../constants/constants';

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
          I’m interested in joining an organization with the mission of doing
          good in the world. I’d enjoy being part of a team that understands top
          performance comes from an environment where team members are
          encouraged and enabled to learn. I bring 4 years of web development
          experience, 14 years of marketing communications and project
          management experience, and the knowledge gained from a Masters of
          Library and Information Science with a focus on information
          organization. I’m diligent, reliable, and want to help.
        </p>
        <Subtitle text="skills" />
        <p className={styles.skill}>
          <span
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Project management:
          </span>{' '}
          <ul>
            <li>Waterfall and agile methodologies</li>
            <li>Scoping and planning</li>
            <li>Risk identification and mitigation</li>
            <li>Effective and appropriate communication</li>
          </ul>
        </p>
        <p className={styles.skill}>
          <span
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Technology:
          </span>{' '}
          <ul>
            <li>Javascript, React, Vue</li>
            <li>Next, Nuxt</li>
            <li>React Query, React Hook Form, Redux Toolkit</li>
            <li>CSS, Sass</li>
            <li>Node, Express</li>
            <li>SQL, REST APIs</li>
          </ul>
        </p>
        <p className={styles.skill}>
          <span
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Communications and Design:
          </span>{' '}
          <ul>
            <li>Marketing communication planning and budgeting</li>
            <li>Process improvement</li>
            <li>UI/UX design</li>
            <li>Collateral design</li>
            <li>Press release and copy writing</li>
          </ul>
        </p>
        <Subtitle text="contact" />
        {contacts}
      </section>
    </div>
  );
}
