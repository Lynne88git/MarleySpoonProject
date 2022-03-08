import React, { FC } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
  <div className={styles.Layout}>
    Layout Component
  </div>
);

export default Layout;
