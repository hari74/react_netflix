import React, { useEffect } from "react";
import ReducerFile from "../redux/ReducerFile";
import { useDispatch, useSelector } from "react-redux";
import Navbars from "../Navbar/Navbars";
// import Moviecards from "../redux/Moviecards";
import FooterHome from "../../HomepageFooter/FooterHome";
import Genericon from "../geners/Genericon";
import { tvgenre,discovertv,trendingtv  } from '../redux/Reducer';



const Tvshow = () => {
  // const dispatch = useDispatch();
  // const select = useSelector((state) => state.list.discovertv);
  // console.log(select);
  const select=useSelector(state => state.list)
    const tvsgenre=useSelector(state=>state.list.tvgenre)
    const dispatch =useDispatch()
 var tvdata= [...select.discovertv,...select.tv]
 console.log(tvdata)

    useEffect(()=>{
        dispatch(tvgenre());
        dispatch(discovertv());
        dispatch((trendingtv()));
    },[dispatch])

    console.log(select)
    console.log(tvsgenre)
    
    useEffect(()=>{
      const handleScroll =()=>{
        const Nav = document.getElementById('geners12')
        if(window.scrollY > 0){
          Nav.style.backgroundColor='black'
        }
        else{
          Nav.style.backgroundColor='transparent'
        }
      }
      window.addEventListener('scroll',handleScroll)
      return()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    },[])

   
  

  return (
    <div>
      <Navbars />
      <div style={{fontSize:'38px',position:'fixed', paddingTop:'5%',paddingLeft:'5%', color:'white', backgroundColor:'black', width:'100%', height:'20%' , zIndex:'50',fontWeight:'500'}} id='geners12'>TV Shows</div>
      <ReducerFile shows={tvdata} />
      <Genericon listgenre={tvsgenre} data={tvdata}/>
      
      


      <FooterHome />
    </div>
  );
};

export default Tvshow;
