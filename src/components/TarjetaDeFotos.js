import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
{
  img {
    width: 350px;
    height: 350px;
    margin: 10px 5px 10px 20px;
   
}
}

`


const TarjetasDeFotos = ({img, id}) => {  
  
  return (
    <Div>
      {
      <img src={img} alt={id} />
      }     
    </Div>
  )

}





export default TarjetasDeFotos

