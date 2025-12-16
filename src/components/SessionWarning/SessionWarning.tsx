import React from 'react';
import { Modal, Button } from '../common';
import styles from './SessionWarning.module.scss';

interface SessionWarningProps {
  isOpen: boolean;
  remainingTime: string;
  onExtend: () => void;
  onLogout: () => void;
}

const SessionWarning: React.FC<SessionWarningProps> = ({
  isOpen,
  remainingTime,
  onExtend,
  onLogout
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onExtend}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>

        <h2 className={styles.title}>Session Expiring Soon</h2>
        <p className={styles.subtitle}>
          Your session will expire in <span className={styles.time}>{remainingTime}</span> due to inactivity.
        </p>
        <p className={styles.message}>
          Would you like to extend your session?
        </p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            size="large"
            fullWidth
            onClick={onExtend}
          >
            Extend Session
          </Button>
          <Button
            variant="outline"
            size="large"
            fullWidth
            onClick={onLogout}
          >
            Logout Now
          </Button>
        </div>

        <div className={styles.securityNote}>
          <svg className={styles.noteIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>This is a security measure to protect your account when you're away.</span>
        </div>
      </div>
    </Modal>
  );
};

export default SessionWarning;
