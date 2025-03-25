import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
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
          I’m a versatile communicator with broad experience in fact-based
          marketing communications, project management, customer-focused and
          accessible web development, and UX writing and research. I learn
          quickly to understand users and reach them with compelling and usable
          content. I understand digital communication tools from technical,
          marketing, and content perspectives and am very effective at cross
          team collaboration. I’m highly organized and craft actionable methods
          for completing projects. I’m diligent, reliable, and want to help.
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
            Currently enrolled: UX Content Collective Fundamentals of UX Writing
          </li>
          <li>
            UX Content Collective:{' '}
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1vQfhDNAU24zpRnkughN5fArI4PRj54Ky/view?usp=sharing"
                  target="_blank"
                  rel="noopener"
                >
                  Accessibility for UX Writers & Designers
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GXS8TSOEThFqYMJjj6lwS1flQYyXeqoN/view?usp=sharing"
                  target="_blank"
                  rel="noopener"
                >
                  UX Content Research
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
            </ul>
          </li>
          <li>
            Google Project Management:
            <ul>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/records/ZHD88GLMG28C"
                  target="_blank"
                  rel="noopener"
                >
                  Agile Project Management
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/records/ZZL8CWKK56KU"
                  target="_blank"
                  rel="noopener"
                >
                  Capstone: Applying Project Management in the Real World
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/records/KGWYV6TREQGM"
                  target="_blank"
                  rel="noopener"
                >
                  Project Planning: Putting It All Together
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/records/UA897GDXZJJA"
                  target="_blank"
                  rel="noopener"
                >
                  Project Execution: Running the Project
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/records/TVQ2666HMVNF"
                  target="_blank"
                  rel="noopener"
                >
                  Project Initiation: Starting a Successful Project
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/records/TSCBYB4DLHPH"
                  target="_blank"
                  rel="noopener"
                >
                  Foundations of Project Management
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
            </ul>
          </li>
          <li>
            W3Schools:{' '}
            <ul>
              <li>
                <a
                  href="https://verify.w3schools.com/1P349VPU8T"
                  target="_blank"
                  rel="noopener"
                >
                  Certified PHP Developer
                </a>
                <FontAwesomeIcon
                  className={`${utilStyles.icon} ${utilStyles.iconSuffix}`}
                  icon={faArrowUpRightFromSquare}
                />
              </li>
            </ul>
          </li>
        </ul>
        <Subtitle text="contact" />
        {contacts}
      </section>
    </div>
  );
}
