import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBLKkespB_DfJYZ1t3d0zL1_VvuDgY-XFE',
  authDomain: 'larc-dev.firebaseapp.com',
  projectId: 'larc-dev',
  storageBucket: 'larc-dev.appspot.com',
  messagingSenderId: '690193796429',
  appId: '1:690193796429:web:f74883eb25a414a4667b04',
  measurementId: 'G-SMZ0LL4TGV',
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
