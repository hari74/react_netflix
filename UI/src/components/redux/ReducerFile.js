import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  discovertv, mov, trendingmoive, trendingtv } from './Reducer';
import './reducer.css'
import { IoMdPlay } from "react-icons/io";
import { TfiInfoAlt } from "react-icons/tfi";
// import YouTube from 'react-youtube';
import videoo from "../../video/vid.mp4";
// import Tvshow from '../Tvshow/Tvshow';




function ReducerFile({shows}) {
    const [background, setBackground] = useState("");
    const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
    const [description,setdescription]=useState("")
    // const [video,setVideo]=useState([])
    // const [isPlaying, setIsPlaying] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
   

    const dispatch = useDispatch();
    // const select = useSelector(state => state.list.movies);

    const select=shows
    // console.log(select)

    useEffect(() => {
        dispatch(mov());
        dispatch(discovertv());
        dispatch(trendingmoive())
        dispatch(trendingtv())
       

    }, [dispatch]);

//    background image from random generation
    useEffect(() => {
        if (select && select.length > 0) {
            const randomId = Math.floor(Math.random() * select.length);
            const randomMovie = select[randomId];
            setBackground(`url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`);
            setSelectedMovieTitle(randomMovie.title||randomMovie.name);
            setdescription (randomMovie.overview)
            // console.log(randomId)
           
        }
         
    }, [select]);

    // remove description
    function removedesc(str,n){
        return str.length>0 ? str.substr(0,n-1):str 
    }
   
 const videplayer=useRef()
//  setTimeout(() => {
//     videplayer.current.style.display="block" 
//  }, 5000);
 
 
//  when the user clik play button it wii be open a full screen of vide
const openFullScreen = () => {
    const elem = videplayer.current;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
};
      

   

    // const [video,setVideo]=useState([])
    //  const videos= async()=>{
    //     try{

    //         await fetch('https://api.themoviedb.org/3/movie/787699/videos?api_key=26370c622e0f21257dbc25703f55be5e&language=en-US&autoplay=1&muted=true&loop=1&controls=0')
    //         .then(res=>res.json())
    //         .then(json=>setVideo(json.results))
    //       console.log(video)
    //     }catch(error){
    //         console.log(error)
    //     }
       
    // }
    //  useEffect(() => {
    //     videos();
    // }, []);

   

    return (
        <div className='bg_img' style={{ backgroundImage: background }}>

            {
               
                        <div  className='main_banner'>
                         <video src={videoo}  autoPlay muted className='youtube_container' ref={videplayer}  ></video>

                            <div className="banner_content">

                                <h1 className="banner_title">{selectedMovieTitle}</h1>
                                <div className="banner_description">{removedesc(description,150)}</div>
                                <div className="banner_buttons">
                                   
                                    <button className="banner_button"  onClick={openFullScreen}><IoMdPlay />Play</button>
                                    <button className="banner_buttont"><TfiInfoAlt /> More info</button>
                                    
                                </div>
                            </div>
                        </div>
                    
                  
            }
           
               {/* <YouTube videoId={video[0].key}/> */}
           {/* <YouTube  videoId={video.length > 0 ? video[0].key : ''} className='youtube_container' opts={{ width:"100%",height:"100%",playerVars:{autoplay:1, controls:0} }}/> */}
           {/* <iframe
          title="tmdb-video"
        //   width="100%"
        //   height="150%"
          src={`https://www.youtube.com/embed/${ video[0]?.key }?autoplay=true&mute=true&loop=true&controls=0&`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='youtube_container' ref={videplayer}
        ></iframe> */}

        {/* <Tvshow /> */}
       
        </div>
        
    );
}

export default ReducerFile;



// style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}


  //   <div>
  //     {
  //         select && select.length > 0 ? (
  //             select.map(movie => (
  //                 <div key={movie.id} className='main_banner' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
  //                     <div className="banner_content">
  //                         <h1 className="banner_title">{movie.title}</h1>
  //                         <div className="banner_button">
  //                             <button>Play</button>
  //                             <button>More info</button>
  //                             <div className="banner_description"></div>
  //                         </div>
  //                     </div>
  //                 </div>
  //             ))
  //         ) : (
  //             <p>No movies found</p>
  //         )
  //     }
  // </div>
//   https://api.themoviedb.org/3/movie/787699/videos?api_key=26370c622e0f21257dbc25703f55be5e&language=en-US




// https://api.themoviedb.org/3/movie/now_playing?api_key=26370c622e0f21257dbc25703f55be5e&language=en-US&page=1