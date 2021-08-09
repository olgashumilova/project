// Logo
import ubisoftLogo from '@Assets/gameCompaniesLogos/ubisoftLogo.png'
import rockstarGamesLogo from '@Assets/gameCompaniesLogos/rockstarGamesLogo.png'
import epicGamesLogo from '@Assets/gameCompaniesLogos/epicGamesLogo.png'

const FooterComponent: React.FunctionComponent = () => {
    return (
        <footer className = 'footer'>
            <p className = 'footer__title'>Incredible Convinient</p>
            <div className = 'footer__icons'>
                <a className = 'footer__link' href = 'https://www.ubisoft.com/ru-ru/'><img src = {ubisoftLogo} alt = 'Ubisoft icon'/></a>
                <a className = 'footer__link' href = 'https://www.epicgames.com/store/ru/'><img src = {epicGamesLogo} alt = 'Epic games icon'/></a>
                <a className = 'footer__link' href = 'https://www.rockstargames.com/'><img src = {rockstarGamesLogo} alt = 'Rockstar games icon'/></a>
            </div>
        </footer>
    )
}

export default FooterComponent