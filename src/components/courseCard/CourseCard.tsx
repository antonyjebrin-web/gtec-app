import React, { useCallback, useMemo, useRef } from 'react';
import type { Course } from '../../api/courseTypes';
import { CourseIcon } from '../icons/CourseIcon';
import styles from './CourseCard.module.css';

type CourseCardProps = {
  course: Course;
  isActive: boolean;
  onCta: (course: Course) => void;
};

export function CourseCard({ course, isActive, onCta }: CourseCardProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const accentStyle = useMemo(
    () =>
      ({
        ['--accent' as any]: course.theme.accent,
        ['--accent2' as any]: course.theme.accent2,
      }) as React.CSSProperties,
    [course.theme.accent, course.theme.accent2],
  );

  const setTilt = useCallback((rx: number, ry: number) => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === 'touch') return;

      const el = stageRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const px = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const py = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);

      // Map to degrees: -10..10-ish
      const ry = (px - 0.5) * 16;
      const rx = -(py - 0.5) * 12;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setTilt(rx, ry));
    },
    [setTilt],
  );

  const onPointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setTilt(0, 0);
  }, [setTilt]);

  const onActivate = useCallback(() => onCta(course), [onCta, course]);
  const ctaVariants = ['iconFill', 'iconEnter', 'iconExpand', 'iconCollapse', 'iconRotate'] as const;
  const variantIndex = Array.from(course.id).reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % ctaVariants.length;
  const ctaVariantClass = styles[ctaVariants[variantIndex]];

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      style={accentStyle}
      data-active={isActive ? 'true' : 'false'}
      role="button"
      tabIndex={0}
      aria-label={`${course.name} course`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate();
        }
      }}
    >
      <div className={styles.card} aria-hidden="true">
        <div className={styles.inner}>
          <div className={styles.front}>
            <div className={styles.top}>
              <div className={styles.iconWrap} aria-hidden="true">
                <CourseIcon iconKey={course.iconKey} />
              </div>
              <h3 className={styles.name}>{course.name}</h3>
              <p className={styles.desc}>{course.description}</p>
            </div>

            <div className={styles.subtle}>
              <div className={styles.metaRow}>
                <span className={styles.durationBadge}>
                  <span aria-hidden="true">⏱</span>
                  {course.duration}
                </span>
              </div>
              <button
                type="button"
                className={`${styles.cta} ${ctaVariantClass}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onActivate();
                }}
              >
                {course.ctaLabel}
              </button>
            </div>
          </div>

          <div className={styles.back}>
            <div className={styles.subtle}>
              <div className={styles.top}>
                <h3 className={styles.backTitle}>{course.backTitle}</h3>
                <p className={styles.backDesc}>{course.backDescription}</p>
              </div>
              <div className={styles.badgeRow} aria-hidden="true">
                <span className={styles.chip}>Instructor-led</span>
                <span className={styles.chip}>Project-based</span>
              </div>
              <button
                type="button"
                className={`${styles.cta} ${ctaVariantClass}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onActivate();
                }}
              >
                {course.ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

