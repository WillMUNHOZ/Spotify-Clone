import style from './PlayButton.module.css'

function PlayButton () {
    return (
        <button className={style.btn}>
            <img width="100" height="100" src="https://img.icons8.com/material/play.png" alt="play--v1"/>
        </button>
    )
}

export default PlayButton