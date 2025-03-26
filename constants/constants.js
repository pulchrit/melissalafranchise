export const ENDASH = String.fromCharCode(8211);

export const EMDASH = String.fromCharCode(8212);

export const PIPE = String.fromCharCode(124);

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
    id: 'job-13',
    time: `Feb 2025${ENDASH}present`,
    title: 'Student',
    organization: `UX Content Collective`,
    type: 'education',
    accomplishments: [
      {
        id: 'ux-4',
        text: 'Learning best practices for UX writing to craft compelling content that inspires users to act.',
      },
      {
        id: 'ux-1',
        text: 'Built skills in user research and testing to make informed content and design decisions and measure impact.',
      },
      {
        id: 'ux-2',
        text: 'Mastered the WCAG guidelines to include accessibility at every stage of content design and writing.',
      },
      {
        id: 'ux-3',
        text: 'Learned to craft compelling microcopy including best practices for buttons, alerts, forms, error and success messages, and empty states.',
      },
    ],
  },
  {
    id: 'job-1',
    time: `Dec 2019${ENDASH}Feb 2025`,
    title: 'Software Developer II',
    organization: `Institute for Health Metrics and Evaluation (IHME) ${PIPE} Seattle, WA`,
    type: 'employment',
    accomplishments: [
      {
        id: 'ihme-1',
        text: 'Created, maintained, and improved full stack data visualizations based on research performed by IHME with Javascript, React, Node, Sass, PHP, and RESTful APIs.',
      },
      {
        id: 'ihme-2',
        text: 'Spearheaded the initiative to increase the accessibility of IHME visualizations.',
      },
      {
        id: 'ihme-4',
        text: 'Recipient of the 2023 IHME Innovator of the Year Award for work on accessibility in data visualization tools.',
      },
      {
        id: 'ihme-5',
        text: 'Created a process for implementing new UX design across 20+ visualization tools as well as implemented that design in a template and test tool based on Figma mockups.',
      },
    ],
  },
  {
    id: 'job-12',
    time: `March 2024`,
    title: 'Student',
    organization: `Google Project Management Certificate ${PIPE} Coursera`,
    type: 'education',
    accomplishments: [
      {
        id: 'google-1',
        text: 'Perfected fundamentals of waterfall and agile project scoping, planning, scheduling, execution, and success measurement.',
      },
      {
        id: 'google-2',
        text: 'Improved understanding of optimal communication planning, strategies, and timing.',
      },
      {
        id: 'google-3',
        text: 'Learned specific techniques for effective documentation and artifact creation.',
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
    id: 'portfolio-7',
    images: [
      {
        id: 'accessible-1',
        src: '/images/Accessibility_Audit.png',
        alt: 'Google presentation slide showing Visual improvements required.',
        width: 300,
        height: 200,
        priority: true,
      },
      {
        id: 'accessible-2',
        src: '/images/Accessibility_Audit_2.png',
        alt: 'Google presentation slide showing Navigation improvements required.',
        width: 300,
        height: 200,
        priority: true,
      },
    ],
    title: 'Accessibility audit',
    code: 'Evaluated sample homepage for accessibility compliance and specified recommendations for improvements. Request access to view.',
    type: `Content design ${PIPE} Student project`,
    href: 'https://docs.google.com/presentation/d/1l7O8D2QsvCJi8FTWhy_3bPGvEZz9lWOPgDf__fW-AoM/edit?usp=drive_link',
    challenge:
      'Perform an accessibility audit on an example site and make recommendations for updates to achieve Web Content Accessibility Guidelines (WCAG) compliance.',
    action:
      'I evaluated the example site using the WAVE accessibility tool and my own understanding of the WCAG guidelines. I used both my experience as a software developer and a fledgling content designer to find issues and suggest fixes.',
    outcome:
      'I shared a presentation that details updates to the site to ensure it’s understandable and usable for all. Making sites accessible makes them easier to use for everyone. This increases the audience size and can lead directly to increases in revenue, positive brand associations, and higher Net Promoter Scores. Making sites accessible is also the right thing to do.',
  },
  {
    id: 'portfolio-6',
    images: [
      {
        id: 'copy-1',
        src: '/images/accessible_copy_edit.png',
        alt: 'Google doc containing accessible web page copy.',
        width: 300,
        height: 200,
        priority: false,
      },
      {
        id: 'copy-2',
        src: '/images/accessible_copy_edit_2.png',
        alt: 'Google doc showing original wall of text.',
        width: 300,
        height: 200,
        priority: false,
      },
    ],
    title: 'Web copy revision',
    code: 'Crafted accessible web copy with a bit of design direction. Request access to view.',
    type: `Content design ${PIPE} Student project`,
    href: 'https://docs.google.com/document/d/1SSZr80VT7wJDY8UW5t5eHBOWC0_UbSO-QaISUPF3R8I/edit?usp=sharing',

    challenge:
      'Take a "wall of text" and turn it into accessible web page content.',
    action: 'I reworked copy per web content best practices.',
    outcome:
      'This was a straightforward student project to take wordy and unorganized content and transform it into understandable, interesting, and concise web copy.',
  },
  {
    id: 'portfolio-10',
    images: [
      {
        id: 'fgh-1',
        src: '/images/fgh.png',
        alt: 'Financing Global Health site key findings page.',
        width: 300,
        height: 200,
        priority: false,
      },
      {
        id: 'fgh-2',
        src: '/images/fgh_2.png',
        alt: 'Financing Global Health site spenidng comparisons map.',
        width: 300,
        height: 200,
        priority: false,
      },
    ],
    title: 'Financing Global Health - Website redesign',
    code: 'Defined goals, deliverables, and plan for the redesign of multiple visualization tools. Executed redesign using React and Sass.',
    type: `Web development ${PIPE} Project management ${PIPE} Professional project`,
    href: 'https://vizhub.healthdata.org/fgh/',
    challenge:
      'Lead a two person working group to plan and implement the redesign of multiple Institute for Health Metrics and Evaluation (IHME) visualization websites.',
    action: (
      <>
        <p>
          Working as both a project manager and lead developer, I defined the
          goals, deliverables, and a specific step-by-step plan for the redesign
          project, and executed more than half of the code changes required for
          implementation.
        </p>

        <p>
          The goals were to increase brand consistency, improve usability, and
          increase consistency of style and interaction across multiple and
          varied visualization tools. The deliverables were an expanded style
          guide, a mechanism by which the style and usability updates could be
          made across the varied tools without causing downtime, and the actual
          implementation of the redesign in a live tool.
        </p>
      </>
    ),
    outcome: (
      <>
        <h4>Gather and share feedback</h4>
        <p>
          Working with my fellow developer in the working group, we gathered
          feedback from the rest of the 9 person development team to understand
          what visualization needs weren’t represented in the current version of
          the style guide. We shared these needs with the UX Designer so she
          could update the style guide and create Figma mock-ups.
        </p>
        <h4>Implement with Jira</h4>
        <p>
          For implementing the significant updates to both style and
          functionality, I suggested creating a Jira epic that could be cloned
          into each visualization tool’s Jira project and executed as time
          allowed. I investigated how to set up such an epic with the IT team
          and worked with them to make changes in Jira to allow for this
          functionality. I wrote concise instructions so that any team member
          with the proper permissions could then clone the epic, and shared
          these on the internal wiki. The epic consisted of tickets with clear
          and actionable style and functionality changes. Each ticket’s work
          could be executed independently of the others without causing downtime
          for the tool.
        </p>
        <h4>Create a model tool for reference</h4>
        <p>
          My fellow developer and I implemented the style and usability changes
          in the Financing Global Health (FGH) visualization tool using React
          and Sass. We were in constant contact with the UX Designer for review
          and questions. The FGH tool was fully redesigned to match overall
          Institute for Health Metrics and Evaluation (IHME) branding and
          usability was greatly improved. It became the model and reference
          point for future rebranding of the many other IHME visualization
          tools.
        </p>
      </>
    ),
  },
  {
    id: 'portfolio-5',
    images: [
      {
        id: 'prs-1',
        src: '/images/pandemic.png',
        alt: 'Pandemic Recovery Survey introduction and key findings.',
        width: 300,
        height: 200,
        priority: true,
      },
      {
        id: 'prs-2',
        src: '/images/prs_2.png',
        alt: 'Pandemic Recovery Survey life satisfaction bar chart.',
        width: 300,
        height: 200,
        priority: true,
      },
    ],
    title: 'Pandemic Recovery Survey - Website creation',
    code: 'Planned and executed a new data visualization tool using React, Redux Toolkit, React Query, Ant Design, and D3. Ensured the tool was accessibile and mobile friendly. Contributed to content design to showcase the data for multiple target audiences.',
    type: `Web development ${PIPE} Content Design ${PIPE} Professional project`,
    href: 'https://vizhub.healthdata.org/pandemic-recovery-survey/',
    challenge:
      'As lead developer working under the guidance of a senior developer and project manager, create a new visualization tool for a research team that showcased their data on the effects of the COVID-19 pandemic.',
    action: (
      <>
        <p>
          The research team preferred a single page visualization tool with bar
          charts to show the results of the survey. Each chart would show the
          results of a single survey question. I suggested adding a scatter
          chart to show how various pandemic effects compared to each other, and
          this idea was championed by the project manager and accepted by the
          research team. My project manager and I also proposed including a
          concise introduction of and key findings from the analysis to reach
          target audiences who are not data experts.
        </p>
        <p>
          From the development side, the project manager and I outlined 3 goals.
          We wanted the visualization to be simple and easy to understand, to be
          as accessible as possible, and to be as mobile friendly as possible.
        </p>
         <p>
          Wrote the back and frontend code using Node, React, D3, multiple React
          packages, and Sass. Refactored and improved code performance as 
          recommended by the senior developer.
        </p>
      </>
    ),
    outcome: 
      `With guidance from the senior developer, I realized these goals using
      React, React packages, and Sass. At the time of its launch, it was one
      of the most accessible, mobile friendly, and easy to interpret
      visualization tools. We told a story with the data that gave
      government health monitors in 21 countries a strong indication of how
      their people were recovering from the pandemic.`,
  },
  {
    id: 'portfolio-2',
    images: [
      {
        id: 'who-1',
        src: '/images/WHO.png',
        alt: 'WHO Rehabilitation Need Estimator key findings.',
        width: 300,
        height: 200,
        priority: false,
      },
      {
        id: 'who-2',
        src: '/images/who_2.png',
        alt: 'WHO Rehabilitation Need Estimator conditions bar chart.',
        width: 300,
        height: 200,
        priority: false,
      },
    ],
    title: 'WHO Rehabilitation Need Estimator - Website creation',
    code: 'Created a new data visualization tool using React, Redux, React Query, Ant Design, and IHME UI. Contributed to content design by crafting the key findings view to reach a valuable target audience.',
    type: `Web development ${PIPE} Content Design ${PIPE} Professional project`,
    href: 'https://vizhub.healthdata.org/rehabilitation/',
    challenge:
      'As a new developer working under the guidance of a senior developer, create a new visualization tool that shared the rehabilitation needs of the global population for an Insitute for Health Metrcis and Evaluation (IHME) research team and the World Health Organization (WHO).',
    action: (
      <>
        <p>
          The research team had a specific set of visualizations they wanted included. I suggested adding a key findings page to reach policy makers${EMDASH}a target audience who, because they were not data experts, were historically neglected in IHME visualizations. I created a simple mock-up of my idea and shared it with the rest of the visualization team. Some members instantly understood the value, others took some convincing. Ultimately, the research team accepted it as a compelling way to share their research findings.
        </p>
        <p>
          Wrote the back and frontend code using Node, React, D3, multiple React
          packages, and Sass. Refactored and improved code performance as 
          recommended by the senior developer.
        </p>
      </>
    ),
    outcome:
      'The key findings page highlighted important research results, captured visitors’ attention, and made the visualization accessible to a wider audience. The idea of a key findings page was added to the visualization team’s set of ways to present data.',
  },
];
