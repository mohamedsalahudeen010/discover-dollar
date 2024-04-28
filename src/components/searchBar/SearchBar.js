import { IconButton, Paper, Slide } from '@mui/material';
import React, { useEffect, useState,useContext, useRef } from 'react'
import "./SearchBar.css"
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  const[open,setOpen]=useState(false)
  const containerRef = useRef(null);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };
    const [query,setQuery]=useState("");
    const[user,setUser]=useState("")
  
    useEffect(()=>{
      
      setUser(localStorage.getItem("name"))
      console.log(user)
   },[])

   const searchFunction=()=>{
    let timer
    return function(e){

      e.preventDefault()
      console.log(e.target.value)
      clearTimeout(timer)
    timer=setTimeout(()=>
    {},500)
    }
  }
  let mainSearch=searchFunction()
  return (
    <div className='search-bar'>
      <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%",color:"black", 
     boxShadow:'0.5rem 0.5rem 0.8rem black',
    top:"2.2vh",
     }}
  >

    <InputBase
      sx={{ ml: 1, flex: 1,fontWeight:"bold"}}
      placeholder="Search Products"
      inputProps={{ 'aria-label': 'search google maps' }}
      onChange={(e)=>{setQuery(e.target.value);
        // setmovieType("searched");
        mainSearch(e)}}
        // onClick={()=>navigate("/searchResult")}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
   
    {open?<div className='search-list'>
 
    <Slide in={open} container={containerRef.current}
        style={{zIndex:"5"}}>
        <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={1}
        style={{zIndex:"5"}}>
        <li><span onClick={()=>{handleChange()}}>Movies</span></li>
        </Paper>
        </Slide> 
   </div>:null}
  </Paper>
    </div>
    
  )
}

export default SearchBar