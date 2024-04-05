import React from "react";
import "./Header.css";
// import { HiTranslate } from "react-icons/hi";
import Banner from "../features/Banner";
import Banner1 from "../features2/Banner1";
import Banner2 from "../features3/Banner2";
import Banner3 from "../features4/Banner3";
import Fqs from "../accordion/Fqs";
import Footer from "../footer/Footer";
import Language from "../Language/language";
import Landingpage from "../Pages/Landingpage";
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <header>
      <div className="page1">
      <nav class="navbar ">
        <div class="navbar__brand">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            class="brand__logo"
          />
        </div>

        <div class="navbar__nav__items">
          <Language/>

          <div class="nav__item">
          <Link to="./signin"> <button class="signin__button">Sign in</button></Link> 
            {/* <a href="/login" class="authLinks redButton" data-uia="header-login-link">Sign In</a> */}
          </div>
        </div>
      </nav> 
     
    <Landingpage/>
      <Banner/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Fqs/>
      <Footer/>
    
      
      </div>
      
    </header>
    
  );
};

export default Header;
