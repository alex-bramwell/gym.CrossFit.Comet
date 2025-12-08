import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { TrialModal } from './TrialModal';
import { AuthModal } from './AuthModal';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openTrialModal = () => {
    setIsTrialModalOpen(true);
    closeMenu();
  };

  const closeTrialModal = () => {
    setIsTrialModalOpen(false);
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
          <Link to="/schedule" onClick={closeMenu}>Schedule</Link>
          <a href="/#wod" className={styles.wodLink} onClick={closeMenu}>Today's WOD</a>
        </div>

        {/* Action Buttons */}
        <div className={`${styles.actions} ${isMenuOpen ? styles.actionsOpen : ''}`}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className={styles.dashboardLink} onClick={closeMenu}>
                Dashboard
              </Link>
              <span className={styles.userName}>{user?.name}</span>
            </>
          ) : (
            <>
              <button onClick={openAuthModal}>Sign In</button>
              <button onClick={openTrialModal}>Join</button>
            </>
          )}
        </div>
      </nav>

      <TrialModal isOpen={isTrialModalOpen} onClose={closeTrialModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialMode="login" />
    </div>
  );
};

export default Navbar;
