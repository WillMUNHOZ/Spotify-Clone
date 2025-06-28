import style from './IconHome.module.css'
import home from '../../../assets/img/icons/home.svg'

function IconBtn() {
    return (
        <a
            href={'../../../../index.html'}
            className={style.iconbtn}
        >
            <img src={home} alt="Home" />
        </a>
    )
}

export default IconBtn