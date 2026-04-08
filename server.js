import express from 'express';
import fs from 'fs';
import path from 'path';

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
  console.log(`Enquiry server listening on http://localhost:${PORT}`);
});
