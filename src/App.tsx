import { useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import { CourseShowcase } from './features/courses/CourseShowcase';
import SplashCursor from './components/SplashCursor';
import Silk from './components/Silk';

// #region agent log
const debugLog = (runId: string, hypothesisId: string, location: string, message: string, data: Record<string, unknown>) => {
  const payload = { sessionId: '0486f5', runId, hypothesisId, location, message, data, timestamp: Date.now() };
  fetch('http://127.0.0.1:7290/ingest/1ab03694-5888-4324-ac17-e07d205b1058', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '0486f5' },
    body: JSON.stringify(payload),
  }).catch(() => {});
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
      '2026-01-10.jpg',
      'unnamed.jpg',
      'unnamed (1).jpg'
    ],
    [],
  );

  // Split text into spans for "pressure effect"
  useEffect(() => {
    const title = document.getElementById('title');
    if (!title) return;
    const text = title.innerText;
    title.innerHTML = text.split('').map((char) => `<span>${char}</span>`).join('');
    const spans = title.querySelectorAll('span');

    const handleMouseMove = (e: MouseEvent) => {
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(1, 1.8 - dist / 200);
        span.style.transform = `scale(${scale})`;
        span.style.opacity = `${Math.max(0.6, 1 - dist / 300)}`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isGallery = route === '#/gallery';

  return (
    <>
      <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
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
                <h1 id="title" className={styles.title}>NAGERCOIL</h1>
              </div>
              <div className={styles.rightTop}>
                <nav className={styles.nav} aria-label="Top navigation">
                  <p className={styles.hand}>&#128073;&#xfe0e;</p>
                  <a href="#/Home">Home</a>
                  <a href="#/gallery">Gallery</a>
                  <a href="#/contact">Contact Us</a>
                </nav>
              </div>
            </div>
            {!isGallery && (
              <p className={styles.subtitle}>
                Explore career-focused programs with a responsive 3D course card experience.
              </p>
            )}
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
                </>
              ) : (
                <div className={styles.galleryPage}>
                  <h2 className={styles.galleryTitle}>Our G-TEC Memories Welcomes U</h2>
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