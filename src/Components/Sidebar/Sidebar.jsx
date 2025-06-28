import Button from '../Button/Button'
import style from './Sidebar.module.css'
import iconNew from '../../assets/img/icons/icon-mais.svg'
import iconLibrari from '../../assets/img/icons/icon-biblioteca.png'
import iconGlobe from '../../assets/img/icons/icon-globe.png'

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.header}>
                <div className={style.librari}>
                    <img src={iconLibrari} alt="" />
                    <h4>Sua Biblioteca</h4>
                </div>
                <div className={style.iconNew}>
                    <img src={iconNew} alt="" />
                </div>
            </div>
            <div className={style.card}>
                <h4>Crie sua primeira playlist</h4>
                <p>É facil, vamos te ajudar.</p>
                <div className={style.btn}>
                    <Button size={'medium'}>
                        Criar Playlist
                    </Button>
                </div>
            </div>
            <div className={style.card}>
                <h4>Que tal seguir um podcast novo?</h4>
                <p>Avisaremos você sobre novos epiódios.</p>
                <div className={style.btn}>
                    <Button size={'medium'}>
                        Explore podcasts
                    </Button>
                </div>
            </div>
            <div className={style.footer}>
                <div>
                    <ul>
                        <li>
                            <a href="#">Legal</a>
                        </li>
                        <li>
                            <a href="#">Segurança e Centro de privacidade</a>
                        </li>
                        <li>
                            <a href="#">Política de privacidade</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                        <li>
                            <a href="#">Sobre anúncios</a>
                        </li>
                        <li>
                            <a href="#">Acessibilidade</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a className={style.cookie} href="#">Cookies</a>
                </div>
                <div className={style.btnLanguage}>
                    <Button size={'medium'}>
                        <img src={iconGlobe} alt="" />
                        Português do Brasil
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar