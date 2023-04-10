import { useMemo } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import { highlightFont } from '../utils/fonts';
import styles from '../styles/portfolioItem.module.scss';
import utilStyles from '../styles/utilStyles.module.scss';

export default function PortfolioItem({ image, title, code, type, links }) {
  const { src, alt, width, height, priority } = image;
  const anchorHref = useMemo(
    () =>
      title === 'melissalafranchise.com'
        ? '/'
        : links.find(({ text }) => text === 'Live').href,

    [links, title]
  );

  const linkItems = useMemo(
    () =>
      links.map(({ text, href }) => (
        <a
          key={href}
          className={styles.links}
          href={href}
          target="_blank"
          rel="noopener"
        >
          {text}
        </a>
      )),
    [links]
  );

  return (
    <div className={styles.wrapper}>
      <a href={anchorHref} target="_blank" rel="noopener">
        <Image
          alt={alt}
          className={styles.screenshot}
          height={height}
          priority={priority}
          src={src}
          width={width}
        />
      </a>
      <p
        className={classnames(
          highlightFont.className,
          utilStyles.highlightFont,
          styles.text
        )}
      >
        {title}
      </p>
      <p className={styles.text}>{code}</p>
      <p>{type}</p>
      <div>{linkItems}</div>
    </div>
  );
}
