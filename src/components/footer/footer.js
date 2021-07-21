// import './footer.scss'
// Logo
import ubisoftLogo from './logo/ubisoftLogo.png'
import rockstarGamesLogo from './logo/rockstarGamesLogo.png'
import epicGamesLogo from './logo/epicGamesLogo.png'

const footerComponent = () => {
    return (
        <div className = 'footer__container'>
            <p className = 'footer__title'>Incredible Convinient</p>
            <div className = 'footer__icons'>
                <a href = 'https://www.ubisoft.com/ru-ru/'><img src = {ubisoftLogo} alt = 'Ubisoft icon'/></a>
                <a href = 'https://www.epicgames.com/store/ru/'><img src = {epicGamesLogo} alt = 'Epic games icon'/></a>
                <a href = 'https://www.rockstargames.com/'><img src = {rockstarGamesLogo} alt = 'Rockstar games icon'/></a>
            </div>
        </div>
    )
}

export default footerComponent