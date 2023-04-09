import Head from 'next/head';
import Title from '../components/title';
import PortfolioItem from '../components/portfolioItem';
import { portfolioData } from '../constants/constants';

import styles from '../styles/portfolio.module.scss';

const portfolioItems = portfolioData.map(({ id, ...props }) => (
  <PortfolioItem key={id} {...props} />
));

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Melissa Lafranchise</title>
      </Head>
      <section>
        <Title text="portfolio" />
        <p>View all experience as a timeline or filter by type.</p>
        <div className={styles.wrapper}>{portfolioItems}</div>
      </section>
    </>
  );
}
