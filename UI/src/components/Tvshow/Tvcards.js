import React, { useState } from 'react';
import '../redux/moviecards.css';
import Slider from '../slider/Slider';
const Tvcards = ({ data, id }) => {
    useEffect(() => {
      console.log(data);
      console.log(id);
    }, [data, id]);

    // const [tid,settid] = useState(10759)
  
    const fil = data?.filter((e) => e.genre_ids?.includes(id));
  
    const f2 = fil?.filter((e) => e.popularity)?.sort((b, a) => b - a)?.slice(0, 10);
    const f3 = fil?.filter((e) => e.vote_average)?.sort((b, a) => b - a)?.slice(10, 20);
    const f4 = fil?.filter((e) => e.vote_count)?.sort((a, b) => a - b)?.slice(0, 10);
    const f5 = filterByCriteria(fil, (movie) => movie.release_date > new Date("2023-01-01")); // Movies released after 2023-01-01
    const f6 = filterByCriteria(fil, (movie) => movie.original_title.includes("action")); // Titles containing "action"

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

export default Tvcards;