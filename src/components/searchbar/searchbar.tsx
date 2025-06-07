import searchimg from '../../assets/search-alt-svgrepo-com.svg'
import './searchbar.css'

const Searchbar= ()=> {

    return(
        <div className='searchbarcont'>
                <div className='searchbar'>
                  <img className='searchimg' src={searchimg}></img>
                  <form className='searchtext'>
                    <input type='text' placeholder="Search.."></input>
                  </form>
                </div>
              </div>
    );
};

export default Searchbar;