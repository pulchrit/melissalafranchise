import styles from '../styles/footer.module.scss';

const copyright = String.fromCharCode(169);

export default function Footer() {
  return (
    <div
      className={styles.wrapper}
    >{`${copyright} 2023 Melissa Lafranchise`}</div>
  );
}
