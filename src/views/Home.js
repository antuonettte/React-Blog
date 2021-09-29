import React, { Component } from 'react'
// import { current_user } from '../test';
// import axios from 'axios';




export default class Home extends Component {

    
    render() {

        var posts = this.props.post

        return (
            <div>
                <h3>Home</h3>
                <hr />

                <ul className="list-group">

                    { posts.map( p => (

                        <li class="list-group-item">
                            <p>
                                {p.body}
                            </p>
                            <div>
                                <span>
                                    <cite>&mdash; {p.user.first_name + ' ' + p.user.last_name}</cite>
                                </span>

                            </div>
                        </li>
                        
                    ) ) }

                    

                </ul>
            </div>
        )
        

        
    }
}
