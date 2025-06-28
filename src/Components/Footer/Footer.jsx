import IconSocial from '../Button/IconSocial/IconSocial'
import style from './Footer.module.css'

import IconHome from '../Button/IconHome/IconHome'


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.nav}>
                <div>
                    <h4>Empresa</h4>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Empregos</a>
                    </li>
                    <li>
                        <a href="#">For the Record</a>
                    </li>
                </div>
                <div>
                    <h4>Comunidades</h4>
                    <li>
                        <a href="#">Para Artistas</a>
                    </li>
                    <li>
                        <a href="#">Desenvolvedores</a>
                    </li>
                    <li>
                        <a href="#">Publicidade</a>
                    </li>
                    <li>
                        <a href="#">Investidores</a>
                    </li>
                    <li>
                        <a href="#">Fornecedores</a>
                    </li>
                </div>
                <div>
                    <h4>Links úteis</h4>
                    <li>
                        <a href="#">Suporte</a>
                    </li>
                    <li>
                        <a href="#">Aplicativel móvel grátis</a>
                    </li>
                </div>
                <div>
                    <h4>Planos do Spotify</h4>
                    <li>
                        <a href="#">Premium Individual</a>
                    </li>
                    <li>
                        <a href="#">Premium Duo</a>
                    </li>
                    <li>
                        <a href="#">Premium Família</a>
                    </li>
                    <li>
                        <a href="#">Premium Universitário</a>
                    </li>
                    <li>
                        <a href="#">Spotify Free</a>
                    </li>
                </div>

                <div className={style.social}>
                    <IconSocial type={'instagram'} />
                    <IconSocial type={'twitter'} />
                    <IconSocial type={'facebook'} />
                </div>
            </div>
            <div className={style.copyright}>
                <p>© 2025 Spotify William Munhoz</p>
            </div>


        </div>

    )
}

export default Footer