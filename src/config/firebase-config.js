
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC61hzQsdkGyJ_PJk0_gvZdxBb-jYDr8Jo",
  authDomain: "my-music-f0ae9.firebaseapp.com",
  projectId: "my-music-f0ae9",
  storageBucket: "my-music-f0ae9.appspot.com",
  messagingSenderId: "370476193969",
  appId: "1:370476193969:web:8b4341704e0d0f1d1b6a90"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();



// const firebaseConfig = {
//     //   apiKey: "AIzaSyC61hzQsdkGyJ_PJk0_gvZdxBb-jYDr8Jo",
//     //   authDomain: "my-music-f0ae9.firebaseapp.com",
//     //   projectId: "my-music-f0ae9",
//     //   storageBucket: "my-music-f0ae9.appspot.com",
//     //   messagingSenderId: "370476193969",
//     //   appId: "1:370476193969:web:8b4341704e0d0f1d1b6a90"
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//     appId: process.env.REACT_APP_FIREBASE_APPI_ID
// };


// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// const storage = getStorage(app);
// export { app, storage };
