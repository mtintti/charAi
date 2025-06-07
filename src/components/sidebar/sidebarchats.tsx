import settingimg from '../../assets/dot-menu-more-2-svgrepo-com.svg'
import './sidebarchats.css'


const SidebarChats = () => {

    return(
        <div className='sidebarChats'>
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
            </div>
    );
};

export default SidebarChats;