import React, { Component, ErrorInfo, ReactNode } from "react";
import  { Redirect } from "react-router-dom"
import {ROUTES} from './components/routes'
import './App.css';
import Header from './components/header/header'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class App extends Component <Props, State> {
  public state: State = {
    hasError: false
  };
  
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
        <Redirect to = {ROUTES.HOME} />
      return (
        <div className = 'modal'>
            <p>Sorry.. there was an error</p>
        </div>
      )
    } 

    return (
      <div className = 'wrap'>
         <Header/>
      </div>
    )
  }
}

export default App;


  





