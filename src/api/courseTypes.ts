export type CourseIconKey =
  | 'fullstack'
  | 'tally'
  | 'cyber'
  | 'cadd'
  | 'data'
  | 'ai'
  | 'mern'
  | 'python'
  | 'sap';

export type CourseTheme = {
  accent: string; // primary accent
  accent2: string; // secondary accent
  badgeBg: string; // for chips/badges
};

export type Course = {
  id: string;
  name: string;
  description: string;
  duration: string;
  ctaLabel: string;
  iconKey: CourseIconKey;
  theme: CourseTheme;
  backTitle: string;
  backDescription: string;
};

