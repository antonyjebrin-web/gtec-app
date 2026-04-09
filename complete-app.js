// ==========================================
// GTEC APP - COMPLETE SOURCE CODE
// Frontend + Backend in Single File
// ==========================================

// ========== BACKEND CODE ==========

// server.js - Express Backend Server
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const enquiryFilePath = path.join('C:', 'Users', 'WELCOME', 'Desktop', 'studentenquiry.txt');

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.post('/api/enquiry', (req, res) => {
  const { name, email, phone, course, address } = req.body;

  if (!name || !email || !phone || !course || !address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const now = new Date();
  const timestamp = now.toLocaleString('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const entry = `\n================================\nDate / Time: ${timestamp}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}\nAddress: ${address}\n================================\n`;

  fs.appendFile(enquiryFilePath, entry, (err) => {
    if (err) {
      console.error('Failed to write enquiry:', err);
      return res.status(500).json({ error: 'Could not save enquiry' });
    }
    return res.status(200).json({ message: 'Enquiry saved' });
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ========== FRONTEND CODE ==========

// package.json
const packageJson = {
  "name": "gtec-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "server": "node server.js",
    "build": "vite build",
    "preview": "vite preview",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@react-three/fiber": "^9.5.0",
    "express": "^4.18.2",
    "gsap": "^3.14.2",
    "ogl": "^1.0.11",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "typescript": "^6.0.2",
    "vite": "^8.0.3"
  }
};

// index.html
const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/Glogo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>G-TEC EDUCATION</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// vite.config.ts
const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})`;

// tsconfig.json
const tsconfig = `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`;

// main.tsx
const mainTsx = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`;

// App.tsx
const appTsx = `import { useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import { CourseShowcase } from './features/courses/CourseShowcase';
import SplashCursor from './components/SplashCursor';
import ContactForm from './components/ContactForm';
import ColorBends from './components/ColorBends';

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
    title.innerHTML = text.split('').map((char) => \`<span>\${char}</span>\`).join('');
    const spans = title.querySelectorAll('span');

    const handleMouseMove = (e: MouseEvent) => {
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(1, 1.8 - dist / 200);
        span.style.transform = \`scale(\${scale})\`;
        span.style.opacity = \`\${Math.max(0.6, 1 - dist / 300)}\`;
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
  const isContact = route === '#/contact';

  return (
    <>
      <SplashCursor />
      <ColorBends
        colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
        color=""
      />

      <div className={styles.page}>
        <header className={styles.header}>
          <div className="gtec-container">
            <div className={styles.headerInner}>
              <div className={styles.brand}>
                <img
                  className={styles.brandLogo}
                  src="/Glogo.png"
                  alt="G-TEC"
                  width={64}
                  height={64}
                />
                <h1 id="title" className={styles.title}>G-TEC EDUCATION</h1>
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
              {isContact ? (
                <ContactForm />
              ) : !isGallery ? (
                <>
                  <div className={\`hero-banner \${styles.hero}\`} aria-label="Course showcase banner">
                    <div className="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="hero-item">
                            <CourseShowcase />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.galleryPage}>
                  <h2 className={styles.galleryTitle}>Gallery</h2>
                  <p className={styles.gallerySubtitle}>Explore our campus and facilities</p>
                  <div className={styles.galleryGrid}>
                    {galleryImages.map((image, index) => (
                      <figure key={index} className={styles.galleryCard}>
                        <img
                          src={\`/assist/\${image}\`}
                          alt={\`Gallery image \${index + 1}\`}
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
}`;

// Export everything for use
module.exports = {
  serverCode: serverJs,
  packageJson,
  indexHtml,
  viteConfig,
  tsconfig,
  mainTsx,
  appTsx,
  // Add other component codes here...
};