import React, { useEffect, useMemo, useState } from 'react';
import type { Course } from '../../api/courseTypes';
import { fetchCourses } from '../../api/courses';
import { CourseCardContainer } from '../../components/courseCard/CourseCardContainer';
import { CourseCardSkeleton } from '../../components/courseCard/CourseCardSkeleton';
import styles from './CourseShowcase.module.css';

function formatError(message: string) {
  return message.includes('Unexpected response') ? 'Something went wrong while loading courses.' : message;
}

function CourseDetailsPanel({ course }: { course: Course }) {
  const glowColor = `${course.theme.accent}33`;
  return (
    <div className={styles.panelContent}>
      <div className={styles.panelTitleRow}>
        <div
          className={styles.panelAccent}
          aria-hidden="true"
          style={{ background: course.theme.accent, boxShadow: `0 10px 30px ${glowColor}` }}
        />
        <h2 className={styles.panelTitle}>{course.name}</h2>
      </div>
      <p className={styles.panelDesc}>{course.description}</p>
      <div className={styles.panelMeta}>
        <span className={styles.duration}>{course.duration}</span>
      </div>
      <div className={styles.panelHint}>Tip: Hover a card to flip it. On mobile, tap `Enroll Now` to activate.</div>
    </div>
  );
}

export function CourseShowcase() {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const activeCourse = useMemo(
    () => (courses ? courses.find((c) => c.id === activeCourseId) ?? null : null),
    [courses, activeCourseId],
  );

  const refresh = async (signal?: AbortSignal) => {
    setError(null);
    setLoading(true);

    try {
      const data = await fetchCourses(signal);
      setCourses(data);
      setActiveCourseId((prev) => prev ?? data[0]?.id ?? null);
    } catch (e: any) {
      const message = typeof e?.message === 'string' ? e.message : 'Failed to load courses.';
      setError(formatError(message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    void refresh(controller.signal);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCourseId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleCta = (course: Course) => {
    setActiveCourseId(course.id);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.cards}>
        {loading && (
          <div className={styles.skeletonGrid} aria-label="Loading course cards">
            <CourseCardSkeleton count={9} />
          </div>
        )}

        {!loading && error && (
          <div className={styles.errorBox} role="alert">
            <div className={styles.errorTitle}>Could not load courses</div>
            <p className={styles.errorText}>{error}</p>
            <button
              type="button"
              className={`${styles.retryBtn} ${styles.fxBase} ${styles.iconFill}`}
              onClick={() => {
                void refresh();
              }}
            >
              Retry
            </button>
          </div>
        )}

        {!loading && courses && <CourseCardContainer courses={courses} activeCourseId={activeCourseId} onCta={handleCta} />}
      </div>

      <aside className={styles.panel} aria-live="polite">
        {activeCourse ? (
          <>
            <CourseDetailsPanel course={activeCourse} />
            <div className={styles.panelActions}>
              <button
                type="button"
                className={`${styles.panelClose} ${styles.fxBase} ${styles.iconEnter}`}
                onClick={() => setActiveCourseId(null)}
              >
                Clear selection
              </button>
            </div>
          </>
        ) : (
          <div className={styles.panelEmpty}>
            <div className={styles.panelEmptyTitle}>Select a course</div>
            <div className={styles.panelEmptyText}>Tap the `Enroll Now` button on any course to see details here.</div>
          </div>
        )}
      </aside>
    </div>
  );
}

