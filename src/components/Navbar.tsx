import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          CrossFit Comet
        </Link>

        {/* Hamburger Button */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/coaches" onClick={closeMenu}>Coaches</a>
          <a href="/wod" onClick={closeMenu}>WOD</a>
          <Link to="/schedule" onClick={closeMenu}>Schedule</Link>
        </div>

        {/* Action Buttons */}
        <div className={`${styles.actions} ${isMenuOpen ? styles.actionsOpen : ''}`}>
          <button onClick={closeMenu}>Sign In</button>
          <button onClick={closeMenu}>Join</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
