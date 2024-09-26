import { useMemo, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Head from 'next/head';
import classnames from 'classnames';
import Title from '../components/title';
import { bodyFont } from '../utils/fonts';
import { groupExperience } from '../utils/filterExperience';
import ExperienceItem from '../components/experienceItem';
import { experienceData, experienceTypes } from '../constants/constants';

import styles from '../styles/experience.module.scss';
import utilStyles from '../styles/utilStyles.module.scss';

const groupedExperience = groupExperience(experienceData);

const triggerContent = experienceTypes.map((type) => (
  <Tabs.Trigger
    key={type}
    className={classnames(
      bodyFont.className,
      utilStyles.button,
      styles.triggerButton
    )}
    value={type}
  >
    {type}
  </Tabs.Trigger>
));

export default function Experience() {
  // Control selected tab.
  const [value, setValue] = useState('all');

  // Render tab content based on selected tab.
  const tabContent = useMemo(() => {
    const data = value === 'all' ? experienceData : groupedExperience[value];
    return (
      <Tabs.Content className={styles.TabsContent} value={value}>
        {data.map(({ id, ...props }) => (
          <ExperienceItem key={id} {...props} />
        ))}
      </Tabs.Content>
    );
  }, [value]);

  return (
    <>
      <Head>
        <title>Experience - Melissa Lafranchise</title>
      </Head>
      <section>
        <Title text="experience" />
        <p>View all experience as a timeline or filter by type.</p>
        <Tabs.Root
          activationMode="manual"
          value={value}
          onValueChange={setValue}
        >
          <Tabs.List
            className={styles.TabsList}
            aria-label="Employment, education, and other experience"
          >
            {triggerContent}
          </Tabs.List>
          {tabContent}
        </Tabs.Root>
      </section>
    </>
  );
}
