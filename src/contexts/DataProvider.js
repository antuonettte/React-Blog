import React, { useEffect, useState, createContext, useCallback } from 'react';
import firebase from '../firebase';
import { useAuth } from './AuthContext';


export const DataContext = createContext()

export const DataProvider = ( props ) => {
    
    const [posts, setPosts] = useState([]);

    const { currentUser } = useAuth();

    const db = firebase.firestore();

    const addPost = (postData) => {
        firebase.firestore().collection('posts').add(postData)
            .then(docref => {
                console.log(' Post created successfully');
                getPosts();
            })
            .catch(err => {
                console.log('There was an error creating your post')
                console.log(err);
            })
    }


    const getPosts = useCallback( () => {
        let newPosts = [];

        //connect to the posts collections
        db.collection( 'posts' ).orderBy( 'dateCreated', 'desc' ).get()
            .then( (snapshot)  => {
                //loop over the posts in the collection
                snapshot.forEach( post =>{
                    //add the new doc to the newPosts list
                    newPosts.push({...post.data(), id: post.id})
                });
                //set the new state for out posts
                setPosts(newPosts);
            })
    }, [ db ] );

    useEffect( () =>{
        if (currentUser.loggedIn) {
            getPosts()
        }

    }, [ currentUser.loggedIn, getPosts ]);
    
    return (
        <DataContext.Provider value={ { providerInfo: [posts, setPosts], getPosts, addPost } }>
            { props.children }
        </DataContext.Provider>
    )
}
