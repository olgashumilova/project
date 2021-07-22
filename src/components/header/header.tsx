import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {ROUTES} from '../routes'

// import Main from '../main/main'
import HomeComponent from '../home/home'
import FooterComponent from '../footer/footer'

// Scss
import './header.scss'
import '../footer/footer.scss'
import '../home/home.scss'

const App: React.FunctionComponent = () => {

  const [isVisible, setIsVisible] = useState(false)  

  const changeVisibility = () => {
    if (isVisible === false) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
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
            
            <li className = 'header__list-element' onClick = {() => setIsVisible(!isVisible)} onBlur = {changeVisibility}>    
                Products 
                <div className = 'triangle'></div>
                <div className = {isVisible ? 'dropdownMenu' : ''}>
                  <ul className = 'header__dropdown-list'>
                    <li className = 'header__dropdown-item' onClick = {() => alert('PC Page')}>PC</li>
                    <li className = 'header__dropdown-item' onClick = {() => alert('Playstation 5 Page')}>Playstation 5</li>
                    <li className = 'header__dropdown-item' onClick = {() => alert('XBox One Page')}>XBox One</li>
                  </ul>
                </div>
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