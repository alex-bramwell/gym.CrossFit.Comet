import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './AuthModal';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
    closeMenu();
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoText}>CrossFit Comet</div>
          <div className={styles.logoAffiliate}>Affiliate</div>
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
          <Link
            to="/"
            className={location.pathname === '/' ? styles.activeLink : ''}
            onClick={closeMenu}
          >
            Home
          </Link>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/coaches" onClick={closeMenu}>Coaches</a>
          <Link
            to="/schedule"
            className={location.pathname === '/schedule' ? styles.activeLink : ''}
            onClick={closeMenu}
          >
            Schedule
          </Link>
          <a href="/#wod" className={styles.wodLink} onClick={closeMenu}>Today's WOD</a>

          {/* Action Buttons - shown in mobile menu */}
          <div className={`${styles.actions} ${isMenuOpen ? styles.actionsOpen : ''}`}>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className={`${styles.dashboardLink} ${location.pathname === '/dashboard' ? styles.activeLink : ''}`}
                onClick={closeMenu}
                title="Dashboard"
              >
                <span className={styles.dashboardIcon}>⚡</span>
              </Link>
            ) : (
              <button className={styles.signInButton} onClick={openAuthModal}>Sign In</button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialMode="login" />
    </div>
  );
};

export default Navbar;
