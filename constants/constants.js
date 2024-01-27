const ENDASH = String.fromCharCode(8211);

const PIPE = String.fromCharCode(124);

export const contactData = [
  {
    id: 'contact-1',
    href: 'mailto:pulchrit@gmail.com',
    text: 'Email',
  },
  {
    id: 'contact-2',
    href: 'https://www.linkedin.com/in/melissa-lafranchise/',
    text: 'LinkedIn',
  },
  {
    id: 'contact-3',
    href: 'https://github.com/pulchrit',
    text: 'GitHub',
  },
];

export const experienceData = [
  {
    id: 'job-1',
    time: `Dec 2019${ENDASH}present`,
    title: 'Software Developer II',
    organization: `Institute for Health Metrics and Evaluation (IHME) ${PIPE} Seattle, WA`,
    type: 'employment',
    accomplishments: [
      {
        id: 'ihme-1',
        text: 'Create, maintain, and improve full stack data visualizations based on research performed by IHME.',
      },
      {
        id: 'ihme-2',
        text: 'Spearheading the ongoing initiative to increase the accessibility of IHME visualizations.',
      },
      {
        id: 'ihme-3',
        text: 'Maintain and improve front and backend codebases using Javascript, React, and Node.',
      },
      {
        id: 'ihme-4',
        text: 'Recipient of the 2023 IHME Innovator of the Year Award for work on accessibility in data visualization tools.',
      },
    ],
  },
  {
    id: 'job-2',
    time: '2019',
    title: 'Student, Full Stack Web Development Program',
    organization: `Bloc/Thinkful ${PIPE} Remote`,
    type: 'education',
    accomplishments: [
      {
        id: 'bloc-1',
        text: 'Gained solid understanding of web development and accessibility best practices.',
      },
      {
        id: 'bloc-2',
        text: 'Applied these skills to build mobile-first responsive web sites and apps using HTML, CSS, React, Node.js, and PostgreSQL.',
      },
    ],
  },
  {
    id: 'job-3',
    time: `2014${ENDASH}2019`,
    title: 'Caregiver',
    organization: '',
    type: 'other',
    accomplishments: [
      {
        id: 'care-1',
        text: 'Gave birth to twins in May 2014.',
      },
      {
        id: 'care-2',
        text: 'Worked as the primary caregiver, physical therapist, and teacher for two amazing humans.',
      },
      {
        id: 'care-3',
        text: 'Researched child physical and emotional development with emphasis on children recovering from TBI.',
      },
      {
        id: 'care-4',
        text: 'Researched and applied fundamentals of Montessori preschool education.',
      },
    ],
  },
  {
    id: 'job-4',
    time: `Aug 2013${ENDASH}May 2014`,
    title: 'Student Research Asst.',
    organization: `School of Library & Information Science, SJSU ${PIPE} Remote`,
    type: 'employment',
    accomplishments: [
      {
        id: 'research-1',
        text: 'Maintained and enhanced internship web pages and edited and wrote content for internship blog.',
      },
      {
        id: 'research-2',
        text: 'Created and distributed student surveys; compiled results for review by program director.',
      },
      {
        id: 'research-3',
        text: 'Managed small virtual events during which organizations presented their internships to students.',
      },
      {
        id: 'research-4',
        text: 'Crafted email campaigns to alert students to internship opportunities, events, and deadlines.',
      },
    ],
  },
  {
    id: 'job-5',
    time: `Sep 2012${ENDASH}May 2014`,
    title: 'Student, Master of Library & Information Science',
    organization: `School of Library & Information Science, SJSU ${PIPE} Remote`,
    type: 'education',
    accomplishments: [
      {
        id: 'mlis-1',
        text: 'GPA: 3.97, Theodore Calvin Pease Award, SJSU Nominee, 2013',
      },
      {
        id: 'mlis-2',
        text: 'Gained an understanding of information organization, web usability, design, and development.',
      },
      {
        id: 'mlis-3',
        text: 'Learned that the need for a way to organize the world—thereby making knowledge accessible—is fundamental to humans.',
      },
      {
        id: 'mlis-4',
        text: 'Learned that it is by understanding particular users that LIS professionals can employ effective organizational schemes that enable easy access to needed information.',
      },
    ],
  },
  {
    id: 'job-6',
    time: `Dec 2009${ENDASH}Oct 2012`,
    title: 'Project Manager, Marketing Communications',
    organization: `ResMed ${PIPE} San Diego, CA`,
    type: 'employment',
    accomplishments: [
      {
        id: 'resmed-1',
        text: 'Managed expectations as liaison between client department and internal creative teams.',
      },
      {
        id: 'resmed-2',
        text: 'Defined project objectives and deliverables. Created clear and actionable project plans.',
      },
      {
        id: 'resmed-3',
        text: 'Engaged creative team and client departments in productive discussions to resolve challenges.',
      },
      {
        id: 'resmed-4',
        text: 'Tracked progress of materials production ensuring consistency with stated objectives.',
      },
    ],
  },
  {
    id: 'job-7',
    time: `Oct 2006${ENDASH}Dec 2009`,
    title: 'Marketing Communications Manager',
    organization: `Eagle Roofing Products ${PIPE} Rialto, CA/Hybrid`,
    type: 'employment',
    accomplishments: [
      {
        id: 'eagle-1',
        text: 'Delivered strategic initiatives despite challenges that cut the marketing budget from $4M to $750K.',
      },
      {
        id: 'eagle-2',
        text: 'Revitalized brand by improving look, message, and by standardizing application across media.',
      },
      {
        id: 'eagle-3',
        text: 'Transformed underperforming website by strategizing and leading website overhaul.',
      },
      {
        id: 'eagle-4',
        text: 'Simultaneously developed sales collateral and website for sister company, Vetericyn, Inc. (2009).',
      },
    ],
  },
  {
    id: 'job-8',
    time: `Apr 2006${ENDASH}Oct 2006`,
    title: 'Channel Marketing Analyst',
    organization: `MonierLifetile ${PIPE} Irvine, CA`,
    type: 'employment',
    accomplishments: [
      {
        id: 'channel-1',
        text: 'Developed channel strategy and regional marketing programs with marketing director and strategy analyst, aligning plans with corporate goals.',
      },
    ],
  },
  {
    id: 'job-9',
    time: `Dec 2003${ENDASH}Apr 2006`,
    title: 'Marketing Communications Specialist',
    organization: `MonierLifetile ${PIPE} Irvine, CA`,
    type: 'employment',
    accomplishments: [
      {
        id: 'specialist-1',
        text: 'Managed art direction and production of print collateral. Directed photography, design, and print vendors. Updated company website. Accountable for $500K portion of marketing budget.',
      },
    ],
  },
  {
    id: 'job-10',
    time: `1998${ENDASH}2003`,
    title: 'Various',
    organization: '',
    type: 'employment',
    accomplishments: [
      {
        id: 'various-1',
        text: `April 2000${ENDASH}March 2003: Marketing Assistant, Design Coordinator, Urban Retail Properties Co. ${PIPE} Chicago, IL`,
      },
      {
        id: 'various-2',
        text: `October 1999${ENDASH}April 2000: Brokers’ Assistant, Equis Corporation  ${PIPE}  Chicago, IL`,
      },
      {
        id: 'various-3',
        text: `February 1998${ENDASH}August 1999: Administrative Assistant, First Bank  ${PIPE}  Ketchikan, AK`,
      },
    ],
  },
  {
    id: 'job-11',
    time: `Sep 1993${ENDASH}Aug 1997`,
    title: 'Student, Bachelor of Art in History of Art',
    organization: `University of Michigan ${PIPE} Ann Arbor, MI`,
    type: 'education',
    accomplishments: [
      {
        id: 'history-1',
        text: 'GPA: 3.33, Regents Alumni Scholar, 1993',
      },
      {
        id: 'history-2',
        text: 'Learned to think critically, research various topics, and write well.',
      },
      {
        id: 'history-3',
        text: 'Gained a wonderful introduction to brilliant and thoughtful artists and their works from around the world.',
      },
      {
        id: 'history-4',
        text: 'Studied the history of art interpretation and analysis.',
      },
    ],
  },
];

export const experienceTypes = ['all', 'employment', 'education', 'other'];

export const portfolioData = [
  {
    id: 'portfolio-5',
    image: {
      src: '/images/pandemic.png',
      alt: 'Screenshot of Pandemic Recovery Survey',
      width: 300,
      height: 200,
      priority: true,
    },
    title: 'Pandemic Recovery Survey',
    code: 'React, Redux Toolkit, React Query, Ant Design, React Scrollama, D3',
    type: 'Professional project',
    links: [
      {
        text: 'Live',
        href: 'https://vizhub.healthdata.org/pandemic-recovery-survey/',
      },
    ],
  },
  {
    id: 'portfolio-1',
    image: {
      src: '/images/melissalafranchise.png',
      alt: 'Screenshot of this site',
      width: 300,
      height: 200,
      priority: false,
    },
    title: 'melissalafranchise.com',
    code: 'React, Next.js, Radix UI',
    type: 'Personal project',
    links: [
      {
        text: 'GitHub',
        href: 'https://github.com/pulchrit/melissalafranchise',
      },
    ],
  },
  {
    id: 'portfolio-2',
    image: {
      src: '/images/WHO.png',
      alt: 'Screenshot of WHO Rehabilitation Need Estimator',
      width: 300,
      height: 200,
      priority: false,
    },
    title: 'WHO Rehabilitation Need Estimator',
    code: 'React, Redux, React Query, Ant Design, IHME UI',
    type: 'Professional project',
    links: [
      {
        text: 'Live',
        href: 'https://vizhub.healthdata.org/rehabilitation/',
      },
    ],
  },
  {
    id: 'portfolio-3',
    image: {
      src: '/images/books.png',
      alt: 'Screenshot of More Books, Please',
      width: 300,
      height: 200,
      priority: false,
    },
    title: 'More Books, Please',
    code: 'React, React Router',
    type: 'Student project',
    links: [
      {
        text: 'GitHub',
        href: 'https://github.com/pulchrit/more-books-please',
      },
      {
        text: 'Live',
        href: 'https://pulchrit.github.io/more-books-please/',
      },
    ],
  },
  {
    id: 'portfolio-4',
    image: {
      src: '/images/poetry.png',
      alt: 'Screenshot of Poems, Computed',
      width: 300,
      height: 200,
      priority: false,
    },
    title: 'Poems, Computed',
    code: 'HTML, CSS, JS, jQuery, HighCharts',
    type: 'Student project',
    links: [
      {
        text: 'GitHub',
        href: 'https://github.com/pulchrit/poetry-count-app',
      },
      {
        text: 'Live',
        href: 'https://pulchrit.github.io/poetry-count-app/',
      },
    ],
  },
];
