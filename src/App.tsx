import { useState } from 'react'
import './App.css'
import closeside from './assets/chevrons-left-svgrepo-com.svg'
import settingimg from './assets/dot-menu-more-2-svgrepo-com.svg'
import navimg from './assets/navigate-svgrepo-com.svg'
import searchimg from './assets/search-alt-svgrepo-com.svg'
import Discoverybutton from './components/sidebar/discoverybutton'
import Searchbar from './components/searchbar/searchbar'
import SidebarChats from './components/sidebar/sidebarchats'
import Profilesection from './components/sidebar/profilesection'

function App() {
  const [data, setdata] = useState([]);
  /*  {data.map((item) => {
              <div key={data.id}>
                
              </div>
            })} */

  return (
    <>
      <div className='main'>
        <div className='sidebar'>
          <div className='sidebar-list'>
            <div className='nameheader'>
              <p className='nametext'>charAi</p>
              <div className='closesidebar'>
                <div>
                  <img className='closeimg' src={closeside}></img>
                </div>
              </div>
            </div>
            <Discoverybutton/>

            {/*<div className='Discovery'>
              <button className='discoverbar'>
                <img className='navimg' src={navimg}></img>
                <div className='discovertext'>
                  <p>Discover</p>
                </div>
              </button>

            </div>
            */}

            {/* search */}
            <div className='spacer'>
              {/*<div className='searchbarcont'>
                <div className='searchbar'>
                  <img className='searchimg' src={searchimg}></img>
                  <div className='searchtext'>
                    <form>Search</form>
                  </div>
                </div>
              </div>*/}

              <Searchbar/>
            </div>


            {/*<div className='sidebarChats'>
              <div className='sbChats'>
                <div className='sbchatsDate'>today</div>
                <div className='invichat'>
                  <p className='profile'></p>
                  <p className='inviname'>vampire hunter</p>
                  <div className='settings-buttoncont'>
                    <button className='settings-button'>
                      <img className="settingimg" src={settingimg}></img>
                    </button>
                  </div>
                </div>
                <div className='sbChats'>
                  <div className='sbchatsDate'>yesterday</div>
                  <div className='invichat'>
                    <p className='profileA'></p>
                    <p className='inviname'>Astarion</p>
                    <div className='settings-buttoncont'>
                      <button className='settings-button'>
                        <img className="settingimg" src={settingimg}></img>
                      </button>
                    </div>
                  </div>

                  <div className='invichat'>
                    <p className='profilec'></p>
                    <p className='inviname'>cutie</p>
                    <div className='settings-buttoncont'>
                      <button className='settings-button'>
                        <img className="settingimg" src={settingimg}></img>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>*/}
            <SidebarChats/>
          </div>

          {/* profilesection *
          <div className='profilesect'>
            <div className='divider'></div>
            <div className='profilesecCont'>
              <div className='profile'></div>
              <div className='usernamehandler'>
                <div className='handler'>mtintti</div>
                <div className='username'>@manicmainiac233</div>
              </div>
            </div>
          </div>*/}
          <Profilesection/>

        </div>
        <div className='mainApp'>
          <p className='containermain'>hello from main chat side</p>
        </div>
      </div>
    </>
  )
}

export default App
