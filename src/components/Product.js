import React from 'react'
import firebase from '../firebase';
import {useAuth} from '../contexts/AuthContext'

export const Product = ( props ) => {
    const item = props.item

    const { currentUser } = useAuth()

    const db = firebase.firestore();

    const handleClick = ( prodObj ) =>{
        console.log( prodObj.id);
        db.collection('Users').doc( currentUser.id ).collection( 'cart' ).doc( item.id ).get()
            .then( productRef => {
                let data;

                if(productRef.exists){
                    data = productRef.data()
                    data.quantity+=1;
                }else{
                    data = prodObj;
                    data.quantity = 1;
                }

                db.collection('users').doc( currentUser.id).collection( 'cart' ).doc( item.id ).set( data )
            })
        
    };

    return (
        <div className="card mt-3">
            <div className="card-header bg-light text-dark h6">
                {item.name} <span className="float-right">{item.metadata.price}</span>
            </div>
            <img className="card-img-top" src={item.images[0]} alt="Image of product" />
            <div className="card-body bg-white">
                <button onClick={() => handleClick( item )} className="btn btn-success w-100" href=".">Add to cart</button>
                <p className="card-text mt-2">{item.description}</p>
            </div>
        </div>
    )
}
