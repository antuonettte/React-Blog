import moment from 'moment';
import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

export const BlogSingle = (props) => {
    const [post, setPost] = useState({});
    const [loadingState, setLoadingState] = useState('LOADING');
    const postState = useRef('LOADING');
    const db = firebase.firestore();

    const getPost = useCallback(() => {
        db.collection('posts').doc(props.match.params.id).get()
            .then(doc => {
                postState.current = 'LOADED';
                setPost(doc.data());
            })
            .catch(err => console.error(err))
    }, [db, props.match.params.id]);

    useEffect(() => {
        getPost();
    }, [getPost])

    if (postState.current === 'LOADED') {
        return (
            <React.Fragment>
                <Link to="/">&laquo; Back</Link>
                <hr />
                <li className="list-group-item">
                    <p>{post.body}</p>
                    <div>
                        <span>
                            <cite>&mdash; {post.userId}</cite>
                            <small className="float-right">{moment(post.dateCreated.toDate()).fromNow()}</small>
                        </span>

                    </div>
                </li>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                LOADING...
            </React.Fragment>
        )
    }
}