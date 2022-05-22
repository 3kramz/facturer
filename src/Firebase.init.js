import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe68KAdb2ypSSTOOZksGFDeWEM0KZ_rUY",
  authDomain: "facturer-x.firebaseapp.com",
  projectId: "facturer-x",
  storageBucket: "facturer-x.appspot.com",
  messagingSenderId: "630281813879",
  appId: "1:630281813879:web:62930f76945b63bed7ab72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth