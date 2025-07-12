import React, { useState } from 'react'
import './characterIntro.css'

import savoringemoji from '../assets/face-savoring-food-svgrepo-com.svg'
import parkcentral from '../assets/parkcentral-copy.jpg'

const characters = [
    {
        id: "1",
        text: "hey",
        image: parkcentral,

    },
    {
        id: "2",
        text: "hey from 2",
        image: parkcentral,

    },
    {
        id: "3",
        text: "hey from the last third",
        image: parkcentral,

    }
];

export default function CharacterIntro() {
    const [Hovered, isHovered] = useState(false);


    return (
        <div className='charmaincont'>

            {/*<div className='charscreens'>
                
                <img src={parkcentral} className='parkcentral'></img>
                <img src={parkcentral} className='parkcentral'></img>
                <img src={parkcentral} className='parkcentral'></img>
                <img src={parkcentral} className='parkcentral'></img>
            </div> style={Hovered ? {marginTop:10} : {}}*/}

            <div className="container">
                {/*<div className="box">
                    <span></span>
                    <div className="content">
                            <img src={parkcentral} className='parkcentral'></img>
                            {/* <div className='textone'>
                                kodsko
                            </div>}
                    </div>
                </div>*/}
                {/*{characters.map((item) => (
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <img src={parkcentral} className='parkcentral'></img>
                            <p className='text'>{item.text}</p>
                        </div>
                    </div>
                ))} */}
                <div className="box">
                    <span></span>
                    <div className="content">
                        <img src={parkcentral} className='parkcentral'></img>
                       
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <img src={parkcentral} className='parkcentral'></img>
                        
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <img src={parkcentral} id='parkcentralast' className='parkcentral'></img>
                        
                    </div>
                </div>
            </div>

            {/*<img src={savoringemoji} className='charselected'></img>

                <div className='numberbuttons'>
                    <button className='button'>1</button>
                    <button className='button'>2</button>
                    <button className='button'>3</button>
                    <button className='button'>4</button>
                </div>*/}

        </div>
    )
}
