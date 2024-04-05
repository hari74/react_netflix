import React from 'react';
import './registration.css'
import Navfooter from '../Layout/Navfooter';
import Regfooter from '../Layout/Regfooter';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        
        <div className="main-container">
            <Navfooter/>
        <div className='container-reg'>
       
<div className="main-one">
 <div className='reg-pic'>
    <img className='moniters' src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="" />
    </div>
 <div className="text-content">
    <p className='reg-steps'>STEP 1 OF 3</p>
    <h2>Finish setting up your account</h2>
    <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
    </div>
   <Link to="/Plan"> <button className='reg-btn'>Next</button> </Link>
  </div>


        </div>
        <Regfooter/>
        </div>
    );
};

export default Registration;