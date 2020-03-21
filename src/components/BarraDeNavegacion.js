import React from 'react';
import iconos from './img/iconos.png'
import styled from 'styled-components';

const Nav = styled.nav `
{
background-color: #fff;
  color: grey;
  width: 95%;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:40px;
  
}

    input {
    height:20px;
    border: solid 1px rgba(var(--b6a,219,219,219),1);
    border-radius: 3px;
    color: rgba(var(--i1d,38,38,38),1);
    font-family: Verdana;
    text-align:center;

  

    

}
`


const BarraDeNavegacion = () => {
    return (
        <Nav>
            <div>
                <h6>Stylagram</h6>
            </div>
            <div>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className ="iconos">
                <img src={iconos} alt="iconos"></img>
                
                
            </div>

        </Nav>
    )

}


export default BarraDeNavegacion