import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

export const Post = (props) => {
    const p = props.p

    return (
        <li className="list-group-item">
            <p><Link to={`/blog/${p.id}`}>{p.body}</Link></p>
            <div>
                <span>
                    <cite>&mdash; {p.id}</cite>
                    <small className="float-right">{moment(p.dateCreated.toDate()).fromNow()}</small>
                </span>

            </div>
        </li>
    )
}
