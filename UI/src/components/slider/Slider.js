// import React, { useEffect, useRef, useState } from "react";
// import "./Slider.css";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// // import { useSelector } from 'react-redux';
// // import { FaPlayCircle } from "react-icons/fa";
// import { IoMdPlayCircle } from "react-icons/io";
// import { CiCirclePlus } from "react-icons/ci";
// import { SlLike } from "react-icons/sl";
// import { CiCircleChevDown } from "react-icons/ci";
// import { BsBadgeHd } from "react-icons/bs";
// import video from "../../video/vid2.mp4";
// import axios from "axios";

// const Slider = ({ data }) => {
//   console.log(data);

//   // var a = data.filter(e=>e.genre_ids.includes(28))
//   // console.log(a)
//   const slide = useRef();
//   // for add to cart
//   const [name, setName] = useState();
//   const [imgsource, setImgsource] = useState();

//   //add to cart
//   const addToList = async (id) => {
//     const filter = data.filter((e) => e.id === id);
//     setName(filter[0].title || filter[0].name);
//     setImgsource(filter[0].backdrop_path);
//   };

//   useEffect(() => {
//     if (name !== undefined && imgsource !== undefined) {
//       axios.post("http://localhost:4002/", { name, imgsource });
//     }
//   }, [name, imgsource]);

//   const slideLeft = (e) => {
//     var slider = slide.current;
//     slider.scrollLeft = slider.scrollLeft + 1000;
//   };

//   const slideRight = () => {
//     var slider = slide.current;
//     slider.scrollLeft = slider.scrollLeft - 1000;
//   };
//   // const trailer =
//   // "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
//   // vide api fetch
//   // cards import video

//   return (
//     <div id="main-slider-container">
//       <MdChevronLeft className="slider-icon left" onClick={slideRight} />
//       <div id="slider" ref={slide}>
//         {data.slice(0, 10).map((e) => {
//           // <h1>{e.title}</h1>
//           return (
//             <div className="slider-card" key={e.id}>
//               <div className="slider-card-image">
//                 <div className="card_button">
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
//                     alt=""
//                     className="cards_video card_img"
//                   />
//                   <video
//                     src={video}
//                     autoPlay
//                     muted
//                     className="cards_video card_vid"
//                   />

//                   <div className="content_card">
//                     <div className="icons_details">
//                       <IoMdPlayCircle color="white" size={40} />
//                       <CiCirclePlus
//                         onClick={() => {
//                           addToList(e.id);
//                         }}
//                         size={40}
//                       />
//                       <SlLike
//                         size={33}
//                         style={{
//                           border: "2px solid white",
//                           padding: "6px",
//                           borderRadius: "50%",
//                         }}
//                       />
//                       <div className="icon_end">
//                         <CiCircleChevDown size={40} />
//                       </div>
//                     </div>
//                     <div className="itemInfoTop">
//                       <span className="match-score">95% Match</span>
//                       {/* <span className='year' >A</span> */}
//                       <span className="duration">5 Part</span>
//                       <span className="player">
//                         <BsBadgeHd />{" "}
//                       </span>
//                     </div>
//                     <div className="card_desc">
//                       <span className="card_lan">{e.original_language}</span>
//                       <span className="card_lan">{e.vote_average}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <MdChevronRight
//         className="slider-icon right"
//         onClick={(e) => slideLeft(e)}
//       />
//     </div>
//   );
// };
// export default Slider;









import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { CiCircleChevDown } from "react-icons/ci";
import { BsBadgeHd } from "react-icons/bs";
import video from "../../video/vid2.mp4";
import axios from "axios";

const Slider = ({ data }) => {
  console.log(data);

  const slide = useRef();
  const [name, setName] = useState();
  const [imgsource, setImgsource] = useState();

  const addToList = async (id) => {
    const filter = data.filter((e) => e.id === id);
    setName(filter[0]?.title || filter[0]?.name);
    setImgsource(filter[0]?.backdrop_path);
  };

  useEffect(() => {
    if (name !== undefined && imgsource !== undefined) {
      axios.post("http://localhost:4002/", { name, imgsource });
    }
  }, [name, imgsource]);

  const slideLeft = () => {
    var slider = slide.current;
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  const slideRight = () => {
    var slider = slide.current;
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft className="slider-icon left" onClick={slideRight} />
      <div id="slider" ref={slide}>
        {Array.isArray(data) &&
          data.slice(0, 10).map((e) => (
            <div className="slider-card" key={e.id}>
              <div className="slider-card-image">
                <div className="card_button">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                    className="cards_video card_img"
                  />
                  <video
                    src={video}
                    autoPlay
                    muted
                    className="cards_video card_vid"
                  />

                  <div className="content_card">
                    <div className="icons_details">
                      <IoMdPlayCircle color="white" size={40} />
                      <CiCirclePlus
                        onClick={() => {
                          addToList(e.id);
                        }}
                        size={40}
                      />
                      <SlLike
                        size={33}
                        style={{
                          border: "2px solid white",
                          padding: "6px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="icon_end">
                        <CiCircleChevDown size={40} />
                      </div>
                    </div>
                    <div className="itemInfoTop">
                      <span className="match-score">95% Match</span>
                      <span className="duration">5 Part</span>
                      <span className="player">
                        <BsBadgeHd />{" "}
                      </span>
                    </div>
                    <div className="card_desc">
                      <span className="card_lan">{e.original_language}</span>
                      <span className="card_lan">{e.vote_average}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MdChevronRight
        className="slider-icon right"
        onClick={slideLeft}
      />
    </div>
  );
};

export default Slider;
