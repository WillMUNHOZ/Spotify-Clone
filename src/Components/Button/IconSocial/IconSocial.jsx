import style from './IconSocial.module.css'
import instagram from '../../../assets/img/icons/icon-instagram.svg'
import twitter from '../../../assets/img/icons/icon-twitter.svg'
import facebook from '../../../assets/img/icons/icon-facebook.svg'

function IconSocial({ type }) {
    const icons = {
        instagram: instagram,
        twitter: twitter,
        facebook: facebook
    }

    const icon = icons[type]

    return (
        <a className={style.iconbtn} href="#">
            <img src={icon} alt="" />
        </a>
    )
}

export default IconSocial;