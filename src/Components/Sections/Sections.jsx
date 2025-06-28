import style from './Sections.module.css'

function Section ({title, cards, showAll}) {

    function showAllBtn() {
        if(showAll) {
            return (
                <a className={style.more} href="#">Mostrar tudo</a>
            ) 
        }
    }

    return (
        <div className={style.section}>
            <div className={style.header}>
                <a className={style.title} href='#'>{title}</a>
                {showAllBtn()}
            </div>
            <div className={style.container}>
                {cards.map((card, index) => (
                    <div key={index} className={style.card}>{card}</div>
                ))}
            </div>
        </div>
    )
}

export default Section