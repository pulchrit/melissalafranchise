import { forwardRef, useMemo } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import classnames from 'classnames';

import { highlightFont } from '../utils/fonts';
import styles from '../styles/portfolioItem.module.scss';
import utilStyles from '../styles/utilStyles.module.scss';

export default function PortfolioItem({
  images,
  title,
  code,
  type,
  href,
  challenge,
  action,
  outcome,
}) {
  const imageContent = useMemo(() => {
    return images.map(({ src, alt, width, height, priority, id }) => (
      <Image
        key={id}
        alt={alt}
        className={styles.screenshot}
        height={height}
        priority={priority}
        src={src}
        width={width}
      />
    ));
  }, [images]);

  // Accordion setup
  const AccordionTrigger = forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger
          className={styles.AccordionTrigger}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  AccordionTrigger.displayName = 'AccordionTrigger';

  const AccordionContent = forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Content
        className={styles.AccordionContent}
        {...props}
        ref={forwardedRef}
      >
        <div className={styles.AccordionContentText}>{children}</div>
      </Accordion.Content>
    )
  );

  AccordionContent.displayName = 'AccordionContent';

  const accordionContent = useMemo(
    () => (
      <>
        <Accordion.Item className={styles.AccordionItem} value="challenge">
          <AccordionTrigger>Challenge</AccordionTrigger>
          <AccordionContent>{challenge}</AccordionContent>
        </Accordion.Item>
        <Accordion.Item className={styles.AccordionItem} value="action">
          <AccordionTrigger>Action</AccordionTrigger>
          <AccordionContent>{action}</AccordionContent>
        </Accordion.Item>
        <Accordion.Item className={styles.AccordionItem} value="outcome">
          <AccordionTrigger>Outcome</AccordionTrigger>
          <AccordionContent>{outcome}</AccordionContent>
        </Accordion.Item>
      </>
    ),
    [action, challenge, outcome]
  );

  return (
    <div className={styles.wrapper}>
      <a href={href} target="_blank" rel="noopener">
        <h3
          className={classnames(
            highlightFont.className,
            utilStyles.highlightFont,
            styles.text
          )}
        >
          {title}
        </h3>
      </a>
      <p>{type}</p>
      <p className={styles.text}>{code}</p>
      <a
        className={styles.imageWrapper}
        href={href}
        target="_blank"
        rel="noopener"
      >
        {imageContent}
      </a>
      <Accordion.Root
        className={styles.AccordionRoot}
        type="single"
        collapsible
      >
        {accordionContent}
      </Accordion.Root>
    </div>
  );
}
