# 🎬 StreamWise  

[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)  
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-✓-purple)](https://redux-toolkit.js.org/)  
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)](https://firebase.google.com/)  
[![TMDB](https://img.shields.io/badge/TMDB-API-green)](https://developer.themoviedb.org/)  
[![Gemini](https://img.shields.io/badge/Google-Gemini-red)](https://deepmind.google/technologies/gemini/)  

StreamWise is a **Netflix-inspired movie streaming platform** built using **React, Redux Toolkit, Firebase, TailwindCSS, TMDB API, and Google Gemini AI**.  
It delivers a modern movie browsing experience with authentication, AI-powered search, trailers, categorized movie collections, and responsive UI.

---

# ✨ Features  

## 🔐 Authentication & User Management
- User Login & Signup with form validation  
- Firebase Authentication integration  
- Protected Routes (`/browse` only for authenticated users)  
- Update Profile Picture & Display Name  
- Persistent authentication using `onAuthStateChanged`  
- Sign out functionality  

---

## 🎥 Browse Experience
- Cinematic Hero Section with autoplay trailers  
- Dynamic movie title & overview display  
- Categorized movie rows:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- Responsive movie cards with TMDB images  
- Smooth horizontal scrolling UI  

---

## 🤖 StreamWise GPT Search
- AI-powered movie recommendation system  
- Integrated with Google Gemini API  
- Smart search suggestions  
- TMDB-powered movie fetching  
- Reusable movie listing components  

---

## ⚡ Tech Stack
- **React 18**
- **Redux Toolkit**
- **TailwindCSS**
- **Firebase Authentication**
- **TMDB API**
- **Google Gemini API**
- **React Router DOM**
- **Custom React Hooks**
- **Environment Variables**
- **Vercel Deployment**

---

# 📸 Screenshots  

## 🏠 Landing Page
<img width="1353" height="617" alt="image" src="https://github.com/user-attachments/assets/7b810330-6b1d-4cfb-bb97-832c29a377d3" />


---

## 🔑 Login Page 
<img width="1366" height="635" alt="image" src="https://github.com/user-attachments/assets/ba81166b-76e7-4d6f-9e00-687de3bdc33a" />


---

## 🎬 Browse Page
<img width="1345" height="605" alt="image" src="https://github.com/user-attachments/assets/ce613dfd-d0a7-49d7-80c5-bce2b437f935" />

## 🎬 Movie suggestion Page 
<img width="1350" height="754" alt="image" src="https://github.com/user-attachments/assets/a1a5d4d5-b94e-4a61-96ee-6282cea7ac9e" />



---

# 🚀 Live Demo  

🔗 **Live Website:**  
https://stem-wise-kcyt.vercel.app/

---

# 📂 Folder Structure

```bash
src/
│
├── components/
├── hooks/
├── redux/
├── utils/
├── pages/
└── App.js
```

---

# ⚙️ Project Setup  

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/streamwise.git
cd streamwise
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_KEY=your_firebase_key
REACT_APP_TMDB_KEY=your_tmdb_key
REACT_APP_GEMINI_KEY=your_gemini_key
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

---

## 5️⃣ Build for Production

```bash
npm run build
```

---

## 6️⃣ Deploy to Vercel

```bash
vercel
```

---

# 🧠 Key Learnings

- State management with Redux Toolkit  
- Firebase authentication flow  
- API integration with TMDB & Gemini  
- Reusable React components  
- Custom hooks optimization  
- Protected routes handling  
- Responsive UI with TailwindCSS  
- AI-powered search implementation  

---

# 📌 Future Improvements

- Watchlist Feature  
- Movie Details Page  
- Multi-language Support  
- Dark/Light Theme Toggle  
- Recommendation Engine  
- Video Player Integration  

---

# 👨‍💻 Author

### Manjeet Yadav

- GitHub: https://github.com/Jeetdev12
- LinkedIn: https://linkedin.com/in/manjeetyadav

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
