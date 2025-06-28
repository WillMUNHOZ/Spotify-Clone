import style from './IconSpotify.module.css'
import spotify from '../../../assets/img/icons/spotify.svg'

function IconSpotify () {
    return (
        <a 
            href="../../../../index.html"
            className={style.iconbtn}
        >
            <img src={spotify} alt="Icon-Spotify" />
        </a>
    )
}

export default IconSpotify