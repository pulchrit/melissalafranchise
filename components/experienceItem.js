import { useMemo } from 'react';
import classnames from 'classnames';

import styles from '../styles/experienceItem.module.scss';
import { highlightFont } from '../utils/fonts';

export default function ExperienceItem({
  time,
  title,
  organization,
  accomplishments,
}) {
  const accomplishmentsList = useMemo(
    () =>
      accomplishments.map(({ id, text }) => (
        <li className={styles.listItem} key={id}>
          {text}
        </li>
      )),
    [accomplishments]
  );

  return (
    <>
      <h3 className={classnames(styles.wrapper, styles.timeTitle)}>
        <span
          className={classnames(
            highlightFont.className,
            styles.timeOrganization
          )}
        >
          {time}
        </span>
        <span
          className={classnames(
            highlightFont.className,
            styles.timeOrganization
          )}
        >
          {title}
        </span>
      </h3>
      <div className={styles.wrapper}>{organization}</div>
      <ul className={styles.list}>{accomplishmentsList}</ul>
    </>
  );
}
