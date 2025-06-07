import navimg from '../../assets/navigate-svgrepo-com.svg'
import './discoverybutton.css'

const Discoverybutton = () => {

    return (
        <div className='Discovery'>
            <button className='discoverbar'>
                <img className='navimg' src={navimg}></img>
                <div className='discovertext'>
                    <p>Discover</p>
                </div>
            </button>

        </div>
    );
};

export default Discoverybutton;
