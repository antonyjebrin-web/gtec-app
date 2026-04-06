import styles from './App.module.css';
import { ThemeToggle } from './components/theme/ThemeToggle';
import { CourseShowcase } from './features/courses/CourseShowcase';

export default function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="gtec-container">
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <img
                className={styles.brandLogo}
                src="/gtec-logo.png"
                alt="G-TEC"
                width={42}
                height={42}
              />
              <h1 className={styles.title}>G-TEC Course Showcase</h1>
            </div>
            <div className={styles.rightTop}>
              <nav className={styles.nav} aria-label="Top navigation">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Internship</a>
                <a href="#">Gallery</a>
                <a href="#">Career</a>
                <a href="#">About</a>
              </nav>
              <ThemeToggle variant="mini" />
            </div>
          </div>
          <p className={styles.subtitle}>
            Explore career-focused programs with a responsive 3D course card experience.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className="gtec-container">
            <div className={`hero-banner ${styles.hero}`} aria-label="Course showcase banner">
              <div className="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="hero-item">
                      <video
                        className="hero-video lg-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src="/course-hero.mp4" type="video/mp4" />
                      </video>
                      <div className={styles.heroOverlay} aria-hidden="true" />
                      <div className={styles.heroSweep} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CourseShowcase />
            <div className={styles.contactForm}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">
                    NAME:
                  </label>
                  <input
                    className={styles.formInput}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">
                    EMAIL:
                  </label>
                  <input
                    className={styles.formInput}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="course">
                    SELECT COURSE:
                  </label>
                  <select className={styles.formSelect} id="course" name="course">
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="data-science">Data Science</option>
                    <option value="devops">DevOps</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="phone">
                    PHONE NUMBER:
                  </label>
                  <input
                    className={styles.formInput}
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button className={styles.formButton} type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
    





  );
}

