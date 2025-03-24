import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgk4uQOpzb9-jW5XPpOXVIvnBnP7fgUEo",
  authDomain: "movielist-eb724.firebaseapp.com",
  databaseURL: "https://movielist-eb724-default-rtdb.firebaseio.com",
  projectId: "movielist-eb724",
  storageBucket: "movielist-eb724.firebasestorage.app",
  messagingSenderId: "986918617653",
  appId: "1:986918617653:web:a715bc5ad7d3aafcd5277c",
  measurementId: "G-VLJJHC7QWG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
