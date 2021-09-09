import React, { Component, ErrorInfo, ReactNode } from "react";
import  { Redirect } from "react-router-dom"
import ROUTES from '@Components/routes.ts'
import Header from '@Components/header/header.tsx'
import {IProps, IState} from '@/interfaces.ts'

import '@/App.css'

class App extends Component <IProps, IState> {
  public state: IState = {
    hasError: false
  };
  
  public static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): JSX.Element {
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


  





