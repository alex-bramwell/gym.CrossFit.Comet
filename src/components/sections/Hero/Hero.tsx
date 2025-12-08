import { useState } from 'react';
import { Button, Section, Container } from '../../common';
import { TrialModal } from '../../TrialModal';
import styles from './Hero.module.scss';

const Hero = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <Section spacing="xlarge" background="dark" className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome to CrossFit Comet
          </h1>
          <p className={styles.subtitle}>
            Where strength meets community. Transform your fitness journey with expert coaching,
            world-class programming, and a supportive atmosphere.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" size="large" onClick={() => setIsTrialModalOpen(true)}>
              Book Free Trial
            </Button>
            <Button variant="outline" size="large" as="a" href="/schedule">
              View Schedule
            </Button>
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>All Fitness Levels</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Expert Coaches</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </Container>

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </Section>
  );
};

export default Hero;
