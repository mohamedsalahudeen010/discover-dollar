// NestedList.js
import React, { useContext, useEffect, useState } from 'react';
import './NestedList.css'; // Importing CSS file
import { StoreContext } from '../../Context';




const NestedList1 = ({ items,list=0}) => {
  const [expanded, setExpanded] = useState();
  const[level1,setLevel1]=useState()
  const[idx,setIdx]=useState()
  
  const handleLevel=(index)=>{
    if(level1===index){
      setLevel1()
    }else{
      setLevel1(index);
    }
  }
  const toggleItem = (index) => {
    if(expanded===index){
      setExpanded()
    }else{
      setExpanded(index);
    }
  };


  
  
   return(
    <div className={`moret-${list}`}>
    {items.map((item,index)=>(
<div className="moret__in" key={index}>
<div className="moret__in"
          onMouseOver={() => {toggleItem(index);handleLevel(index);setIdx(index)}}
          key={index}
        >

    <p>{item.name}</p>
  </div>
  <hr />
      {level1===index?<div style={{display:idx===index?"block":"none"}}>
          <NestedList1 items={item.child}
          list={list+1}
          ></NestedList1>
        </div>:""}
          </div>


      ))}
    </div>
   )
  };
  

  export default  NestedList1