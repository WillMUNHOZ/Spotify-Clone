import Card from '../Card/Card'
import Section from '../Sections/Sections'

import HeJ from '../../assets/img/Artist/H&J.jpeg'
import JeM from '../../assets/img/Artist/J&M.jpeg'
import MeK from '../../assets/img/Artist/M&K.jpeg'
import MCTuto from '../../assets/img/Artist/MCTuto.jpeg'
import MenosEMais from '../../assets/img/Artist/MenosEMais.jpeg'
import ZNeC from '../../assets/img/Artist/ZeNeto&Cristiano.jpeg'

function ArtistSection () {

    const cards = [
            <Card photo={HeJ} title={'Henrique & Juliano'} content={'Artista'} typeCard={'circle'}/>,
            <Card photo={JeM} title={'Jorge & Mateus'} content={'Artista'} typeCard={'circle'}/>,
            <Card photo={MCTuto} title={'MC Tuto'} content={'Artista'} typeCard={'circle'}/>,
            <Card photo={ZNeC} title={'Zé Neto & Cristiano'} content={'Artista'} typeCard={'circle'}/>,
            <Card photo={MenosEMais} title={'Grupo Menos É Mais'} content={'Artista'} typeCard={'circle'}/>,
            <Card photo={MeK} title={'Matheus & Kauan'} content={'Artista'} typeCard={'circle'}/>
    ]
    return (
        <Section 
            title={'Artistas populares'}
            showAll={true}
            cards={cards}
        />
    )
}

export default ArtistSection