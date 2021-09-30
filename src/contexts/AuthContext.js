import React, { useContext, useEffect, useState } from 'react'
import firebase from '../firebase'


// Creates an empy space for us to put auth information inside of
const AuthContext = React.createContext();

// Function to put data into the context
export function useAuth(){
    return useContext( AuthContext)
}
// all the functions of our auth system
export const AuthProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState({loggedIn: false})

    var auth = new firebase.auth.GoogleAuthProvider();

    function signIn(){
        return firebase.auth().setPersistence( firebase.auth.Auth.Persistence.LOCAL) 
            .then( () =>{
                firebase.auth()
                    .signInWithPopup(auth)
                    .then((res) => {
                        var credential = res.credential;

                        var token = credential.accessToken;

                        var user = res.user;
                    })
                    .catch((err) => {
                        // Handle Errors here.
                        var errorCode = err.code;
                        var errorMessage = err.message;
                        // The email of the user's account used.
                        var email = err.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = err.credential;
                    });
            })
        
        
    }

    function signOut(){
        firebase.auth().signOut()
            .then(() => {
                console.log('Logged Out Successfully')
            } )
            .catch((error) => {
                console.log(error)
            } );
    }

    useEffect(() => {
        const subscribe = firebase.auth().onAuthStateChanged( u => {
            if ( u ){
                setcurrentUser({
                    id: u.uid,
                    name: u.displayName,
                    image: u.photoURL,
                    email: u.email,
                    loggedIn: true
                });
            }else{
                setcurrentUser({
                    loggedIn: false
                });
            }
        } );

        return subscribe;

    }, []);

    const value = {
        currentUser, signIn, signOut
    }

    return (
        <AuthContext.Provider value = { value }>
            { children }
        </AuthContext.Provider>
    )
}
