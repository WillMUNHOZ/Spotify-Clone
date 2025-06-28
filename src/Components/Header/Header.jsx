import IconSpotify from '../Button/IconSpotify/IconSpotify';
import IconHome from '../Button/IconHome/IconHome';
import iconSearch from '../../assets/img/icons/search.svg'
import IconNav from '../../assets/img/icons/nav.png'
import style from './Header.module.css';
import Button from '../Button/Button';

function Header() {
    return (
        <div className={style.header}>
            <IconSpotify />
            <div className={style.search}>
                <IconHome />
                <div class={style.inputContainer}>
                    <img src={iconSearch} alt="" />
                    <input type="text" placeholder="O que você quer ouvir?" />
                    <img className={style.nav} src={IconNav} alt="" />
                </div>
            </div>

            <div className={style.login}>
                <a className={style.signup} href="#">inscrever-se</a>
                <Button size={'big'}>
                    Entrar
                </Button>
            </div>
        </div>
    )
}

export default Header;