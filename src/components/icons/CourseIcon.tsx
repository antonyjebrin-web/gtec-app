import type { CourseIconKey } from '../../api/courseTypes';

export function CourseIcon({ iconKey }: { iconKey: CourseIconKey }) {
  switch (iconKey) {
    case 'fullstack':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M7 7h10v10H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M4 10h3M4 14h3M17 10h3M17 14h3" stroke="currentColor" strokeWidth="2" />
          <path d="M10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'tally':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M7 3h10l2 4v14H5V7l2-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 11h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 7h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'cyber':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path
            d="M12 2l8 4v7c0 5-3.6 9-8 9s-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.2l1.8 1.8 3.8-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 12h2M18 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'cadd':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M3 21l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 15l12-12 2 2-12 12-2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M14 4l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'data':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 16v-6M12 16V8M16 16v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path
            d="M9 18c-2.5 0-4-1.5-4-4v-1c0-2.5 1.5-4 4-4h1V6c0-1.7 1.3-3 3-3s3 1.3 3 3v1h1c2.5 0 4 1.5 4 4v1c0 2.5-1.5 4-4 4h-1v1c0 1.7-1.3 3-3 3s-3-1.3-3-3v-1H9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M9.5 12h.01M14.5 12h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 14c1 0 2-1 2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'mern':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path
            d="M7 7l5-3 5 3v10l-5 3-5-3V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 7l5 3 5-3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M9 2c-2 0-4 2-4 4v1c0 2 2 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 2c2 0 4 2 4 4v1c0 2-2 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M9 22c-2 0-4-2-4-4v-1c0-2 2-4 4-4h6c2 0 4 2 4 4v1c0 2-2 4-4 4H9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 16c.8 0 1.5-.7 1.5-1.5S12.8 13 12 13s-1.5.7-1.5 1.5S11.2 16 12 16Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'sap':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M9 3h6l2 4v14H7V7l2-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

