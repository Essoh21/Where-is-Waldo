
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCCcesxwKumEJfW0m5UJK83Py6I3mpiV-I",
    authDomain: "find-hiddens.firebaseapp.com",
    projectId: "find-hiddens",
    storageBucket: "find-hiddens.appspot.com",
    messagingSenderId: "819216681203",
    appId: "1:819216681203:web:90caaa95a15227b7864f86"
};

const FirebaseApp = initializeApp(firebaseConfig);
export default FirebaseApp;