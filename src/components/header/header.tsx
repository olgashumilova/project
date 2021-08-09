import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import ROUTES from '@Components/routes.ts'

// Semantic UI (for modal window)
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

// SweetAlert 2
import Swal from "sweetalert2";

// Components
import HomeComponent from '@Components/home/home.tsx'
import FooterComponent from '@Components/footer/footer.tsx'
import UserPage from '@Components/userPage/userPage.tsx'
import EditUserPage from '@Components/editUserPage/editUserPage.tsx'

// Modals
import SignUpModal from '@Components/modals/signUpModal.tsx'
import SignInModal from '@Components/modals/signInModal.tsx'

// Scss
import '@Components/header/header.scss'
import '@Components/footer/footer.scss'
import '@Components/home/home.scss'
import '@Components/modals/modals.scss'
import '@Components/userPage/userPage.scss'
import '@Components/editUserPage/editUserPage.scss'

const App: React.FunctionComponent = () => {

  const [showButtons, setShowButtons] = useState(false)

  const isSignedIn = useSelector(state => state.isSignedIn)

  const userName = localStorage.getItem('username')

  useEffect(() => {
    if (isSignedIn) {
      setShowButtons(true)
    } else {
      setShowButtons(false)
    }
  }, [isSignedIn])

  useEffect(() => {
    if (userName) {
      setShowButtons(true)
    } else {
      setShowButtons(false)
    }
  }, [userName])

  const logOut = () => {
    localStorage.clear()
    setShowButtons(false)
    Swal.fire('You\'ve signed out!')
  }

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

            <Link className = 'header__list-element' to = {showButtons ? ROUTES.ABOUT : ROUTES.SIGNIN}>
              <li className = 'header__link'>
                About
              </li>
            </Link>

              {showButtons ? (
                <div className = 'header__nav'>
                  <div className = 'header__list'>
                    <Link className = 'header__list-element' to = {ROUTES.USER}>
                      <div className = 'header__user-icon'></div>
                      <p className = 'header__user-name'>Hello, {userName}</p>
                    </Link>
                
                    <Link className = 'header__list-element' to = {ROUTES.CART}>
                        <button className = 'header__cart-icon'></button>
                    </Link>
                
                    <Link className = 'header__list-element' to = {ROUTES.HOME}>
                        <button className = 'header__logout-icon' onClick = {() => logOut() }></button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className = 'header__nav'>
                  <div className = 'header__list'>
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
                  </div>
                </div>
              )}
            
          </ul>
        </div>
      </header>
      <Switch>
        <Route path = {ROUTES.USER}>
          <User />
        </Route>
        <Route path = {ROUTES.EDIT_USER}>
          <EditUserPage />
        </Route>
        <Route path = {ROUTES.SIGNUP}>
          <SignUpModal />
        </Route>
        <Route path = {ROUTES.SIGNIN}>
          <SignInModal />
        </Route>
        <Route path = {ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path = {ROUTES.PRODUCTS}>
          <Products />
        </Route>
        <Route path = {ROUTES.HOME}>
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

function User() {
  return <UserPage />;
}

export default App;