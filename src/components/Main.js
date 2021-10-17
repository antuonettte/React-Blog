import React, { Component } from 'react'
import '../App.css'
import { Switch, Route} from 'react-router-dom'
import { Home } from '../views/Home'
import { About } from '../views/About'
import { Contact } from '../views/Contact'
import { Login } from '../views/Login'
import { Register } from '../views/Register'
import { Profile } from '../views/Profile'
import { Shop } from '../views/Shop'
import { BlogSingle } from '../views/BlogSingle'
import { Navbar } from './Navbar'
import { Cart } from './Cart'

export const Main = (props) => {
    return (
        <React.Fragment>
            <header>
               <Navbar/>
            </header>

            <main className="container">
                {/* Switch is used to switch render templates, Route is each Template, and Exact is required to make the path pattern exact not proximate */}
                <Switch>
                    {/* posts={posts}  */}
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/about' render={() => <About />} />
                    <Route exact path='/contact' render={() => <Contact />} />
                    {/* <Route exact path='/login' render={() => <Login />} /> */}
                    <Route exact path='/shop/cart' render={() => <Cart />} />
                    <Route exact path='/auth/profile' render={() => <Profile />} />
                    <Route exact path='/shop/products' render={() => <Shop items={props.items} />} />
                    {/* posts={posts}  */}
                    <Route exact path='/blog/:id' render={({ match }) => <BlogSingle  match={match} />} />

                </Switch>

            </main>

            <footer>

            </footer>
        </React.Fragment>
    )
}

