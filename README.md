# Netflix Clone 🎬

A full-stack Netflix-inspired streaming application built with React, Redux, Firebase, and Node.js/Express backend with MongoDB database. Features user authentication, movie browsing, and streaming capabilities.

## 📋 Project Overview

A complete streaming platform featuring:
- User authentication with Firebase
- Movie/TV show catalog browsing
- Search and filtering
- User watchlist management
- Streaming functionality
- Responsive UI design
- Real-time data updates
- Redux state management

## 🛠️ Tech Stack

### Frontend
- **React** ^18.0.0 - UI library
- **Redux Toolkit** ^1.8.2 - State management
- **Firebase** ^9.8.2 - Authentication & Real-time Database
- **Styled Components** ^5.3.5 - CSS-in-JS styling
- **React Router DOM** ^6.3.0 - Client-side routing
- **Axios** ^1.6.8 - HTTP client
- **React Icons** ^4.3.1 - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express** ^4.18.3 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** ^6.3.6 - MongoDB ODM
- **Nodemon** ^2.0.16 - Development auto-reload
- **CORS** ^2.8.5 - Cross-origin resource sharing

## 📋 Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** (v4.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)
- **Firebase Account** - [Sign up](https://firebase.google.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aashritha987/Netflix_Clone.git
cd Netflix_Clone
```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd netflix-api

# Install dependencies
npm install
```

#### Configure Backend Environment Variables

Create a `.env` file in the `netflix-api` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/netflix-clone
MONGODB_USER=your_mongodb_user
MONGODB_PASSWORD=your_mongodb_password

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# JWT Configuration (if using JWT auth)
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
```

#### Run Backend Server

```bash
# Start development server with auto-reload
npm start

# Server will run on http://localhost:5000
```

### 3. Setup Frontend

```bash
# Navigate to frontend directory (from project root)
cd netflix-ui

# Install dependencies
npm install
```

#### Configure Frontend Environment Variables

Create a `.env` file in the `netflix-ui` directory:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Feature Configuration
REACT_APP_ENABLE_STREAMING=true
```

#### Run Frontend Server

```bash
# From netflix-ui directory
npm start

# Application will open at http://localhost:3000
```

## 📁 Project Structure

```
Netflix_Clone/
├── netflix-api/                 # Backend (Node.js + Express)
│   ├── models/                  # MongoDB schemas
│   │   ├── User.js
│   │   ├── Movie.js
│   │   └── WatchList.js
│   ├── routes/                  # API routes
│   │   ├── auth.js
│   │   ├── movies.js
│   │   └── watchlist.js
│   ├── controllers/             # Route controllers
│   │   ├── authController.js
│   │   ├── movieController.js
│   │   └── watchlistController.js
│   ├── middleware/              # Custom middleware
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── database.js
│   ├── server.js                # Express server entry
│   ├── .env
│   └── package.json
│
├── netflix-ui/                  # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── MovieDetail.jsx
│   │   │   ├── WatchList.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Browse.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── PlayerPage.jsx
│   │   │   └── ...
│   │   ├── redux/
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── movieSlice.js
│   │   │   │   └── watchlistSlice.js
│   │   │   └── store.js
│   │   ├── services/
│   │   │   ├── firebaseConfig.js
│   │   │   ├── authService.js
│   │   │   ├── movieService.js
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## 📖 Available Scripts

### Backend Scripts

```bash
# Start development server with auto-reload
npm start

# Run tests
npm test
```

### Frontend Scripts

```bash
# Start development server with hot-reload
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (be careful!)
npm run eject
```

## 🔑 Key Features

### User Management
- ✅ User registration and login with Firebase
- ✅ Email verification
- ✅ User profile management
- ✅ Persistent user sessions

### Movie Catalog
- ✅ Browse movies and TV shows
- ✅ Search functionality
- ✅ Filter by genre, rating, year
- ✅ Movie details and descriptions
- ✅ Star ratings and reviews
- ✅ Trending movies section

### Watchlist
- ✅ Add/remove from watchlist
- ✅ Mark as watched
- ✅ Continue watching feature
- ✅ Personalized recommendations

### Streaming
- ✅ Video player with controls
- ✅ Quality selection
- ✅ Subtitle support
- ✅ Progress tracking

### UI/UX
- ✅ Responsive design
- ✅ Dark theme
- ✅ Smooth animations
- ✅ Loading states

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
GET    /api/auth/me           - Get current user
```

### Movies
```
GET    /api/movies            - Get all movies
GET    /api/movies/:id        - Get movie details
GET    /api/movies/search?q=  - Search movies
GET    /api/movies/trending   - Get trending movies
GET    /api/movies/genre/:id  - Get movies by genre
```

### Watchlist
```
GET    /api/watchlist         - Get user's watchlist
POST   /api/watchlist         - Add to watchlist
DELETE /api/watchlist/:id     - Remove from watchlist
PATCH  /api/watchlist/:id     - Update watchlist item status
```

## 🔐 Firebase Setup

1. Create [Firebase project](https://firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Get config from Project Settings
5. Add to `.env`:

```env
REACT_APP_FIREBASE_API_KEY=AIzaSyD...
REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-clone-xxxxx.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=netflix-clone-xxxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-clone-xxxxx.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

## 🗄️ Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  firebaseUID: String,
  profilePicture: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Movie Model
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  genre: [String],
  releaseDate: Date,
  rating: Number,
  posterUrl: String,
  videoUrl: String,
  duration: Number,
  director: String,
  cast: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### WatchList Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  movieId: ObjectId (ref: Movie),
  status: String (watching/watched/planned),
  watchedAt: Date,
  addedAt: Date
}
```

## 🚀 Deployment

### Deploy Frontend to Vercel

```bash
npm install -g vercel
cd netflix-ui
vercel
```

### Deploy Frontend to Netlify

```bash
cd netflix-ui
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy Backend to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-netflix-app

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret_key

# Deploy
git push heroku main
```

### Deploy Backend to Railway

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## 🐛 Troubleshooting

### Issue: "Cannot find module 'express'"
**Solution:** Reinstall backend dependencies:
```bash
cd netflix-api
rm -rf node_modules package-lock.json
npm install
```

### Issue: "MongoDB connection refused"
**Solution:** Ensure MongoDB is running:
```bash
# macOS
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod
```

### Issue: Firebase authentication not working
**Solution:** Verify Firebase config in `.env`:
```env
REACT_APP_FIREBASE_API_KEY=your_actual_key
REACT_APP_FIREBASE_PROJECT_ID=your_actual_project_id
```

### Issue: CORS errors when calling API
**Solution:** Update `CORS_ORIGIN` in backend `.env`:
```env
CORS_ORIGIN=http://localhost:3000
```

### Issue: Movies not loading
**Solution:** 
1. Verify MongoDB is populated with movie data
2. Check API endpoint response: `http://localhost:5000/api/movies`
3. Ensure frontend API URL is correct in `.env`

### Issue: Port 3000 or 5000 already in use
**Solution:** Kill the process or use different port:
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Video not playing
**Solution:**
1. Check video URL format
2. Verify CORS headers on video CDN
3. Ensure browser supports video codec

## 📚 Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Firebase Guide](https://firebase.google.com/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Styled Components](https://styled-components.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Aashritha Danthala**
- GitHub: [@aashritha987](https://github.com/aashritha987)
- Email: aashrithadanthala03@gmail.com

## 📞 Support

For issues and feature requests, please open an issue on [GitHub](https://github.com/aashritha987/Netflix_Clone/issues).

---

**Happy Streaming! 🎥🍿**
