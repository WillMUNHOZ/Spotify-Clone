import Card from '../Card/Card'
import Section from '../Sections/Sections'

import TopSongGlobal from '../../assets/img/TopMusics/TopSongGlobal.jpg'
import TopSongUSA from '../../assets/img/TopMusics/TopSongUSA.jpg'
import TopGlobal from '../../assets/img/TopMusics/TopGlobal.jpg'
import TopUsa from '../../assets/img/TopMusics/TopUsa.jpg'
import ViralGlobal from '../../assets/img/TopMusics/ViralGlobal.jpg'
import ViralUsa from '../../assets/img/TopMusics/ViralUsa.jpg'


function TopMusics () {

    const cards = [
            <Card photo={TopSongGlobal} content={'Mundo: seu relatõrio semanal das faixas mais tocadas no mundo.'} typeCard={'square'}/>,
            <Card photo={TopSongUSA} content={'Estados Unidos: seu relatório semanal das faixas mais tocadas no momento.'} typeCard={'square'}/>,
            <Card photo={TopGlobal} content={'Mundo: seu relatório diário das faixas mais tocadas no momento.'} typeCard={'square'}/>,
            <Card photo={TopUsa} content={'Estados Unidos: seu relatório diário das faixas mais tocadas no momento.'} typeCard={'square'}/>,
            <Card photo={ViralGlobal} content={'Mundo: seu relatório diário das faixas que viralizaram.'} typeCard={'square'}/>,
            <Card photo={ViralUsa} content={'Estados Unidos: seu relatório diário das faixas que viralizaram.'} typeCard={'square'}/>,
    ]
    return (
        <Section 
            title={'Paradas em destaque'}
            cards={cards}
        />
    )
}

export default TopMusics