import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAkOYaHMh1IaHl8foNkTjunC7yLwp4Vp9Q",
    authDomain: "my-project-68fcf.firebaseapp.com",
    projectId: "my-project-68fcf",
    storageBucket: "my-project-68fcf.appspot.com",
    messagingSenderId: "1010416257660",
    appId: "1:1010416257660:web:b0353dfe39aff6dc98d7f9",
    measurementId: "G-6FV7YWPQNP"
};

initializeApp(firebaseConfig);

const db=getFirestore();
const auth = getAuth();

export {db,auth};

