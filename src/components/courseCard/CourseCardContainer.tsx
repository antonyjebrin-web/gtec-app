import type { Course } from '../../api/courseTypes';
import { CourseCard } from './CourseCard';
import styles from './CourseCardContainer.module.css';

export function CourseCardContainer({
  courses,
  activeCourseId,
  onCta,
}: {
  courses: Course[];
  activeCourseId: string | null;
  onCta: (course: Course) => void;
}) {
  return (
    <div className={styles.grid} role="list" aria-label="Course cards">
      {courses.map((course) => (
        <div key={course.id} role="listitem" className={styles.item}>
          <CourseCard course={course} isActive={course.id === activeCourseId} onCta={onCta} />
        </div>
      ))}
    </div>
  );
}

