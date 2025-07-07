import { useEffect, useRef, useState } from 'react'
import './App.css'
import closeside from './assets/chevrons-left-svgrepo-com.svg'
import settingimg from './assets/dot-menu-more-2-svgrepo-com.svg'
import navimg from './assets/navigate-svgrepo-com.svg'
import searchimg from './assets/search-alt-svgrepo-com.svg'
import Discoverybutton from './components/sidebar/discoverybutton'
import emoji from './assets/angry-emoji-dislike-expression-emoticons-svgrepo-com.svg'
import Searchbar from './components/searchbar/searchbar'
import SidebarChats from './components/sidebar/sidebarchats'
import Profilesection from './components/sidebar/profilesection'
import Card from './components/card'

//import { useDragControls } from "motion-v";
import { useDragControls, motion, useScroll, Motion } from 'motion-v'
import ScrollLinked from './components/test'
import Mainchats from './components/mainchats'


function App() {
  const [data, setdata] = useState([]);
  const [open, setasopen] = useState(false);
  const containerReference = useRef<HTMLDivElement>(null);

  /* <script setup>
import { useDragControls, motion } from 'motion-v'

const controls = useDragControls()
</script> */

  /*
    useEffect(() => {
  
      const container = containerReference.current;
      if (!container) return;
      if(container) {
        console.log("our scroll container is here");
      }
  
  
      let startY: number;
      let startX: number;
      let scrollLeft: number;
      let scrollTop: number;
      let isDown = false;
  
      
  
      const mouseIsDown = (e: MouseEvent) => {
        console.log("mouseIsDown the first?", isDown)
        isDown = true;
        startY = e.pageY - container.offsetTop;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        scrollTop = container.scrollTop;
        console.log("mouseIsDown the second?", isDown)
        console.log("startY", startY);
        console.log("startX", startX);
        console.log("srollLeft", scrollLeft);
        console.log("srollTop", scrollTop);
      }
      const mouseUp = () => {
        isDown = false;
      }
      const mouseLeave = () => {
        isDown = false;
      }
      const mouseMove = (e: MouseEvent) => {
        if (isDown) {
          e.preventDefault();
          //Move vertcally
          const y = e.pageY - container.offsetTop;
          const walkY = y - startY;
          container.scrollTop = scrollTop - walkY;
  
          //Move Horizontally
          const x = e.pageX - container.offsetLeft;
          const walkX = x - startX;
          container.scrollLeft = scrollLeft - walkX;
  
        };
  
        container.addEventListener('mousedown', mouseIsDown);
        container.addEventListener('mouseup', mouseUp)
        container.addEventListener('mouseleave', mouseLeave);
        container.addEventListener('mousemove', mouseMove);
  
        return () => {
          container.addEventListener('mousedown', mouseIsDown);
          container.addEventListener('mouseup', mouseUp)
          container.addEventListener('mouseleave', mouseLeave);
          container.addEventListener('mousemove', mouseMove);
        }
      }
    }, []);*/

  const controls = useDragControls()

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




  /*  {data.map((item) => {
              <div key={data.id}>
                
              </div>
            })} */

  return (
    <>
      <div className='main maindivi'>
        {!open ? (<div className='sidebar'>
          <div className='sidebar-list'>
            <div className='nameheader'>
              <p className='nametext'>charAi</p>
              <div className='closesidebar'>
                <div>
                  <img className='closeimg' onClick={handlesidebarOpen} src={closeside}></img>
                </div>
              </div>
            </div>
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
        <div className='mainApp'>
          <div className='containermain'>
            <div className='welcomecol'>
              <p className='welcometext'>Welcome back</p>
              <div className='welcomerow'>
                <img src={emoji} className='emoji'></img>
                <p className='welcomeusername'>mtintti</p>
                </div>
            </div>
            <div className='headername'> suggested chats</div>

            <Mainchats />

            {/*<div className='mainchats'>
                {cardtexts.map((item) => (/*<Card key={item.id}
                  name={item.name} header={item.header} text={item.text} />
                  <Card key={item.id} name={item.name} header={item.header} text={item.text} />))}
              </div>*/}
            {/*<div id='items-container' className='sroll' ref={containerReference}>*/ /* id='items-container' ref={containerReference} */}
            {/*<div className="mainchats" > 
                {cardtexts.map((item) => (
                  <Card
                    key={item.id}
                    name={item.name}
                    header={item.header}
                    text={item.text}
                  />
                ))}
              </div>*/}

          </div>
        </div>
      </div>
    </>
  )
}

export default App


//misc code.
{/*<div className='card'>
                <div className='cardheader'>
                  <div className='profile'></div>
                  <div className='name'> Astarion</div>
                </div>
                <div className='cards-text'>
                  <p>he is charming rogue and a ass. he is a vamp and he wants to have a treat from you. Can you be an frend this traumaticed but strong cutie needs?</p>
                </div>
              </div>*/}
{/*<Card name={cardtexts.} text={cardtexts.text}/>*/ }
{/* we iterate over the cardtexts to our card components and show them in props here  */ }