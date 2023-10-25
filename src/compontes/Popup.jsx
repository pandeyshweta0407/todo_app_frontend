import React, { useState } from 'react'
import styled from 'styled-components';

import {RxCross1} from "react-icons/rx";
import axios from 'axios';
import { baseURL } from '../utils/APIRoutes';

const Poppup = ({ setShowPopUp ,popupContent ,setUpdateUi }  ) => {

  const [input , setInput] = useState(popupContent.text);
   
  const updateTODO = ()=>{
    axios.put(
      `${baseURL}/update/${popupContent.id}` , {todo:input}
      ).then((res)=>{
          //console.log(res.data);
          setUpdateUi((prevstate)=>!prevstate);
          setShowPopUp(false);
      }).catch((err)=>{
        console.log(err);
      })
   }

  return (
    <Container>
       <div className="popup">
       <RxCross1  className="cross" onClick={()=>{setShowPopUp(false)}}  />
       <h1 className='update'>Update TODO </h1>
        <div className="input_holder_upadate">
        <input 
              type='text'
              name='text'
              placeholder='Update Note...'
              value={input}
              onChange={(e)=>{setInput(e.target.value)}} 
        />
        <button className='btn'  onClick={updateTODO} >Update</button>
        </div>
       </div>
    </Container>
  )
}

const Container = styled.div`
 font-size:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  top:0px;
  left:0px;
  background-color:  #0000006c;
  width:100%;
  height:100vh;
  place-items:center;
  
  .popup{
    color:white;
    position:relative;
    background:black;
    width:700px;
    display:inline;
    justify-content:center;
    align-items:center;
    padding:50px;
  }

  .cross{
    position:relative;
    left:550px;
    top:-10px;
    font-size:30px;
     &:hover{
      border:2px solid white;
     }
  }

  .input_holder_upadate{
    margin:5px;
    input{
      font-size:40px;
    }
    button{
      font-size:40px;
    }
  }

  .update{
    position:relative;
    bottom:50px;
    border-bottom: 2px solid white;
     width:500px;
  }

`;

export default Poppup;