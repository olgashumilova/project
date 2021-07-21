import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {ROUTES} from '../routes'
import footerComponent from '../footer/footer'

// Scss
import './header.scss'
import '../footer/footer.scss'

export default function App() {
    return (
      <Router>
        <header className = 'header'>
          <div className = 'header__title'>
            <h1>Game Store</h1>
          </div>

          <div className = 'header__nav'>
            <ul className = 'header__list'>
              <li className = 'header__list-element'>
                <Link className = 'header__link' to = {ROUTES.HOME}>Home</Link>
              </li>
              <li className = 'header__list-element'>
                <Link className = 'header__link' to = {ROUTES.PRODUCTS}>
                  Products 
                  <div className = 'triangle'></div>
                </Link>
                
              </li>
              <li className = 'header__list-element'>
                <Link className = 'header__link' to = {ROUTES.ABOUT}>About</Link>
              </li>
              <li className = 'header__list-element'>
                <Link className = 'header__link' to = {ROUTES.SIGNIN}>Sign In</Link>
              </li>
              <li className = 'header__list-element'>
                <Link className = 'header__link'  to = {ROUTES.SIGNUP}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </header>

        <Switch>
          <Route path={ROUTES.SIGNUP}>
            <SignUp />
          </Route>
          <Route path={ROUTES.SIGNIN}>
            <SignIn />
          </Route>
          <Route path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route path={ROUTES.PRODUCTS}>
            <Products />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>

        <footer className = 'footer'>{footerComponent()}</footer>
      </Router>
    );
}
  
function Home() {
  return <h2>Home</h2>;
}

function Products() {
  return <h2>Products</h2>;
}

function About() {
  return <h2>About</h2>;
}

function SignIn() {
  return <h2>Sign In</h2>;
}

function SignUp() {
  return <h2>Sign Up</h2>;
}