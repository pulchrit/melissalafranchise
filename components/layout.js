import classnames from 'classnames';
import { bodyFont } from '../utils/fonts';
import styles from '../styles/layout.module.scss';
import Footer from './footer';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <div className={classnames(bodyFont.className, styles.wrapper)}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
