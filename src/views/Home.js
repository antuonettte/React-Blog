import { post } from 'jquery'
import React, { Component, useContext } from 'react'
import { Post } from '../components/Post'
import { useAuth } from '../contexts/AuthContext'
import { DataContext } from '../contexts/DataProvider'
import firebase from '../firebase'
import { NotAuthenticated } from './NotAuthenticated'


export const Home = (props) => {

    const { currentUser } = useAuth();

    const { providerInfo, getPosts, addPost} = useContext(DataContext)

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // alert( e.target.body.value );

        const formData = {
            body: e.target.body.value,
            dateCreated: firebase.firestore.Timestamp.fromDate( new Date()),
            dateUpdated: null,
            userId: currentUser.id
        };

        addPost(formData);
    }



    return (
        <React.Fragment>
            {
                !currentUser.loggedIn
                    ?
                    <NotAuthenticated/>
                    :
                    <React.Fragment>
                        <h3>
                            Home | Welcome, {currentUser.loggedIn ? currentUser.name : 'User'}
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
                            {providerInfo[0].map(p => <Post p={p} key={p.id} />)}
                        </ul>
                    </React.Fragment>
            }
        </React.Fragment>

    )
}
