# G-TEC App - Nagercoil Institute Website

A modern, responsive React application for G-TEC Institute in Nagercoil, featuring interactive 3D course cards, animated backgrounds, and a student enquiry system.

## 🚀 Features

- **Interactive 3D Course Cards**: Hover effects and animations for course selection
- **Animated Background**: Custom Silk shader background with noise effects
- **Student Enquiry System**: Contact form that saves data to desktop file
- **Responsive Design**: Mobile-friendly layout with glassmorphism effects
- **Gallery Section**: Photo gallery of institute memories
- **Smooth Animations**: GSAP-powered transitions and effects

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Three.js & React Three Fiber** - 3D graphics and animations
- **GSAP** - Professional animations
- **CSS Modules** - Scoped styling

### Backend
- **Node.js & Express** - REST API server
- **File System** - Data persistence to desktop file

## 📁 Project Structure

```
gtec-app/
├── public/                 # Static assets
│   ├── assist/            # Gallery images
│   ├── gtec-logo.png      # Institute logo
│   └── course-hero.mp4    # Hero video
├── src/
│   ├── components/        # React components
│   │   ├── ContactForm.tsx    # Student enquiry form
│   │   ├── Silk.tsx          # Animated background
│   │   ├── SplashCursor.tsx  # Cursor effects
│   │   └── courseCard/       # Course card components
│   ├── features/
│   │   └── courses/          # Course showcase feature
│   ├── api/                  # API data and types
│   └── styles/               # Global styles
├── server.js              # Backend API server
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🏗️ Development Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **VS Code** (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gtec-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm run server
   ```
   This starts the Express server on `http://localhost:5000`

4. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   This starts Vite on `http://localhost:5173`

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🎯 How to Use

### Navigation
- **Home**: Main page with course showcase
- **Gallery**: Photo gallery of institute memories
- **Contact Us**: Student enquiry form

### Student Enquiry Form
1. Click "Contact Us" in the navigation
2. Fill in all required fields:
   - Name
   - Email
   - Phone Number
   - Select Course
   - Address
3. Click "Submit"
4. Data is automatically saved to `studentenquiry.txt` on your desktop

### Enquiry Data Format
Each submission is saved with:
```
================================
Date / Time: 08/04/2026, 03:45:12 PM
Name: John Doe
Email: john@example.com
Phone: 1234567890
Course: Full Stack
Address: 123 Main Street, Nagercoil
================================
```

## 🏃‍♂️ Running Process in VS Code

### 1. Open Project in VS Code
```bash
code .
```

### 2. Install Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **Prettier - Code formatter**

### 3. Terminal Setup
Open integrated terminal in VS Code (`Ctrl + ~`)

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
npm run server
```
Expected output:
```
Enquiry server listening on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Expected output:
```
VITE v8.0.3  ready in 364 ms
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### 5. Development Workflow
- Make changes to React components in `src/`
- Hot reload automatically updates the browser
- Form submissions save to desktop file
- Check browser console for errors
- Use VS Code debugger for debugging

## 📝 Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run server   # Start Express backend server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎨 Customization

### Courses
Edit `src/api/mockCoursesData.ts` to add/modify courses

### Styling
- Component styles: `src/components/*.module.css`
- Global styles: `src/styles/global.css`

### Form Fields
Modify `src/components/ContactForm.tsx` to change form fields

## 🔧 Troubleshooting

### Port Conflicts
If port 5173 is busy:
```bash
# Kill process on port 5173
npx kill-port 5173
```

### Backend Not Starting
- Ensure Node.js is installed: `node --version`
- Check if port 5000 is available
- Verify `server.js` exists in root directory

### Form Not Submitting
- Confirm backend server is running on port 5000
- Check browser network tab for API errors
- Verify `studentenquiry.txt` exists on desktop

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add feature'`
6. Push: `git push origin feature-name`
7. Create a Pull Request

## 📄 License

This project is for educational purposes. Contact the institute for commercial use.

## 👥 Support

For questions or issues:
- Check the troubleshooting section
- Review browser console for errors
- Ensure both servers are running

---

**Built with ❤️ for G-TEC Institute, Nagercoil**
