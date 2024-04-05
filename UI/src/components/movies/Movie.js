import React, { useEffect } from 'react';
import ReducerFile from '../redux/ReducerFile';
import { useDispatch, useSelector } from 'react-redux';
import Navbars from '../Navbar/Navbars';
import { mov, moviegenre, trendingmoive } from '../redux/Reducer';
import Genericon from '../geners/Genericon';
import FooterHome from '../../HomepageFooter/FooterHome';


const Movie = () => {
    const select=useSelector(state => state.list)
    const mvgenre=useSelector(state=>state.list.moviegenre)
    const dispatch =useDispatch()
 var moviedata= [...select.movies,...select.moive]
 console.log(moviedata)

    useEffect(()=>{
        dispatch(moviegenre())
        dispatch(mov())
        dispatch(trendingmoive())
    },[dispatch])

    console.log(select)
    console.log(mvgenre)
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
            <Navbars/>
            <div style={{fontSize:'38px',position:'fixed', paddingTop:'5%',paddingLeft:'5%', color:'white', backgroundColor:'black', width:'100%', height:'20%' , zIndex:'50',fontWeight:'500'}} id='geners12'>Movies</div>
            <ReducerFile shows={moviedata}/> 
            <Genericon listgenre={mvgenre} data={moviedata}/>
          <FooterHome/>
        </div>
    );
};

export default Movie;