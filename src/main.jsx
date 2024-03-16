import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfrGqyjAEdh5zcT3z_2yIs1sCbkgie8R0",
  authDomain: "motosreact.firebaseapp.com",
  projectId: "motosreact",
  storageBucket: "motosreact.appspot.com",
  messagingSenderId: "952530771695",
  appId: "1:952530771695:web:698e08fce56fe973ae851a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
)
