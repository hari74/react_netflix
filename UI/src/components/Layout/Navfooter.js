import React from 'react';
import './navfooter.css';
import { Link } from 'react-router-dom';


const Navfooter = () => {
    return (
        
        <div className='Nav_logo1'>
          <Link to='/'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt=''/></Link>
          <Link to='/signin'><button>Sign In</button></Link>  
        </div>
       
        
    );
};

export default Navfooter;