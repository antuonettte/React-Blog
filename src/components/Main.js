import React, { Component } from 'react'
import '../App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Home } from '../views/Home'
import { About } from '../views/About'
import { Contact } from '../views/Contact'
import { Login } from '../views/Login'
import { Register } from '../views/Register'
import { Profile } from '../views/Profile'
import { Shop } from '../views/Shop'
import {BlogSingle} from '../views/BlogSingle'

export const Main = (props) => {
    return (
        <React.Fragment>
            <header>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/">Navbar</Link>
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
                                    <Link className="dropdown-item" to="/shop">Products</Link>
                                    <Link className="dropdown-item" to=".">Cart</Link>
                                </div>
                            </div>
                            <li className="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="container">
                {/* Switch is used to switch render templates, Route is each Template, and Exact is required to make the path pattern exact not proximate */}
                <Switch>
                    <Route exact path='/' render={() => <Home posts={props.posts} />} />
                    <Route exact path='/about' render={() => <About />} />
                    <Route exact path='/contact' render={() => <Contact />} />
                    <Route exact path='/login' render={() => <Login />} />
                    <Route exact path='/register' render={() => <Register />} />
                    <Route exact path='/profile' render={() => <Profile />} />
                    <Route exact path='/shop' render={() => <Shop items={props.items} />} />
                    <Route exact path='/blog/:id' render={({ match }) => <BlogSingle posts={props.posts} match={match} />} />

                </Switch>

            </main>

            <footer>

            </footer>
        </React.Fragment>
    )
}

