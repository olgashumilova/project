import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ROUTES from '@Routes/routes.ts'

// Semantic UI (for modal window)
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

// Components
import HomeComponent from '@HomeComponent/home.tsx'
import FooterComponent from '@FooterComponent/footer.tsx'

// Modals
import SignUpModal from '@Modal/signUpModal.tsx'
import SignInModal from '@Modal/signInModal.tsx'

// Scss
import '@HeaderComponent/header.scss'
import '@FooterComponent/footer.scss'
import '@HomeComponent/home.scss'
import '@Modal/modals.scss'

const App: React.FunctionComponent = () => {

  return (
    <Router>
      <header className = 'header'>
        <div className = 'header__title'>
          <h1>Game Store</h1>
        </div>
        <div className = 'header__nav'>
          <ul className = 'header__list'>
            
            <Link className = ' header__list-element' to = {ROUTES.HOME}>
              <li className = 'header__link'>Home</li>
            </Link>
            
            <li className = 'header__list-element'>
                <Dropdown text = 'Products'>
                  <Dropdown.Menu>
                    <Dropdown.Item text = 'PC' onClick = {() => alert('PC Page')}/>
                    <Dropdown.Item text = 'Playstation 5' onClick = {() => alert('Playstation 5 Page')}/>
                    <Dropdown.Item text = 'XBox One' onClick = {() => alert('XBox One Page')}/>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            
            <Link className = 'header__list-element' to = {ROUTES.ABOUT}>
              <li className = 'header__link'>
                About
              </li>
            </Link>
            
            <Link className = 'header__list-element' to = {ROUTES.SIGNIN}>
              <li className = 'header__link'>
                Sign In
              </li>
            </Link>

            <Link className = 'header__list-element'  to = {ROUTES.SIGNUP}>
              <li className = 'header__link'>
                Sign Up
              </li>
            </Link>
            
          </ul>
        </div>
      </header>
      <Switch>
        <Route path={ROUTES.SIGNUP}>
          <SignUpModal />
        </Route>
        <Route path={ROUTES.SIGNIN}>
          <SignInModal />
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
      <FooterComponent />
    </Router>
  );
}
  
function Home() {
  return <HomeComponent />;
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

export default App;