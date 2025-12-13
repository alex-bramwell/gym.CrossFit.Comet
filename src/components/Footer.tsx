import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <Link to="/">Home</Link>
      <a href="/about">About</a>
      <a href="/coaches">Coaches</a>
      <a href="/wod">WOD</a>
      <Link to="/schedule">Schedule</Link>
    </div>
    <div className={styles.affiliate}>
      <div className={styles.affiliateBadge}>
        CrossFit® Affiliate
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} CrossFit Comet. All rights reserved.
      </div>
      <div className={styles.disclaimer}>
        CrossFit® is a registered trademark of CrossFit, LLC.
      </div>
    </div>
  </footer>
);

export default Footer;
