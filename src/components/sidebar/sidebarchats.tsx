import { useState } from 'react';
import settingimg from '../../assets/dot-menu-more-2-svgrepo-com.svg'
import './sidebarchats.css'
import { Link } from 'react-router-dom';


const SidebarChats = () => {

  const [settings, pressedsettings] = useState(false);

  const handlesettingsOpen = () => {
    console.log("settings pressed!");
    pressedsettings(prev => !prev);
    console.log("settings is ??: " + settings);
  }



  return (
    <div className='sidebarChats'>
      <div className='sbChats'>
        <div className='sbchatsDate'>today</div>
        <div className='invichat'>
          <p className='profile'></p>
          <p className='inviname'>vampire hunter</p>
          <div className='settings-buttoncont'>
            <button className='settings-button' onClick={handlesettingsOpen}>
              <img className="settingimg" src={settingimg}></img>
              {!settings ? '' :
                <div className='sidepopup' >
                  <div className="sidepopupcont">
                    <p className='firstsetting'>hey first setting</p>
                    <p className='removebutton'>remove</p>
                  </div>
                </div>}
            </button>
          </div>
        </div>
        <div className='sbChats'>
          <div className='sbchatsDate'>yesterday</div>
          <Link to="/chat">
          <div className='invichat'>
            <p className='profileA'></p>
            <p className='inviname'>Astarion</p>
            <div className='settings-buttoncont'>
              <button className='settings-button'>
                <img className="settingimg" src={settingimg}></img>
              </button>
            </div>
          </div>
          </Link>

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
    </div>
  );
};

export default SidebarChats;