import React from 'react';
import {AiFillEdit} from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import axios from 'axios';
import { baseURL } from '../utils/APIRoutes';
import styled from "styled-components";

const Todos = ( {text , id ,   setUpdateUi , setShowPopUp ,setPopUpContent}) => {

  const UpdateTODO = ()=>{
      setPopUpContent({text,id});
      setShowPopUp(true);
  }

   const deleteTODO = ()=>{
    axios.delete(
      `${baseURL}/delete/${id}`
      ).then((res)=>{
        //  console.log(res.data);
          setUpdateUi((prevstate)=>!prevstate);
      }).catch((err)=>{
       console.log(err);
      })
   }


  return (
    <Container>
         <div className="todo">           
           <div className="heading">
           <div className='topic'>topic</div>
           <div className="icons">
            <AiFillEdit className='icon' onClick={UpdateTODO} />
            <RxCross1 className='icon' onClick={deleteTODO} />
           </div>
           </div>

           <div className="write">
           {text}
           </div>
       
         </div>
  
    </Container>
  )
}

const Container = styled.div`
  
   .todo{
    min-height:200px;
    width: 300px;
    border-radius: 10px;
    font-size:30px;
    background-color: #F7F7FF;
    border-radius: 10px;
    margin-top: 20px;
    color: #545E75;   
    padding: 10px 20px;
    margin:50px;
   }

    .heading{
      height:50px;
      width: 270px;
      font-size: 30px;
      display:flex;
      justify-content: space-between;
      padding:2px;
      border-bottom: 2px solid grey;
    }

     .topic{
      color: transparent; 
     }
  

   .icon{
    font-size:35px;
    &:hover{
      border : 4px solid black;
    }
   }
    

   .write{
    margin-top:10px;
    padding:2px;
    height:170px;
    width:270px;
    word-wrap: break-word;
    overflow:auto;
  
   }


`;

export default Todos;