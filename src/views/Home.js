import React, { Component } from 'react'
// import { current_user } from '../test';
// import axios from 'axios';

export const Home = (props) => {

        const handleSubmit = ( e ) => {
            e.preventDefault();
            alert( e.target.body.value );

            for (const input of e.target) {
                console.log(input.value);
            }
        }


    return (
        <React.Fragment>
            <h3>
                Home
            </h3>
            <hr />

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-10">
                            <input className="form-control" type="text" name='body' placeholder="Your blog post here..." />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-info btn-block" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

            <hr />

            <ul className="list-group">
                {props.posts.map(p => <Post p={p} key={p.id} />)}
            </ul>
        </React.Fragment>

        // <React.Fragment>
        //     <h3>
        //         Home
        //     </h3>
        //     <hr />

        //     <form action="" method="POST">
        //         <div className="form-group">
        //             <div className="row">
        //                 <div className="col-md-10">
        //                     <input className="form-control" type="text" name='body' placeholder="Your blog post here..." />
        //                 </div>
        //                 <div className="col-md-2">
        //                     <input className="btn btn-info btn-block" type="submit" value="Post" />
        //                 </div>
        //             </div>
        //         </div>
        //     </form>

        //     <hr />

        //     <ul className="list-group">
        //         {props.posts.map(p => (
        //             <li key={p.id} className="list-group-item">
        //                 <p><Link to={`/blog/${p.id}`}>{p.body}</Link></p>
        //                 <div>
        //                     <span>
        //                         <cite>&mdash; {p.user.first_name} {p.user.last_name}</cite>
        //                         <small className="float-right">{moment(p.date_created).fromNow()}</small>
        //                     </span>

        //                 </div>
        //             </li>
        //         ))}
        //     </ul>
        // </React.Fragment>
    )
}
