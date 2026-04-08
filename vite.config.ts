import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mockCourses } from './src/api/mockCoursesData';

function mockCoursesApi() {
  return {
    name: 'mock-courses-api',
    configureServer(server: any) {
      server.middlewares.use('/api/courses', (req: any, res: any) => {
        const url = req.url || '';
        const fail = typeof url === 'string' && url.includes('fail=true');

        setTimeout(() => {
          if (fail) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Mock API failure. Try again.' }));
            return;
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ courses: mockCourses }));
        }, 700);
      });
    },
    configurePreviewServer(server: any) {
      server.middlewares.use('/api/courses', (req: any, res: any) => {
        setTimeout(() => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ courses: mockCourses }));
        }, 300);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), mockCoursesApi()],
  server: {
    port:5174,
    strictPort: true,
  },
});

