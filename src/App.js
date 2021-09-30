
import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './components/Main'
import firebase from './firebase';

export const App = () => {

  // const [posts, setPosts] = useState([]);
  const db = firebase.firestore()

  // const getPosts = useCallback(() => {
  //   let newPosts = [];

  //   db.collection('posts').get()
  //     .then( querySnapshot => {
  //       querySnapshot.forEach(post => {
  //         let obj = {...post.data(), id: post.id}
  //         newPosts.push( obj );
  //       });

  //       setPosts( newPosts );

  //     });


   
  // }, [ db ])

  // const addPost = (postData) => {
  //   firebase.firestore().collection('posts').add(postData)
  //     .then(docref => console.log(' Post created successfully'))
  //     .catch(err => {
  //       console.log('There was an error creating your post')
  //       console.log(err);
  //     })
  // }

  // React Hook - componentDidMount equivalent
  // useEffect(() => {
  //   getPosts();
  // }, [ getPosts ])

  return (
    <React.Fragment>
      {/* posts={posts}  */}
      <Main />
    </React.Fragment>
  )
}