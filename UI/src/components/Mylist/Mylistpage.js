import React from 'react';
import Navbars from '../Navbar/Navbars';
import FooterHome from '../../HomepageFooter/FooterHome';
import Mylist from './Mylist';
import '../Mylist/mylistpage.css'

const Mylistpage = () => {
    return (
        <div>
             <Navbars/>
             <div className='mylist_box'>
         {/* <h1>my list</h1> */}
             <Mylist/>
             </div>
             
             <FooterHome/>
        </div>
    );
};

export default Mylistpage;