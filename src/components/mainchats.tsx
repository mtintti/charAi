
import { useRef } from 'react';
import Card from './card';
import './mainchats.css';
import {
    animate,
    motion,
    MotionValue,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "motion/react"

// our card objects texts
const cardtexts = [
    {
        id: 1,
        name: "Astarion",
        header: "Spicy and sweet",
        text: "He is charming rogue and a ass. he is a vamp and he wants to have a treat from you. Can you be an frend this traumaticed but strong cutie needs?",
    },
    {
        id: 2,
        name: "Bastarion",
        header: "Sweet but a troublemaker in batform",
        text: "He is shown to be a fully white large fruitbat with his white head of hair",
    },
    {
        id: 3,
        name: "???",
        header: "???",
        text: "???",
    },
    {
        id: 3,
        name: "???",
        header: "???",
        text: "???",
    },
    {
        id: 4,
        name: "???",
        header: "???",
        text: "???",
    },
    {
        id: 5,
        name: "???",
        header: "???",
        text: "???",
    },
    {
        id: 6,
        name: "???",
        header: "???",
        text: "???",
    }
];

export default function Mainchats() {
    const ref = useRef(null)
    const { scrollXProgress } = useScroll({ container: ref })
    //const maskImage = useScrollOverflowMask(scrollXProgress) style={{ maskImage }}

    return (
        <div id="example" className='divid'>
            <ul className='mainul' ref={ref}>
                    {cardtexts.map((item) => (
                        <li className='maindiv'> 
                            <Card key={item.id} name={item.name} header={item.header} text={item.text} />
                        </li>
                 ))}
            </ul>
            {/*<StyleSheet />*/}
        </div>


       /* <div id="example">
            <motion.ul ref={ref}>
                <li id="style">Sweet but a troublemaker in batform</li>
                <li id="style">Sweet but a troublemaker in batform</li>
                <li id="style">Sweet but a troublemaker in batform</li>
                <li id="style">Sweet but a troublemaker in batform</li>
                
            </motion.ul>
            <StyleSheet />
        </div>*/

    )
}

/*  {cardtexts.map((item) => (
                  <Card key={item.id} name={item.name} header={item.header} text={item.text} />))} */

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`
/*function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    )

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            )
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            )
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            )
        }
    })

    return maskImage
}
*/

/**
 * ==============   Styles   ================
 */

/*
function StyleSheet() {
    return (
        /*<style>{`
            #example {
              max-width: 1100px;
              position: relative;
            }


            #example ul {
                display: flex;
                list-style: none;
                overflow-x: scroll;
                padding: 20px 0;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #example div {
                flex: 0 0 200px;
                background: var(--accent);
                border-radius: 10px;
                padding: 10px;           
                box-sizing: border-box;
                background-color: aliceblue;
                height: 360px;
            }

    `}</style>
    )
}*/