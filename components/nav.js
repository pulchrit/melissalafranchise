import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import classnames from 'classnames';
import { highlightFont } from '../utils/fonts';

import styles from '../styles/nav.module.scss';

// Create Link as custom component using next Link.
// https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component
const Link = React.forwardRef(({ onClick, href, ...props }, ref) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    // <NextLink className={styles.navButton} href={href} passHref>
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        ref={ref}
        className={styles.NavigationMenuLink}
        active={isActive}
        onClick={onClick}
        {...props}
      />
    </NextLink>
  );
});

Link.displayName = 'Link';

export default function Nav() {
  return (
    <div className={styles.wrapper}>
      <NextLink className={styles.headerLink} href="/">
        <h1 className={classnames(highlightFont.className, styles.header)}>
          melissa lafranchise
        </h1>
      </NextLink>

      <NavigationMenu.Root>
        <NavigationMenu.List className={styles.NavigationMenuList}>
          <NavigationMenu.Item>
            <Link href="/experience">experience</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/portfolio">portfolio</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
