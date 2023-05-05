import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function usePosts(collectionName) {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const postsRef = ref(getDatabase(), collectionName);
      onValue(postsRef, (snapshot) => {
        const postsData = snapshot.val();
        const postsList = Object.keys(postsData).map((key) => {
          return { id: key, ...postsData[key] };
        });
        setPosts(postsList);
      });
    }, []);
  
    return posts;
}

// Firebase storage reference
const storage = getStorage(app);

export{ app, auth, usePosts, storage};



