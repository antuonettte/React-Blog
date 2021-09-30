
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './components/Main'
import firebase from './firebase';

export const App = () => {
  // React Hook
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore()

  const getPosts = useCallback(() => {
    let newPosts = [];

    db.collection('posts').get()
      .then( querySnapshot => {
        querySnapshot.forEach(post => {
          newPosts.push( post.data() );
        });

        setPosts( newPosts );

      });


    // fetch('http://localhost:5000/api/posts')
    //   .then(res => res.json())
    //   .then(data => {
    //     setPosts(data)
    //   })
  }, [ db ])

  // React Hook - componentDidMount equivalent
  useEffect(() => {
    getPosts();
  }, [ getPosts ])

  return (
    <React.Fragment>
      <Main posts={posts} />
    </React.Fragment>
  )
}