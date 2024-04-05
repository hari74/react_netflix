import {Fragment, useState} from 'react';
import Data from './Data';
import './fqs.css'
import { AiOutlinePlus } from "react-icons/ai";



export default function Faq() {
  const [selected,setselected]=useState(null);

  function handleSingleSelection(getCurrentId){
    setselected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className='flex '>
        
            <h2 className='heading'>Frequently Asked Questions</h2>
         
    <div className="wrappers">
    <div className="accordian">
        {Data && Data.length>0 ?( 

          Data.map((dataitem)=> (
            <Fragment>
                <diV  onClick={()=>handleSingleSelection(dataitem.id)} className="item" > 
                <div className="title"onClick={()=>handleSingleSelection(dataitem.id)} >
                    <h3>{dataitem.question}</h3>
                    <span className='plus'>{selected === dataitem.id ? <AiOutlinePlus /> : <AiOutlinePlus />}</span>
                </div>
                <div className={selected === dataitem.id ? 'contentfaq-show':'contentfaq'}>{selected === dataitem.id ? dataitem.answer : null}  </div>
                </diV>
            </Fragment>
        
        ))
       ) : (<div>No data found !</div>)}
    </div>
   </div>
      <div className='Ready'>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        <div className='last'><input type='email' placeholder='Email address'/><button>Get Started</button></div>
       </div>
      </div>
  );
}



