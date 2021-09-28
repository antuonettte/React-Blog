import React, { Component } from 'react'
import '../App.css'
import {Switch, Route, Link} from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'
import Profile from '../views/Profile'

export default class Main extends Component {
    render() {

        // let post = this.props.post

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
                                <li className="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/profile">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className="container">
                    {/* Switch is used to switch render templates, Route is each Template, and Exact is required to make the path pattern exact not proximate */}
                    <Switch>
                        <Route exact path='/' render={ () => <Home post={this.props.post}/> }/>
                        <Route exact path='/about' render={ () => <About/> } />
                        <Route exact path='/contact' render={ () => <Contact/> } />
                        <Route exact path='/login' render={ () => <Login/> } />
                        <Route exact path='/register' render={ () => <Register/> } />
                        <Route exact path='/profile' render={ () => <Profile/> } />
                    </Switch>

                </main>

                <footer>

                </footer>
            </React.Fragment>
        )
    }
}
