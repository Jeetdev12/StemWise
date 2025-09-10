# 🎬 StreamWise   


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

🔗 **Live Demo:** https://stem-wise-kcyt.vercel.app/  

| Login Page  
<img width="1356" height="620" alt="image" src="https://github.com/user-attachments/assets/9b2052af-1c55-4d46-97e9-065df9b84133" /> | Browse Page <img width="1350" height="618" alt="image" src="https://github.com/user-attachments/assets/ef779037-b196-4bfe-82a7-71f4e9c5248c" />| AI Search<img width="1351" height="631" alt="image" src="https://github.com/user-attachments/assets/532a3c1c-839f-469e-ae57-ec026c7209a0" />


---

## 📦 Project Setup  

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/streamwise.git
   cd streamwise
2. Install dependencies
    npm install

3. Create a .env file in the root and add your API keys

       REACT_APP_FIREBASE_KEY=your_firebase_key
       REACT_APP_TMDB_KEY=your_tmdb_key
       REACT_APP_GEMINI_KEY=your_gemini_key


4. npm run dev

5. Run the project in development mode
   Build for production

   npm run build


6. Deploy
    vercel 


