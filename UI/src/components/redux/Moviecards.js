import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { discovertv,trendingmoive,trendingtv } from './Reducer';
import './moviecards.css';
import Slider from '../slider/Slider';

const Moviecards = () => {
    const dispatch = useDispatch();
    const select = useSelector(state => state.list.movies);
    const select1 = useSelector(state => state.list.discovertv);
    const select2 = useSelector(state => state.list.moive);
    const select3 = useSelector(state => state.list.tv);

    useEffect(() => {
       
        dispatch(discovertv());
         dispatch(trendingmoive());
         dispatch(trendingtv())
        
    }, [dispatch]);
    return (
        <div style={{background:'#141414'}}  className='movieCards'>
            {/* <h1>trending</h1>
            <div className='moviecards'>
            {select.map(pic => (
                <div className='cards_pic' >

                <img src={`https://image.tmdb.org/t/p/w1280${pic.backdrop_path}`} alt="" />
                </div>
            ))}
            </div> */}



                <div >
                    <h1 className='heading_top'>Trending Now</h1>
                <Slider data={select}/>
                 
                </div>

                <div>
                    <h1>New Releases</h1>
                            <Slider data={select1}/>
                </div>

                <div> 
                    <h1>Trending Moive</h1>
                    <Slider data={select2}/>
                </div>

                <div> 
                    <h1>Tv Dramas</h1>
                    <Slider data={select3}/>
                </div>
                            
                        
                        
                        </div>
    );
};

export default Moviecards;