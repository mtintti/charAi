import React, { useState } from 'react'
import '../App.css'
import Profilesection from './sidebar/profilesection'
import SidebarChats from './sidebar/sidebarchats'
import Searchbar from './searchbar/searchbar'
import Discoverybutton from './sidebar/discoverybutton'
// img
import closeside from '../assets/chevrons-left-svgrepo-com.svg'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [open, setasopen] = useState(false);

    const handlesidebarOpen = () => {
        console.log("sidebar opened!")
        setasopen(true);
        console.log("bar is ??: " + open)
    }

    const handlesidebarClose = () => {
        console.log("sidebar closed!")
        setasopen(false);
        console.log("bar is ??: " + open)
    }

    return (
        <>
            {!open ? (<div className='sidebar'>
                <div className='sidebar-list'>
                    <div className='nameheader'>
                        <Link to="/">
                            <p className='nametext'>charAi</p>
                        </Link>
                        <div className='closesidebar'>
                            <div>
                                <img className='closeimg' onClick={handlesidebarOpen} src={closeside}></img>
                            </div>
                        </div>
                    </div>
                    {/*<Route path="/discover" element={<Discoverybutton/>}/> <Discoverybutton />*/}
                    <Discoverybutton />
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

                        <Searchbar />
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
                    <SidebarChats />
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
                <Profilesection />

            </div>) : (<div className='sidebarclosed'>
                <div className='nameheader'>
                    <p className='nametext'> </p>
                    <div className='closesidebarpressed'>
                        <div>
                            <img className='closeimgpressed' onClick={handlesidebarClose} src={closeside}></img>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}


