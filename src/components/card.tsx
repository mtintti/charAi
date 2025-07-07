
import './card.css';


export default function Card(props: { name: string; text: string; header: string }) {





    return (
       //<div className='container'>
            <div className='card'>
                <div className='cardheader'>
                    <div className='profile-card'></div>
                    <div className='name'>{props.name}</div>
                </div>
                <div className='cards-text'>
                    <p className='header-text'>{props.header}</p>
                    <p>{props.text}</p>
                </div>
            </div>
        //</div>
    );
}
