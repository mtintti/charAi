import React from 'react'
import CharacterIntro from './characterIntro'
import Mainchats from './mainchats'
import '../App.css'
import emoji from '../assets/angry-emoji-dislike-expression-emoticons-svgrepo-com.svg'


export default function Frontpage() {
    return (
        <div className='mainApp'>
            <div className='containermain'>
                <div className='welcomecol'>
                    <p className='welcometext'>Welcome back</p>
                    <div className='welcomerow'>
                        <img src={emoji} className='emoji'></img>
                        <p className='welcomeusername'>mtintti</p>
                    </div>
                </div>
                <div>
                    <CharacterIntro />
                </div>
                <div className='maincont'>
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
    )
}
