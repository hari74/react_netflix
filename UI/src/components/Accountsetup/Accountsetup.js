import React,{useState,useEffect} from 'react';
import Navfooter from '../Layout/Navfooter';
import Regfooter from '../Layout/Regfooter';
import './accountsetup.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebaseconfig';
import axios from 'axios';
// import { ToastContainer, toast  } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Accountsetup = () => {
   
    const [error,seterror]=useState();
    const [error2,seterror2]=useState();
    

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const [email,setemail]=useState(localStorage.getItem("email"))

    const [password,setpassword]=useState('')

    //To Store current email value
    const handleEmail=(e)=>{
        setemail(e.target.value)        
    }

   //To store current email password value
    const handlePassword=(e)=>{
        setpassword(e.target.value)
        
    }
    useEffect(()=>{
                const storeEmail=localStorage.getItem('userEmail');
                 if(storeEmail){
                   setemail(storeEmail);
                 }
             },[]);

 
    

    useEffect(()=>{
        document.title = "Netflix"
    },
    [])
    const navigate = useNavigate()
    const handleChange=(async (e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password).then((user) =>{localStorage.setItem('userEmail',email);navigate("/Profile")});
            await axios.post('https://65b77f9f46324d531d54bc3e.mockapi.io/Netflix',{email:email})  //mockapi link and post email
            // toast.success("Registration Successful", { position: toast.POSITION.TOP_CENTER });
            // navigate('/Profile'); 
           
            
        }catch(err){
            if(err.code ==='auth/email-already-in-use'){
                seterror2("Email is already exists")
            }else if(err.code === 'auth/ivalid-email'){
                seterror2('Email is not valid')
            }else if(err.code ==='auth/missing-password'){
                seterror("Please should be contain between 6 to 60 characters")
            }else if(err.code ==='auth/weak-password'){
                seterror("")
              
            }
        }
    })


    return (
        
        <div className='Step_two'>
            
         <Navfooter/>
        
        <div className='Step_twoform'>
     
        <div className='Account_step1'>
            <span>STEP <b>1</b> of <b>2</b></span>
            </div>
            <div className='Create_two'>
                <p>Create a password to start<br/> your membership</p>
            </div>
            <div className='Just_two'>
                <p>Just a few more steps and you're done!<br/> We hate paperwork, too.</p>
            </div>
            <div className='verify_two'>
                
                <input type='email' placeholder='Email' value={email} onChange={handleEmail} className='inputbar' required  />  
                 {/* <span style={{ color: 'red',transform: 'translate(-80px,-18px)',}}>{error}</span> */}
               
                <input  type='password'    placeholder='Add a password'   onChange={handlePassword} className='inputbar' required/> 
                 {/* <span style={{ color: 'red',transform: 'translate(-93px,-18px)',}}>{error2}</span> */}
                
    {/* <Link  to="/Profile">  */}
    <button  onClick={handleChange}   className='Set1_btn'>Next</button>
    {/* </Link> */}
      

            </div>
           {/* <ToastContainer /> */}
        </div>
        <Regfooter/>
    
    </div>
    );
};

export default Accountsetup;




//     const [email,setEmail]=useState("");
//     const [error,setError]=useState("");
      
//     const [password,setPassword]=useState("");
//     const [pwerror,setPwerror]=useState("");
  
//     useEffect(()=>{
//         const storeEmail=localStorage.getItem('userEmail');
//         if(storeEmail){
//           setEmail(storeEmail);
//         }
//     },[]);
  
//     const updataEmail=(e)=>{
//       setEmail(e.target.value);
      
//     }
//     const updatePw=(e)=>{
//         setPassword(e.target.value);
//     }
  
//    const validateEmail =()=>{
//     var emailformat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
//     const passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     // email validation start
//     if(!emailformat.test(email)){
//         setError(`  Please enter a valid email address.`);
//     }
//     else{
//         setError("");
//     }
    // email vd ends

    // pw valid start
//     if(password=== "" || password === null){
//       setPwerror("password should not be blank")
//     }
//     else if(password.length<4){
//         setPwerror("password should be more than 4 chars")
//     }
//     else if (!passwordformat.test(password)){
//         setPwerror(" least 8 characters long.")
//     }
//     else{
//         setPwerror("")
//     }
//    }