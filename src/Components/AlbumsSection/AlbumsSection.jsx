import Card from '../Card/Card'
import Section from '../Sections/Sections'

import Matue from '../../assets/img/Cards/333.jpeg'
import whitenoise from '../../assets/img/Cards/WhiteNoise.jpeg'
import oceuexplicatudo from '../../assets/img/Cards/OCeuExplicaTudo.jpeg'
import checkIn from '../../assets/img/Cards/Check-In.jpeg'
import barbie from '../../assets/img/Cards/Barbie.jpeg'
import embaixador from '../../assets/img/Cards/Embaixador.jpeg'


function AlbumsSection () {

    const cards = [
            <Card photo={Matue} title={'333'} content={'Matuê'} typeCard={'square'}/>,
            <Card photo={whitenoise} title={'White Noise (Sleep & Relaxation Sounds)'} content={'Sleepy John'} typeCard={'square'}/>,
            <Card photo={oceuexplicatudo} title={'O Céu Explica Tudo (Ao Vivo)'} content={'Henrique & Juliano'} typeCard={'square'}/>,
            <Card photo={checkIn} title={'Zé Neto & Cristiano'} content={'Artista'} typeCard={'square'}/>,
            <Card photo={barbie} title={'Grupo Menos É Mais'} content={'Artista'} typeCard={'square'}/>,
            <Card photo={embaixador} title={'Embaixador Acústico - Ao Vivo'} content={'Artista'} typeCard={'square'}/>
    ]
    return (
        <Section 
            title={'Singles e álbuns que todo mundo gosta'}
            showAll={true}
            cards={cards} 
        />
    )
}

export default AlbumsSection