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
    <div>
      &copy; {new Date().getFullYear()} CrossFit Comet. All rights reserved.
    </div>
  </footer>
);

export default Footer;
