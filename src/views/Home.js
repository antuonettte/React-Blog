import React, { Component } from 'react'

export default class Home extends Component {
    render() {

        let post = this.props.post

        return (
            <div>
                <h3>Home</h3>
                <hr />

                <ul className="list-group">

                    {post.map(p => (

                        <li class="list-group-item">
                            <p>
                                <a href="">{ p.post }</a>
                            </p>
                            <div>
                                <span>
                                    <cite>&mdash; { p.firstName + ' ' + p.lastName }</cite>
                                </span>

                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}
