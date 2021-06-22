import firebase from 'firebase/app';
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAi_P-dfWpF-RK93fWO9WaW-Mjm_LPNBNY",
    authDomain: "matgarbaciak.firebaseapp.com",
    projectId: "matgarbaciak",
    storageBucket: "matgarbaciak.appspot.com",
    messagingSenderId: "363605578803",
    appId: "1:363605578803:web:252643a70a66b14196ff46",
    measurementId: "G-4SJVZDB6WF"
};

export default function initializeFirebase() {
    firebase.initializeApp(firebaseConfig);
}
