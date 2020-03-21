import React from 'react';
import styled from 'styled-components';
import TarjetaDeFotos from './TarjetaDeFotos'



const Div = styled.div`
{background-color: rgba(var(--b3f,250,250,250),1);    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 30px;    
    padding: 0px 100px 0px 200px;
      
  
}

`

const SeccionFotos = ({feedsource}) => {
    return (
        <Div>
            {
                feedsource.map((feed, i) => <TarjetaDeFotos key = {i}
                img ={feed.source}/>

                )
            }
        </Div>
    )
}

export default SeccionFotos