import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCc1dvbQrzZ4eALlpRIxpJunESpx44XZU",
  authDomain: "netflix-clone-b1b4a.firebaseapp.com",
  projectId: "netflix-clone-b1b4a",
  storageBucket: "netflix-clone-b1b4a.appspot.com",
  messagingSenderId: "973755856102",
  appId: "1:973755856102:web:a8da2eac414750c5d7f727",
  measurementId: "G-VLSEZ3JCPH",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);