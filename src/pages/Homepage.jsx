import React, { useEffect, useState } from 'react'
import Navbar from '../compontes/Navbar';
import styled from 'styled-components';
import Todos from '../compontes/Todos';
import {baseURL} from "../utils/APIRoutes";
import axios from 'axios';
import Poppup from '../compontes/Popup';


const Homepage = () => {

   const [input , setInput] = useState([]);
   const [toDos , setToDos] = useState([]);
   const [updateUi , setUpdateUi] = useState(false);
   const [showPopUp , setShowPopUp] = useState(false);
   const [popupContent , setPopUpContent] = useState([]);

   useEffect(()=>{
     axios.get(
      `${baseURL}/get`
     ).then((res)=>{
       //console.log(res.data);
       setToDos(res.data);
     }).catch((err)=>[
        console.log(err)
     ])
   }, [updateUi]);



   const saveTodo = ()=>{
    axios.post(`${baseURL}/save` , {todo : input}
    ).then((res)=>{
   //  console.log(res.data);
   
     setInput("");
     setUpdateUi((prevstate)=>!prevstate);
    }).catch((err)=>{
      console.log(err);
    })
   }


  return (
    <div>
           <Navbar/>
  <Container>
       
            <div className='main'>
                <input type='text' name='text' placeholder='Add a Note' value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={saveTodo} >Add</button>
            </div>
            <div className="list">
             {
              toDos.map((element)=>{
                return(
                  <Todos
                    key={element._id}
                    text={element.todo}
                    id={element._id}
                    setUpdateUi={setUpdateUi}
                    setShowPopUp={setShowPopUp}
                    setPopUpContent={setPopUpContent}
                  />
               )
              }
              
              )
             }
            </div>
    </Container>


          {
            showPopUp &&
             <Poppup  
              setShowPopUp ={setShowPopUp}
              popupContent ={popupContent}
              setUpdateUi  ={setUpdateUi}
             />
           }   
    </div>
  
  )
}

const Container = styled.div`  

  .main{  
    position: relative;
    left:500px;
    display:flex;
    justify-content:center;
    align-item:center;
    margin-top:25px;
    font-size:50px;
    background:black;
    height: 80px;
    width: 500px;
    input{
      width: 300px;
        font-size:30px;
        margin:20px;
        padding:20px;
        border-radius:10px; 
    }
    button{
        font-size:40px;
        background:white;
        margin:15px;
        padding:2px;
        border-radius:10px; 
       &:hover{
        border: 5px solid skyblue;
       }    
    }
  }

  .list{
     display:flex;
     flex-wrap:wrap; 
     justify-content:center;
     aglin-item:center;    
  }


  


`;

export default Homepage;