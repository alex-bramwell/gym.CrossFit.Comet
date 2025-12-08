import { Section, Container, Card, Button } from '../../common';
import { todaysWOD } from '../../../data/wod';
import { stats } from '../../../data/stats';
import styles from './WOD.module.scss';

const WOD = () => {
  const wodTypeLabels = {
    amrap: 'AMRAP',
    fortime: 'For Time',
    emom: 'EMOM',
    strength: 'Strength',
    endurance: 'Endurance',
  };

  return (
    <Section spacing="large" background="surface" id="wod">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Today at CrossFit Comet</h2>
          <p className={styles.subtitle}>
            Join one of our {stats[0].value}{stats[0].suffix} weekly classes with our team of {stats[1].value} certified coaches
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {/* WOD Section */}
          <div className={styles.wodWrapper}>
            <Card variant="elevated" padding="large">
          <div className={styles.wod}>
            <div className={styles.wodHeader}>
              <h3 className={styles.wodTitle}>{todaysWOD.title}</h3>
              <span className={styles.wodType}>{wodTypeLabels[todaysWOD.type]}</span>
            </div>

            <div className={styles.wodDate}>
              {new Date(todaysWOD.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>

            <p className={styles.description}>{todaysWOD.description}</p>

            <div className={styles.movements}>
              {todaysWOD.movements.map((movement, index) => (
                <div key={index} className={styles.movement}>
                  <span className={styles.bullet}>•</span>
                  <span>{movement}</span>
                </div>
              ))}
            </div>

            {todaysWOD.duration && (
              <div className={styles.meta}>
                <span className={styles.metaLabel}>Time Cap:</span>
                <span className={styles.metaValue}>{todaysWOD.duration}</span>
              </div>
            )}

            <div className={styles.footer}>
              <p className={styles.note}>
                Scale as needed. All movements can be modified to match your fitness level.
                Ask your coach for scaling options!
              </p>
            </div>
          </div>
          </Card>
          </div>

          {/* Stats Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.statsCard}>
              <h3 className={styles.sidebarTitle}>Why Train With Us</h3>

              {/* First Stat with Schedule CTA */}
              <div className={styles.statItem}>
                <div className={`${styles.statValue} ${styles.statValueGradient}`}>
                  {stats[0].value}
                  {stats[0].suffix && <span className={styles.suffix}>{stats[0].suffix}</span>}
                </div>
                <div className={styles.statLabel}>{stats[0].label}</div>
              </div>
              <Button variant="outline" as="a" href="/schedule" className={styles.statCta}>
                View Full Schedule
              </Button>

              {/* Second Stat */}
              <div className={styles.statItem}>
                <div className={styles.statValue}>
                  {stats[1].value}
                  {stats[1].suffix && <span className={styles.suffix}>{stats[1].suffix}</span>}
                </div>
                <div className={styles.statLabel}>{stats[1].label}</div>
              </div>

              {/* Learn Our Story CTA at bottom */}
              <Button variant="primary" as="a" href="/about" className={styles.sidebarCta}>
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WOD;
