import React from 'react'

import iconChat from '@Assets/aboutPageIcons/icon-chat.svg'
import iconGamehubs from '@Assets/aboutPageIcons/icon-gamehubs.svg'
import iconLanguages from '@Assets/aboutPageIcons/icon-languages.svg'
import iconWorkshop from '@Assets/aboutPageIcons/icon-workshop.svg'
import iconController from '@Assets/aboutPageIcons/icon-controllers.svg'
import iconEarlyAccess from '@Assets/aboutPageIcons/icon-earlyaccess.svg'


const AboutPage: React.FunctionComponent = () => {
    return (
        <div className = 'about-page'>
            <p>We are constantly working to bring new updates and features to Game Store, such as:</p>

            <div className = 'about-page__main'>
                <div className = 'about-page__container'>
                    <img className = 'about-page__image' src = {iconChat}></img>
                    <p>Game Store Chat</p>
                    <p>Talk with friends or groups via text or voice without leaving Game Store. Videos, Tweets, GIFs and more are supported; use wisely.</p>
                </div>
                <div className = 'about-page__container'>
                    <img className = 'about-page__image' src = {iconGamehubs}></img>
                    <p>Game Hubs</p>
                    <p>Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.</p>
                </div>
                <div className = 'about-page__container'>
                    <img className = 'about-page__image' src = {iconLanguages}></img>
                    <p>Multilingual</p>
                    <p>Creating a global community is important to us, that is why our client supports 28 languages and counting.</p>
                </div>
                <div className = 'about-page__container'>
                    <img className = 'about-page__image' src = {iconWorkshop}></img>
                    <p>Game Store Workshop</p>
                    <p>Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.</p>
                </div>
                <div className = 'about-page__container'>
                    <img className = 'about-page__image' src = {iconController}></img>
                    <p>Controller Support</p>
                    <p>Game Store encourages developers to include controller support in their games including PlayStation, Xbox, and Nintendo controllers.</p>
                </div>
                <div className = 'about-page__container'>
                    <img className = 'about-page__image' src = {iconEarlyAccess}></img>
                    <p>Early Access to Games</p>
                    <p>Discover, play, and get involved with games as they evolve. Be the first to see what is coming and become part of the process.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutPage
