# 🎬 StreamWise – NetflixGPT  

![StreamWise Banner](https://via.placeholder.com/900x250?text=StreamWise+Banner)  

[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)  
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-✓-purple)](https://redux-toolkit.js.org/)  
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)](https://firebase.google.com/)  
[![TMDB](https://img.shields.io/badge/TMDB-API-green)](https://developer.themoviedb.org/)  
[![Gemini](https://img.shields.io/badge/Google-Gemini-red)](https://deepmind.google/technologies/gemini/)  

StreamWise is a **Netflix-inspired movie streaming app** powered by **React, Redux, Firebase, TailwindCSS, TMDB API, and Google Gemini API**.  
It offers a seamless movie browsing experience, authentication, profile management, and AI-powered movie search.  

---

## 🚀 Features  

### 🔑 Authentication & User Management  
- Login & Sign up with **form validation**  
- Firebase authentication (with `onAuthStateChange` handling)  
- Update **profile picture & display name**  
- Sign out functionality  
- Redirect protection (unauthenticated users cannot access `/browse`)  

### 🖥️ Browse Page (After Login)  
- **Header** with navigation & profile dropdown  
- **Main Movie Section**  
  - Background trailer (autoplay + muted)  
  - Movie title & description  
- **Secondary Movie Section**  
  - Movie lists by category (Now Playing, Popular, Top Rated, Upcoming)  
  - Beautiful movie cards using TMDB CDN images  

### 🤖 NetflixGPT (AI Movie Search)  
- Search bar powered by **Google Gemini API**  
- Fetches movie suggestions via TMDB API  
- Displays results using reusable **MovieList** component  
- Supports **multi-language search**  

### ⚡ Tech Highlights  
- **React + Redux Toolkit** for state management  
- **TailwindCSS** for modern UI  
- **Firebase** for authentication & hosting  
- **TMDB API** for movie data & trailers  
- **Google Gemini API** for AI-powered search  
- **Custom hooks** for fetching movies (Now Playing, Popular, Top Rated, Upcoming)  
- **Memoization** for optimized rendering  
- Environment variables (`.env`) for API keys  

---

## 📸 Demo & Screenshots  

🔗 **Live Demo:** [https://your-deployment-link.com](https://your-deployment-link.com)  

| Login Page | Browse Page | AI Search |
|------------|-------------|-----------|
| ![Login](https://via.placeholder.com/300x180?text=Login+Page) | ![Browse](https://via.placeholder.com/300x180?text=Browse+Page) | ![Search](https://via.placeholder.com/300x180?text=NetflixGPT) |

---

## 📦 Project Setup  

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/streamwise.git
   cd streamwise
