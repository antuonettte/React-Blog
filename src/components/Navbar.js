import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import firebase from '../firebase'

export const Navbar = () => {

    const {currentUser, signIn, signOut} = useAuth()

    const handleLogin = () =>{
        signIn()
        console.log(' Logged in successfully')
    }

    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Fakebook</Link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">

                        <Link className="nav-link" to="/">Home </Link>  {/* Use Link So there is not refresh */}
                    </li>
                    {/* <li className="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li> */}
                    <div class="dropdown">
                        <Link class="nav-link text-light dropdown-toggle" to="." type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Shop
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <Link className="dropdown-item" to="/shop/products">Products</Link>
                            <Link className="dropdown-item" to="/shop/cart">Cart</Link>
                        </div>
                    </div>
                    <li className="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">

                    {
                        !currentUser.loggedIn
                        ?
                        <li className="nav-item">
                            <Link onClick={() => handleLogin()} className="nav-link" to="">Login</Link>
                        </li>
                        :
                        <React.Fragment>
                            <li className="nav-item">
                                <Link onClick={() => signOut()} className="nav-link" to="">Logout</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/auth/profile">Profile</Link>
                            </li>
                        </React.Fragment>
                    }

                    
                    {/* <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li> */}
                </ul>
            </div>
        </nav>
    )
}
