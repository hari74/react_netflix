import React, { useState, useRef } from "react";
import Movieslider from "./movieslider";
import "../geners/genericon.css";
// import { SiWindows11 } from "react-icons/si";



const Genericon = ({ listgenre, data }) => {
  console.log(listgenre);

  const [generid, setGenerid] = useState(35);
  var id = 28;
  listgenre.forEach((e) => {
    if (e.id === generid) {
      id = e.id;
    }
  });
  console.log(id);
  // gener icon open functionality
  const element = useRef();
  const openicon = () => {
    element.current.style.display = "grid";
  };

  // when i click geners icon closing functionality
  document.addEventListener("mousedown", (e) => {
    if (element.current && !element.current.contains(e.target)) {
      element.current.style.display = "none";
    }
  });
  return (
    <div>
      {/* <div className="gener_container" style={{background:"black"}}>
            <div className="gener_box">
                <div className="gener_title"><h2 style={{color:"red"}}>movie</h2></div>
                <div className="gener_label">
                   <ul>
                 {listgenre.map(e=>
                  <li value={e.id} onClick={(i)=>setGenerid(i.target.value)}>{e.name}</li>  
                    )}
                   </ul>
                </div>
            </div>
        </div> */}
      <div className="select_create">
        <div className="sele">
          <div className="genres_sel" onClick={openicon}>
            Genres<i className="fa-solid fa-sort-down"></i>
            <ul className="sele_drop" ref={element}>
              {listgenre.map((e) => {
                return (
                  <li
                    value={e.id}
                    onClick={(i) => setGenerid(i.target.value)}
                    key={e.id}
                  >
                    {e.name}
                  </li>
                );
              })}
            </ul>
          </div>
      {/* <SiWindows11 className="jj"/> */}

          
        </div>
        
      </div>


      <Movieslider id={id} data={data} />
    </div>
  );
};

export default Genericon;
