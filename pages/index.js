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
          I am a full stack web developer interested in using technology for the
          good of the world. I enjoy being part of a team that understands top
          performance comes from an environment where developers are encouraged
          and enabled to learn. In addition to my current web development
          experience, I also have 14 years of marketing communications and
          project management experience and the knowledge gained from a Masters
          of Library and Information Science with a focus on information
          organization. I am diligent, reliable, organized, and want to help.
        </p>
        <Subtitle text="skills" />
        <p className={styles.skill}>
          <span
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Front End:
          </span>{' '}
          <span>
            Javascript, React, Next.js, React Query, React Hook Form, Redux
            Toolkit, Typescript, Sass, Vue, Nuxt
          </span>
        </p>
        <p className={styles.skill}>
          <span
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Back End:
          </span>{' '}
          <span>Node.js, Express, MySQL, REST APIs, MSW</span>
        </p>
        <p className={styles.skill}>
          <span
            className={classnames(
              highlightFont.className,
              utilStyles.highlightFont
            )}
          >
            Related:
          </span>{' '}
          <span>
            UI/UX design, agile and waterfall project management, marketing
            communications, budget, and business planning
          </span>
        </p>
        <Subtitle text="contact" />
        {contacts}
      </section>
    </div>
  );
}
