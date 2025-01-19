import styles from '../styles/footer.module.scss';

const copyright = String.fromCharCode(169);

export default function Footer() {
  return (
    <footer
      className={styles.wrapper}
    >{`${copyright} 2024 Melissa Lafranchise`}</footer>
  );
}
