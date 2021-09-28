import React, { Component } from 'react'
import Main from './components/Main';

export default class App extends Component {
  render() {

    const post = [
      {firstName:'Tony',
      lastName: 'Turner',
      post: 'Hello My name is Tony, Welcome to my ted talk'},
      {firstName:'John',
      lastName:'Contreras',
        post: 'Hello My name is John, Welcome to my Mcdonalds'}

    ];

    return (
      <React.Fragment>
        <Main post={post}/>
      </React.Fragment>
    )
  }
}
