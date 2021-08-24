import React, { useState, useEffect, Suspense } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

//Routes
import ROUTES from '@Components/routes.ts'

// Semantic UI (for modal window)
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

// SweetAlert2 (for good looking alert windows)
import Swal from "sweetalert2";

// Components
import HomeComponent from '@Components/home/home.tsx'
const FooterComponent = React.lazy(() => import('@Components/footer/footer.tsx'))
const UserPage = React.lazy(() => import('@Components/userPage/userPage.tsx'))
const EditUserPage = React.lazy(() => import('@Components/editUserPage/editUserPage.tsx'))
const PcProductsPage = React.lazy(() => import('@Components/products/productsPages/pcProductsPage.tsx'))
const PlaystationProductsPage = React.lazy(() => import('@Components/products/productsPages/playstationProductsPage.tsx'))
const XboxProductsPage = React.lazy(() => import('@Components/products/productsPages/xboxProductsPage.tsx'))
const CartPage = React.lazy(() => import('@Components/cart/cartPage.tsx'))
const AboutPage = React.lazy(() => import('@Components/aboutPage/aboutPage.tsx'))

// Modals
import EditGameCardModal from '@Components/modals/editGameCardModal.tsx'
const SignUpModal = React.lazy(() => import('@Components/modals/signUpModal.tsx'))
const SignInModal = React.lazy(() => import('@Components/modals/signInModal.tsx'))

// Scss
import '@Components/header/header.scss'
import '@Components/footer/footer.scss'
import '@Components/home/home.scss'
import '@Components/modals/modals.scss'
import '@Components/userPage/userPage.scss'
import '@Components/editUserPage/editUserPage.scss'
import '@Components/products/products.scss'
import '@Components/cart/cartPage.scss'
import '@Components/aboutPage/aboutPage.scss'

// API
import { getProductsAPI } from '@/api/api'

// Redux actions
import { getProductsArray } from '@/redux/actions/actions'

const App: React.FunctionComponent = () => {

  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  const cart = useSelector(state => state.cart)
  const isSignedIn = useSelector(state => state.isSignedIn)
  const user = useSelector(state => state.userProfile)

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

  async function getProducts() {
    try {
      await getProductsAPI.then((response) => {
          dispatch(getProductsArray(response.data))
      })
    } catch (error) {
        console.log(error);         
    }   
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Router>
      <header className = 'header'>
      <div className = 'modalportal'>{showModal? <EditGameCardModal/> : null}</div>
        <div className = 'header__title'>
          <h1>Game Store</h1>
        </div>
        <div className = 'burger-menu'>
          <Dropdown>
            <Dropdown.Menu className = 'header__dropdown'>
              <Link to = {ROUTES.HOME}>
                <Dropdown.Item className = 'dropdown-link'>Home</Dropdown.Item>
              </Link>
              <Link to = {ROUTES.PC_PAGE}>
                <Dropdown.Item className = 'dropdown-link'>PC</Dropdown.Item>
              </Link>
              <Link to = {ROUTES.PLAYSTATION_PAGE}>
                <Dropdown.Item className = 'dropdown-link'>Playstation 5</Dropdown.Item>
              </Link>
              <Link to = {ROUTES.XBOX_PAGE}>
                <Dropdown.Item className = 'dropdown-link'>XBox One</Dropdown.Item>
              </Link>
              {user.login === 'admin' || userName === 'admin' ? (
                <Dropdown.Item className = 'dropdown-link'>
                  <button className = 'dropdown-button' onClick = {() => setShowModal(!showModal)}>Create Card</button>
                </Dropdown.Item>
              ) : (
                <div>
                  <Link className = 'header__list-element' to = {ROUTES.CART}>
                    <Dropdown.Item className = 'dropdown-link'>
                      <button className = 'header__cart-icon'>
                        <p className = 'header__cart-icon-amount'>{cart.length}</p>
                      </button>
                    </Dropdown.Item>
                    
                  </Link>
                </div>
              )}
              <Link to = {ROUTES.SIGNIN}>
                <Dropdown.Item className = 'dropdown-link'>Sign In</Dropdown.Item>
              </Link>
              <Link to = {ROUTES.SIGNUP}>
                <Dropdown.Item className = 'dropdown-link'>Sign Up</Dropdown.Item>
              </Link>
              <Dropdown.Item className = 'dropdown-link'>
                <button className = 'dropdown-button' onClick = {() => logOut() }>Log Out</button>
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className = 'header__nav'>
          <ul className = 'header__list'>
            <Link className = ' header__list-element' to = {ROUTES.HOME}>
              <li className = 'header__link'>Home</li>
            </Link>
              <li className = 'header__list-element'>
                  <Dropdown text = 'Products'>
                    <Dropdown.Menu className = 'header__dropdown'>  
                      <Link to = {ROUTES.PC_PAGE}>
                        <Dropdown.Item className = 'dropdown-link'>PC</Dropdown.Item>
                      </Link>
                      <Link to = {ROUTES.PLAYSTATION_PAGE}>
                        <Dropdown.Item  className = 'dropdown-link'>Playstation 5</Dropdown.Item>
                      </Link>
                      <Link to = {ROUTES.XBOX_PAGE}>
                        <Dropdown.Item className = 'dropdown-link'>XBox One</Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
              </li>

            <Link className = 'header__list-element' to = {showButtons ? ROUTES.ABOUT : ROUTES.SIGNIN}>
              <li className = 'header__link'>
                About
              </li>
            </Link>

              {showButtons ? (
                <div className = 'header__list'>
                  <Link className = 'header__user-list-element' to = {ROUTES.USER}>
                    <div className = 'header__user-icon'></div>
                    <p className = 'header__user-name'>Hello, {userName || user.login}</p>
                  </Link>
                
                  {user.login === 'admin' || userName === 'admin' ? (
                    <div className = 'header__list'>
                      
                      <button className = 'header__create-card-button' onClick = {() => setShowModal(!showModal)}>Create Card</button>
                      
                      <Link className = 'header__list-element' to = {ROUTES.HOME}>
                        <button className = 'header__logout-icon' onClick = {() => logOut() }></button>
                      </Link>
                    </div>
                  ) : (
                    <div className = 'header__list'>
                      <Link className = 'header__list-element' to = {ROUTES.CART}>
                        <button className = 'header__cart-icon'><p className = 'header__cart-icon-amount'>{cart.length}</p></button>
                      </Link>
                  
                      <Link className = 'header__list-element' to = {ROUTES.HOME}>
                          <button className = 'header__logout-icon' onClick = {() => logOut() }></button>
                      </Link>
                    </div>
                  )}
                    
                </div>
              ) : (
                <div className = 'header__signin-list'>
                  <Link className = 'header__signin-list-element' to = {ROUTES.SIGNIN}>
                    <li className = 'header__link'>
                      Sign In
                    </li>
                  </Link>
                  <Link className = 'header__signin-list-element' to = {ROUTES.SIGNUP}>
                    <li className = 'header__link'>
                      Sign Up
                    </li>
                  </Link>
                </div>
              )}
          </ul>
        </div>
      </header>

      <Suspense fallback = {<div className = 'main-loader'></div>}>
        
        <Switch>
          <Route path = {ROUTES.CART}>
            <CartPage />
          </Route>

          <Route path = {ROUTES.PC_PAGE}>
            <PcProductsPage />
          </Route>

          <Route path = {ROUTES.XBOX_PAGE}>
            <XboxProductsPage />
          </Route>

          <Route path = {ROUTES.PLAYSTATION_PAGE}>
            <PlaystationProductsPage />
          </Route>

          <Route path = {ROUTES.USER}>
            <UserPage />
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
            <AboutPage />
          </Route>

          <Route path = {ROUTES.HOME}>
            <HomeComponent />
          </Route>
        </Switch>

        <FooterComponent />

      </Suspense>

    </Router>
  );
}

export default App;