import React from 'react';
import Slider from '../slider/Slider';
// import Moviecards from '../redux/Moviecards';
import '../redux/moviecards.css'

const Movieslider = ({data,id}) => {
    console.log(data)
    console.log(id)
const  fil=data.filter((e)=>e.genre_ids.includes(id))

const f2 = fil.filter(e=>e.popularity).sort((b,a)=>{return b -a }).slice(0,10)
const f3 = fil.filter(e=>e.vote_average).sort((b,a)=>{return b -a }).slice(10,20)
const f4 = fil.filter(e=>e.vote_count).sort((b,a)=>{return a-b}).slice(0,10)
// console.log(f2)
  

    return (
        <div  style={{}}    className='movieCards'>
            
        <div className='heading_top'> 
            <h1>Trending movie</h1>
            <Slider data={f2}/> 
        </div>
        <div>
            <h1>Comedy Movies</h1>
        <Slider data={f4}/>
        </div>
        <div>
            <h1>Action Movies</h1>
        <Slider data={f3}/>
        </div>
           
           
        </div>
    );
};

export default Movieslider;