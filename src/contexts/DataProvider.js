import React, { useEffect, useState, createContext, useCallback } from 'react';
import firebase from '../firebase';
import { useAuth } from './AuthContext';


export const DataContext = createContext()

export const DataProvider = ( props ) => {
    
    const [posts, setPosts] = useState([]);
    const [products, setProducts] = useState([])
    const { currentUser } = useAuth();
    const [cart, setCart] = useState({items : {}, quantity: 0, subtotal: 0, taxes: 0, grandtotal: 0})
    const db = firebase.firestore();


    //Products
    const getProducts = () => {
        fetch('https://api.stripe.com/v1/products', {
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_STRIPE_SK_TEST}`
            }
        })
            .then(res => res.json())
            .then(info => {
                setProducts(info.data)
            });
    }

    //Get Cart
    function getCart(){
        let data = {};
        let quantity = 0;
        let subtotal = 0;
        let grandtotal =0;
        let taxes = 0;

        db.collection( 'users' ).doc( currentUser.id ).collection( 'cart' ).get()
            .then(snapshot =>{
                snapshot.forEach(ref => {
                    let product = ref.data();
                    data[ ref.id ] = product;

                    quantity += product.quantity;
                    subtotal += parseFloat( product.metadata.price ) * product.quantity;
                    taxes += parseFloat( product.metadata.tax ) * product.quantity;
                })
                grandtotal += subtotal + taxes;

                setCart({
                    items: data,
                    quantity,
                    subtotal: subtotal.toFixed( 2 ),
                    taxes: taxes.toFixed( 2 ),
                    grandtotal: grandtotal.toFixed( 2 ),
                })

            })
    }

    //Products
    const addPost = (postData) => {
        firebase.firestore().collection('posts').add(postData)
            .then(docref => {
                console.log(' Post created successfully');
                getPosts();
            })
            .catch(err => {
                console.log('There was an error creating your post')
                console.log(err);
            })
    }


    const getPosts = useCallback( () => {
        let newPosts = [];

        //connect to the posts collections
        db.collection( 'posts' ).orderBy( 'dateCreated', 'desc' ).get()
            .then( (snapshot)  => {
                //loop over the posts in the collection
                snapshot.forEach( post =>{
                    //add the new doc to the newPosts list
                    newPosts.push({...post.data(), id: post.id})
                });
                //set the new state for out posts
                setPosts(newPosts);
            })
    }, [ db ] );

    //Where I load our data

    useEffect(() => {
        if(currentUser.loggedIn){
            if( cart.hasOwnProperty('items')){
                getCart();
            }
        }
    }, [db, currentUser.loggedIn])

    useEffect( () =>{
        if (currentUser.loggedIn) {
            getPosts();
        }

    }, [ currentUser.loggedIn, getPosts ]);

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <DataContext.Provider value={ { providerInfo: [posts, setPosts],cart ,getCart , products, setProducts, getPosts, addPost, getProducts } }>
            { props.children }
        </DataContext.Provider>
    )
}
