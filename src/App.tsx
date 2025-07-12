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
import CharacterIntro from './components/characterIntro'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Profile from './components/profile'
import Frontpage from './components/Frontpage'
import Chat from './components/chat'


function App() {
  const [data, setdata] = useState([]);

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




  /*useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);*/




  /*  {data.map((item) => {
              <div key={data.id}>
                
              </div>
            })} */

  return (
    <>
      <div className='main maindivi'>
        <Sidebar />
        <Routes>
          <Route path='/Profile' element={<Profile />} />
          <Route path='/' element={<Frontpage/>} />
          <Route path='chat' element={<Chat/>} />
        </Routes>
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