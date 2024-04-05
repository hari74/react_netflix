import React from 'react';
import './footer.css'
import Language from '../Language/language';

const Footer = () => {
    return (
      <div className="footer">
            <div className="footer_data">
                <div className="footer_ques">
                    <p>Questions? Call <span className='num'>000-800-919-1694</span></p>
                </div>

                <div className="footer_links">


                    <div className="links">
                        <p><span>FAQ</span></p>
                        <p><span>Investor Relations</span></p>
                        <p><span>Privacy</span></p>
                        <p><span>Speed Test</span></p>
                    </div>

                    <div className="links">
                        <p><span>Help Centre</span></p>
                        <p><span>Jobs</span></p>
                        <p><span>Cookie Preferences</span></p>
                        <p><span>Legal Notices</span></p>
                    </div>

                    <div className="links">
                        <p><span>Account</span></p>
                        <p><span>Ways to Watch</span></p>
                        <p><span>Corporate Information</span></p>
                        <p><span>Only on Netflix</span></p>
                    </div>

                    <div className="links">
                        <p><span>Media Centre</span></p>
                        <p><span>Terms of Use</span></p>
                        <p><span>Contact Us</span></p>
                        {/* <p><></></p> */}
                    </div>
                </div>


                <div className="div">
                <Language/>
                <p className='netflix_in'>Netflix India</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;