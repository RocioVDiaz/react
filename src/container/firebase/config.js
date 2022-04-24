
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoOBe378FTY0T-Eav5Gh5Jrb_dH-XNOy4",
  authDomain: "comision19845rd.firebaseapp.com",
  projectId: "comision19845rd",
  storageBucket: "comision19845rd.appspot.com",
  messagingSenderId: "154349579378",
  appId: "1:154349579378:web:e5fcd400c6a2e3de4ce6eb"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp =()=>{
    return app
}