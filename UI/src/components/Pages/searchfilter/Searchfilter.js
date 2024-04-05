
import React, { useEffect, useRef, useState } from "react";
// import "./Slider.css";
import '../searchfilter/Searchfilter.css'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { CiCircleChevDown } from "react-icons/ci";
import { BsBadgeHd } from "react-icons/bs";
import video from "../../../video/vid2.mp4";
import axios from "axios";

const Slider = ({ data }) => {
  console.log(data);

  const slide = useRef();
  const [name, setName] = useState();
  const [imgsource, setImgsource] = useState();

  // const addToList = async (id) => {
  //   const filter = data.filter((e) => e.id === id);
  //   setName(filter[0]?.title || filter[0]?.name);
  //   setImgsource(filter[0]?.backdrop_path);
  // };

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
    <div id="main-slider-container5">
      {/* <MdChevronLeft className="slider-icon left" onClick={slideRight} /> */}
      <div id="slider1" ref={slide}>
        {Array.isArray(data) &&
          data.slice(0, 10).map((e) => (
            <div className="slider-card1" key={e.id}>
              <div className="slider-card-image1">
                <div className="card_button5">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                    className="cards_video card_img2"
                  />
                <video
                    src={video}
                    autoPlay
                    muted
                    className="cards_video card_vid"
                  />


                  <div className="content_card1">
                    <div className="icons_details1">
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
                      <div className="icon_ends">
                        <CiCircleChevDown size={40} />
                      </div>
                    </div>
                    <div className="itemInfoTops">
                      <span className="match-score1">95% Match</span>
                      <span className="durations">5 Part</span>
                      <span className="player">
                        <BsBadgeHd />{" "}
                      </span>
                    </div>
                    <div className="card_descs">
                      <span className="card_lan1">{e.original_language}</span>
                      <span className="card_lan1">{e.vote_average}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

     
    </div>
  );
};

export default Slider;
