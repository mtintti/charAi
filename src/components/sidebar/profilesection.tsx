import { Link } from 'react-router-dom';
import './profilesection.css'

const Profilesection = () => {

  return (
    <div className='profilesect'>
      <div className='divider'></div>
      <div className='profilesecCont'>
        <Link to="/Profile">
        <div className='profile'></div>
        <div className='usernamehandler'>
          <div className='handler'>mtintti</div>
          <div className='username'>@manicmaniac233</div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Profilesection;