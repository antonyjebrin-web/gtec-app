import styles from './CourseCardSkeleton.module.css';

export function CourseCardSkeleton({ count = 9 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className={styles.card} aria-hidden="true">
          <div className={styles.topRow}>
            <div className={styles.icon} />
            <div className={styles.title} />
          </div>
          <div className={styles.lines}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.lineShort} />
          </div>
          <div className={styles.footer}>
            <div className={styles.badge} />
            <div className={styles.button} />
          </div>
        </div>
      ))}
    </>
  );
}

