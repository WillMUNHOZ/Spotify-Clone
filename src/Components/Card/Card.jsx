import PlayButton from '../Button/Play/PlayButton'
import style from './Card.module.css'

function Card({photo, title, content, typeCard}) {
    return (
        <div id={style.card}>
            <img className={style[typeCard]} src={photo} alt="" />
            <h2>{title}</h2>
            <p>{content}</p>
            <div className={style.btn}> 
                <PlayButton />
            </div>
        </div>
    )
}

export default Card