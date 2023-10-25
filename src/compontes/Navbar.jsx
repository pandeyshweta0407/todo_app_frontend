import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";


const Navbar = () => {
  return (
    <Container>
        <nav>
            <div className='text'>NOTE APP</div>  
             <span>
            <Link to="#" >Home</Link>
            <Link to="#" >About</Link>
            <Link to="#" >Service</Link>
            <Link to="#" >Contact</Link>
            
             </span>
        </nav>
    </Container>
  )
}

const Container = styled.div`
     nav{
        background : #680E4B;
        height:15vh;
        color:white;
        display:flex;
        justify-content:space-between;
        .text{
          font-size:50px;
          padding:25px;
        }
        
       span{
           padding:30px;
        a{
            font-size:30px;
            padding:25px;
            color:white;
        }
       }
     }

`;

export default Navbar;