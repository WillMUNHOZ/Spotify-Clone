import Card from '../Card/Card'
import Section from '../Sections/Sections'

import TodayTopHits from '../../assets/img/Playlist/TodayTopHits.jpeg'
import BigOnTheInternet from '../../assets/img/Playlist/BigOnTheInternet.jpeg'
import SoftPopHits from '../../assets/img/Playlist/SoftPopHits.jpeg'
import phonk from '../../assets/img/Playlist/phonk.jpeg'
import RapCaviar from '../../assets/img/Playlist/RapCaviar.jpeg'
import VivaLatino from '../../assets/img/Playlist/VivaLatino.jpeg'



function PlaylistSection () {

    const cards = [
            <Card photo={TodayTopHits} content={'The hottest 50. Cover: Billie Eilish'} typeCard={'square'}/>,
            <Card photo={BigOnTheInternet} content={'iykyk'} typeCard={'square'}/>,
            <Card photo={SoftPopHits} content={'Warm familiar pop you know and love. Cover: Adele'} typeCard={'square'}/>,
            <Card photo={phonk} content={'the beat of your drift'} typeCard={'square'}/>,
            <Card photo={RapCaviar} content={'Music from J. Cole, Kendrick Lamar and Gunna.'} typeCard={'square'}/>,
            <Card photo={VivaLatino} content={"Today's top Latin hits, elevando nuestra música. Cover: Bad Bunny"} typeCard={'square'}/>,
    ]
    return (
        <Section 
            title={'Playlists from our editors'}
            showAll={true}
            cards={cards}
        />
    )
}

export default PlaylistSection