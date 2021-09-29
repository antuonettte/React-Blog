import React, { Component } from 'react'
import Main from './components/Main';

export default class App extends Component {
  // Add change this.state of the constructor function
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
      items:[],
      users:[],
    }
  }
// mount any data you want to fetch or get
  componentDidMount() {

    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        })
      });

    fetch('http://localhost:5000/api/user/tonyturner1399@gmail.com')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        })
      });

    fetch('https://fakebook-june-derek.herokuapp.com/api/shop/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.data
        })
      });


  }

// render the dom and data
  render() {

    return (
      <React.Fragment>
        <Main posts={this.state.posts} items={this.state.items} users={this.state.users} />
      </React.Fragment>
    )
  }
}
