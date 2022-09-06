import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8wB2EaCYEYBVFg0JjR6_EkFZZjKkJNVc",
  authDomain: "fir-auth-d1851.firebaseapp.com",
  projectId: "fir-auth-d1851",
  storageBucket: "fir-auth-d1851.appspot.com",
  messagingSenderId: "427309477620",
  appId: "1:427309477620:web:2869a2fcd4f5c4a97478a1",
  measurementId: "G-36XFPQLMM8"
};

export const App = initializeApp(firebaseConfig);