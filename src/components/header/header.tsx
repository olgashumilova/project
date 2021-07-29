import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ROUTES from '@Components/routes.ts'

// Semantic UI (for modal window)
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

// Components
import HomeComponent from '@Components/home/home.tsx'
import FooterComponent from '@Components/footer/footer.tsx'

// Modals
import SignUpModal from '@Components/modals/signUpModal.tsx'
import SignInModal from '@Components/modals//signInModal.tsx'

// Scss
import '@Components/header/header.scss'
import '@Components/footer/footer.scss'
import '@Components/home/home.scss'
import '@Components/modals/modals.scss'

const App: React.FunctionComponent = () => {

  // const [isActive, setIsActive] = useState(false)

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

            <Link className = 'header__list-element' to = {ROUTES.SIGNUP}>
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

// function SignUp() {
//   return <SignUpModal />;
// }

export default App;