import Card from '../Card/Card'
import Section from '../Sections/Sections'

import LeoFoguete from '../../assets/img/Radio/Radio-LeoFoguete.jpeg'
import GusttavoLima from '../../assets/img/Radio/Radio-GusttavoLima.jpeg'
import MCTuto from '../../assets/img/Radio/Radio-MCTuto.jpeg'
import MariliaMendonca from '../../assets/img/Radio/Radio-MariliaMendonça.jpeg'
import HenryFreitas from '../../assets/img/Radio/Radio-HenryFreitas.jpeg'
import Jirayauai from '../../assets/img/Radio/Radio-Jirayauai.jpeg'

function RadioSection () {
    const cards = [
        <Card photo={LeoFoguete} content={'Com Grelo, Felipe Amorim, Thiago Freitas e mais'} typeCard={'square'}/>,
        <Card photo={GusttavoLima} content={'Com Murilo Huff, Matheus & Kauan, Luan Pereira e mais'} typeCard={'square'}/>,
        <Card photo={MCTuto} content={'Com MC Joãozinho VT, MC Marks, MC PH e mais'} typeCard={'square'}/>,
        <Card photo={MariliaMendonca} content={'Com Zé Neto & Cristiano, Henrique & Juliano, Matheus & Kauan e mais'} typeCard={'square'}/>,
        <Card photo={HenryFreitas} content={'Com Felipe Amorim, Thiago Freitas, Nuzio Medeiros e mais'} typeCard={'square'}/>,
        <Card photo={Jirayauai} content={'Com Noobreak, Wam Baster, Vinicius Cavalcante e mais'} typeCard={'square'}/>,
    ]

    return (
        <Section 
            title={'Artistas populares'}
            showAll={true}
            cards={cards}
        />
    )
}

export default RadioSection