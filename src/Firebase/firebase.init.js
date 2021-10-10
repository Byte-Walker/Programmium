import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

let app;

const initAuth = () => {
    app = initializeApp(firebaseConfig);
}

const initAnalytics = () => {
    getAnalytics(app);
}

export {initAuth, initAnalytics};
