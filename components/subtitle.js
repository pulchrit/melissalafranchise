import classnames from 'classnames';

import { subHeadFont } from '../utils/fonts';
import utilStyles from '../styles/utilStyles.module.scss';

export default function Subtitle({ text }) {
  return (
    <h3 className={classnames(subHeadFont.className, utilStyles.subhead)}>
      {text}
    </h3>
  );
}
