import { useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import { CourseShowcase } from './features/courses/CourseShowcase';
import SplashCursor from './components/SplashCursor';
import Silk from './components/Silk';
import ScrollFloat from './components/ScrollFloat';

// #region agent log
const debugLog = (runId: string, hypothesisId: string, location: string, message: string, data: Record<string, unknown>) => {
  const payload = {
    sessionId: '0486f5',
    runId,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  };

  fetch('http://127.0.0.1:7290/ingest/1ab03694-5888-4324-ac17-e07d205b1058', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '0486f5' },
    body: JSON.stringify(payload),
  }).catch(() => {});

  // Fallback path for environments where CORS/preflight blocks the primary request.
  fetch('http://127.0.0.1:7290/ingest/1ab03694-5888-4324-ac17-e07d205b1058', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  }).catch(() => {});
};
// #endregion



export default function App() {
  const [route, setRoute] = useState<string>(() => window.location.hash || '#/');
  const galleryImages = useMemo(
    () => [
      'Gemini_Generated_Image_15zbeh15zbeh15zb.png',
      'Gemini_Generated_Image_64utf564utf564ut.png',
      'Gemini_Generated_Image_lghswmlghswmlghs.png',
      'Gemini_Generated_Image_m9nh8im9nh8im9nh.png',
      'IMG_20250116_123812.jpg',
      'IMG_20250116_123900.jpg',
      'IMG_20250116_123924.jpg',
      'IMG_20250116_124048.jpg',
      'IMG_20250116_124158.jpg',
      'IMG_20250116_124235.jpg',
      'IMG_20250116_124258.jpg',
    ],
    [],
  );

  useEffect(() => {
    // #region agent log
    debugLog('pre-fix', 'H1', 'src/App.tsx:mount', 'App mounted with current location', {
      pathname: window.location.pathname,
      hash: window.location.hash,
      href: window.location.href,
    });
    // #endregion
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash || '#/');
      // #region agent log
      debugLog('pre-fix', 'H3', 'src/App.tsx:hashchange', 'Hash changed after nav interaction', {
        pathname: window.location.pathname,
        hash: window.location.hash,
      });
      // #endregion
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // #region agent log
    debugLog('pre-fix', 'H4', 'src/App.tsx:route-state', 'Route state updated', {
      route,
      galleryImageCount: galleryImages.length,
    });
    // #endregion
  }, [route, galleryImages.length]);

  const isGallery = route === '#/gallery';

  return (

    <>

      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />

      <SplashCursor />

      <div className={styles.page}>
        <header className={styles.header}>
          <div className="gtec-container">
            <div className={styles.headerInner}>
              <div className={styles.brand}>
                <img
                  className={styles.brandLogo}
                  src="/gtec-logo.png"
                  alt="G-TEC"
                  width={64}
                  height={64}
                />
                <h1 className={styles.title}>G-TEC Course Showcase</h1>
              </div>
              <div className={styles.rightTop}>
                <nav className={styles.nav} aria-label="Top navigation">
                  <a href="#/">Home</a>
                  <a href="#">Services</a>
                  <a href="#">Internship</a>
                  <a
                    href="#/gallery"
                    onClick={() => {
                      // #region agent log
                      debugLog('pre-fix', 'H2', 'src/App.tsx:gallery-link', 'Gallery link clicked', {
                        hrefAttr: '#/gallery',
                        pathnameBeforeClick: window.location.pathname,
                        hashBeforeClick: window.location.hash,
                      });
                      // #endregion
                    }}
                  >
                    Gallery
                  </a>
                  <a href="#">Career</a>
                  <a href="#/contact">Contact Us</a>
                </nav>
              </div>
            </div>
            {!isGallery ? (
              <p className={styles.subtitle}>
                Explore career-focused programs with a responsive 3D course card experience.
              </p>
            ) : null}
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <div className="gtec-container">
              {!isGallery ? (
                <>
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
                            <div className={styles.heroOverlay} />
                            <div className={styles.heroSweep} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CourseShowcase />

                 <div className={styles.contactForm + " " + styles.electricBorder}>
  {/* Glow layers */}
  <div className={styles.ebLayers}>
    <div className={styles.ebGlow1}></div>
    <div className={styles.ebGlow2}></div>
    <div className={styles.ebBackgroundGlow}></div>
  </div>

  {/* Form content */}
  <div className={styles.ebContent}>
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>NAME:</label>
        <input className={styles.formInput} type="text" placeholder='Enter ur name here'/>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>EMAIL:</label>
        <input className={styles.formInput} type="email" placeholder='Enter ur EMAIL here'/>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>SELECT COURSE:</label>
        <select className={styles.formSelect}>
          <option>Select a course</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Data Science</option>
          <option>DevOps</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>PHONE NUMBER:</label>
        <input className={styles.formInput} type="tel" placeholder='Enter ur phone number here'/>
      </div>

      <button className={styles.formButton}>SUBMIT</button>
    </form>
  </div>
</div>
                </>
              ) : (
                <div className={styles.galleryPage}>
                  <h2 className={styles.galleryTitle}>Our G-TEC Memorys Welcomes U</h2>
                
                  <div className={styles.galleryGrid}>
                    {galleryImages.map((fileName) => (
                      <figure key={fileName} className={styles.galleryCard}>
                        <img
                          src={`/assist/${fileName}`}
                          alt={fileName}
                          className={styles.galleryImage}
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}