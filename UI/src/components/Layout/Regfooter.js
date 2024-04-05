import React from 'react';
// import Language from '../Language/language';
import './regfooter.css';


const Regfooter = () => {
    return (
        <div className="reg_footer">
            <div className="reg_data">
               <div className="reg_que">
               <p className='num1'>Questions? Call <span className='num'>000-800-919-1694</span></p>
               </div>
               <div className="reg_links">
                <div className="link">
                <p><span>FAQ</span></p>
                <p><span>Privacy</span></p>
                </div>
                <div className="link">
                <p><span>Help Centre</span></p>
                <p><span>Cookie Preferences</span></p>
                </div>
                <div className="link">
                <p><span> Netflix Shop</span></p>
                <p><span>Corporate Information</span></p>
                </div>
               <div className="link">
               <p><span>Terms of Use</span></p>
               </div>
               </div>
                <div className='lang'>
            
                <div className="select_lang1">
                
                
                <select name="" id="" className='drop'>
                🌐
                    <option value="English">
                    English</option>
                    <option value="Hindi">🌐Hindi</option>
                </select>

                </div>

        </div>
            </div>
        </div>
    );
};

export default Regfooter;