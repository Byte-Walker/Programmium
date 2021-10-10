import { initAnalytics, initAuth } from '../../Firebase/firebase.init';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import { useEffect, useState } from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Initializing firebase app
    initAuth();
    initAnalytics();

    // Initializing authentication
    const auth = getAuth();

    // Initializing and creating google auth provider
    const googleProvider = new GoogleAuthProvider();

    // Handle Google sign up
    const signUpWithGoogle = () => {
        setErrorMessage('');

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    // Handle Email sign up
    const signUpWithEmail = (e, auth, email, password) => {
        e.preventDefault();
        setErrorMessage('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                sendVerificaionEmail();
                console.log(user);
            })
            .catch((error) => {
                console.log(error.code);
                if (error.code === 'auth/email-already-in-use') {
                    setErrorMessage('Account already exists with this email.');
                } else if (error.code === 'auth/weak-password') {
                    setErrorMessage(
                        'Password has to be at least 6 characters long'
                    );
                }
            });
    };

    // Send verification mail
    const sendVerificaionEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Verification email sent');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Handle Email sign in
    const signInWithEmail = (e, auth, email, password) => {
        e.preventDefault();
        setErrorMessage('');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error.code);
                if (error.code === 'auth/wrong-password') {
                    setErrorMessage('Wrong Password!');
                } else if (error.code === 'auth/user-not-found') {
                    setErrorMessage('Accound not found!');
                } else if (error.code === 'auth/too-many-requests') {
                    setErrorMessage('Sorry! You have exceeded your quota.');
                }
            });
    };

    // Keep track of the signed in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [auth]);

    // Handle sign out
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log('Signed out successfully');
                setUser({});
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    // Return statement
    return {
        auth,
        user,
        errorMessage,
        isLoggedIn,
        signUpWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        signOutUser,
    };
};

export default useFirebase;
