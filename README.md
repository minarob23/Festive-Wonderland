# Festive Wonderland

Festive Wonderland is a vibrant, interactive holiday-themed web app featuring animated Christmas trees, Santa, snowfall, and festive UI components. Built with React and Vite, it offers a joyful user experience with modern design, dynamic effects, and customizable seasonal elements.

## Features

### 🎄 Visual & Interactive Elements
- **Animated Christmas tree** with twinkling lights and ornaments
- **Santa Claus animation** with smooth movements
- **Dynamic snowfall effect** across the entire page
- **Interactive cursor glow** that follows mouse movement
- **Parallax background** with festive winter landscape
- **Smooth transitions** between Christmas and New Year 2026 views

### 🎵 Audio Experience
- **Festive background music** (auto-plays on first user interaction)
- **Music toggle control** with mute/unmute button
- **Looping audio** for continuous holiday atmosphere

### 🎨 Design & UX
- **Modern, responsive UI** with glassmorphism effects
- **Gradient text effects** with vibrant holiday colors
- **Framer Motion animations** for smooth interactions
- **Custom favicon** with festive Christmas theme
- **Mobile-friendly** design that works on all devices

### 🛠️ Technical Features
- Built with **React 19** and **TypeScript**
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for modern styling
- **Framer Motion** for advanced animations
- **Full-stack architecture** with Express backend
- **Netlify-ready** deployment configuration


## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/festive-wonderland.git
   cd festive-wonderland
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

This is a full-stack application with both frontend and backend components.

**Development Mode:**
```bash
# Start both frontend and backend
npm run dev:client  # Frontend on http://localhost:5000
npm run dev         # Backend server
```

**Production Build:**
```bash
npm run build
npm start
```

## Project Structure
- `client/` - Frontend source code (React, components, pages)
- `server/` - Backend server code (API, routes, static files)
- `shared/` - Shared schemas and types
- `attached_assets/` - Generated and static assets

## Deployment

### Netlify (Frontend)

The project includes Netlify configuration for deploying the frontend:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to Netlify"
   git push
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Import your repository
   - Netlify will automatically detect the `netlify.toml` configuration

3. **Configuration:**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - The `netlify.toml` and `client/public/_redirects` files handle SPA routing

### Backend Deployment

The backend server needs to be deployed separately to a service like:
- **Render** - [render.com](https://render.com)
- **Railway** - [railway.app](https://railway.app)
- **Heroku** - [heroku.com](https://heroku.com)

After deploying the backend, update your frontend API calls to point to the backend URL.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
