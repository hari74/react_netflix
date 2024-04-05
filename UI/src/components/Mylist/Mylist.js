import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import '../Mylist/mylist.css';

const Mylist = () => {
  const [data, setData] = useState([]);
  const img = useRef();

  useEffect(() => {
    axios.get("http://localhost:4002/").then((res) => setData(res.data));
  });

  const getData = () => {
    axios.get("http://localhost:4002/").then((res) => setData(res.data));
  };
     function deleteitem (id){
          axios.delete(`http://localhost:4002/${id}`)
          .then(()=>getData())
      }

  return (
    
    <div className="mylist_card">
      
      {data.map((e) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${e.imgsource}`}
            alt="" 
          />
          <div className="mylist_button">
          <h1>{e.name}</h1>
          <button onClick={()=>{deleteitem(e._id)}}>Delete</button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Mylist;