import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import './Landingpage.css'
// import "../Header.css";

// import '../header/Header.css'
// import '../header/'



const Landingpage = () => {
  const [email,setEmail]=useState();
  const [error,setError]=useState("");
  const navigate = useNavigate();
  
  const[api,setapi] =  useState([])

 async function getapi(){
    const get = await axios.get('https://65b77f9f46324d531d54bc3e.mockapi.io/Netflix')
    setapi(get.data)
    // console.log(get.data)
  }
  useEffect(()=>{
    getapi()
  },[])

  const updataEmail=(e)=>{
    const value=e.target.value;
    setEmail(value);
    localStorage.setItem("userEmail", value);
  }

 const validateEmail =(e)=>{

  var emailformat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  e.preventDefault();
  
  if(email === '' || email === null){
    setError("Enter your email")

  }else if(!emailformat.test(email)){
    // navigate('./Accountsetup')
    setError("email required @")
  }
  else{
  //  mockapi user account is exits fire base going to the signin directly
    const filterapi = api.find(e=>e.email === email)

    if(filterapi){
      // console.log(true)
      navigate('/signin')
    }
    else{
      // console.log(false)
      navigate('/Accountsetup')
    }
    // setError(" ")

  }
 }
    return (
         <div className="text container">
          <div className="content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="search">

              <input type="email" placeholder='Email address'  value={email } onChange={updataEmail} />
               <span style={{color: 'red',position:'absolute',marginTop:'85px',marginRight:'490px'}}>{error}</span>
              <button type='submit' onClick={validateEmail}  className="email-btn">Get Started <LiaGreaterThanSolid /></button>
            </div>
          </div>
         </div>
      
    );
};

export default Landingpage;

