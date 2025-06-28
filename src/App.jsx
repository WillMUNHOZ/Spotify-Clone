import './App.css'
import ArtistSection from './Components/ArtistSection/ArtistSection'
import AlbumsSection from './Components/AlbumsSection/AlbumsSection'
import RadioSection from './Components/RadioSection/RadioSection'
import TopMusics from './Components/TopMusics/TopMusics'
import PlaylistSection from './Components/PlaylistSection/PlaylistSection'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import SignupFooter from './Components/SignupFooter/SignupFooter'


function App() {

  return (
    <>
      <div className='body'>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className='sidebar'>
            <Sidebar />
          </div>

          <div className='mainContent'>
            <ArtistSection />
            <AlbumsSection />
            <RadioSection />
            <TopMusics />
            <PlaylistSection />
            <Footer />
          </div>
        </div>

        <div className="footer">
          <SignupFooter />
        </div>
      </div>
    </>
  )
}

export default App
