import React, { Component } from 'react'
import { current_user } from '../test';
// import axios from 'axios';




export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then( json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

    }

    render() {

        var { items, isLoaded } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{

            return (
                <div>
                    <h3>Home</h3>
                    <hr />

                    <ul className="list-group">

                        { items.map( p => (

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
}
