import React from 'react'

import pcLogo from './images/logo/pcLogo.png'
import playstationLogo from './images/logo/playstationLogo.png'
import xboxLogo from './images/logo/xboxLogo.png'

const HomeComponent: React.FunctionComponent = () => {
    return (
        <main className = 'home'>

            <div className = 'home__search'>
               <input className = 'home__input' type="text"></input>
            </div>

            <div className = 'home__main'>
               <div className = 'home__categories'>
                   <p className = 'home__title'>Categories</p>
                   <div className = 'home__categories-logos'>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {pcLogo} alt = "Pc logo"/>
                          <p className = 'home__text'>PC</p>
                       </div>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {playstationLogo} alt = "Playstation Logo"/>
                          <p className = 'home__text'>Playstation 5</p>
                       </div>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {xboxLogo} alt = "Xbox logo"/>
                          <p className = 'home__text'>XBox One</p>
                       </div>  
                   </div>
               </div>
               <div>
                   <p className = 'home__title'>New games</p>
                   <div>
                       <img src="" alt="" />
                       <img src="" alt="" />
                       <img src="" alt="" />
                   </div>
               </div>
            </div>
            <div></div>
        </main>
    )
}

export default HomeComponent
