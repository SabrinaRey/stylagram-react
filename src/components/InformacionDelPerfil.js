import React from 'react';
import styled from 'styled-components';
import img from './img/sabri.jpg'

const Section = styled.section`
display:flex;
height: 250px;
justify-content: space-around;
align-items:center;
color: rgba(var(--i1d,38,38,38),1);
background-color: rgba(var(--b3f,250,250,250),1);


 .contenedor-imagen {
    width: 250px;
    height: 200px;
    padding-left:150px;
                  img {
        margin-top:20px;
        width: 150px;
        height:150px;
        border-radius:100px;
    }
 }

    
.info-usuarios {
    margin-left:-250px;
    width: 50%;
    heigth:200px;
       
    .detalles {
        display:flex;
        flex-direction: colummns;
        margin-bottom: 10px;
    }      
    

    button {
    margin:20px;
       height:25px;
       border: 1px solid rgba(var(--d0b,219,219,219),1);
       border-radius:3px;
       color: rgba(var(--f07,38,38,38),1);
       padding: 5px 9px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        
    }
}
.info-publicaciones {
    display: flex;
    justify-content: flex-start;

    span{
        font-weight: bold;
        margin-right: 5px;
        
    }
    p {
        margin-right: 20px;
        margin-top:-1px;
    }
}


`


const InformacionDelPerfil = () => {
    return (
        <Section>

            <div className="contenedor-imagen">
                <img src={img} alt="sabrina"></img>
            </div>
            <div className="info-usuarios">
                <div className="detalles">
                    <h4>sabrinaRey</h4>
                    <button>Editar Perfil</button>
                </div>
                <div className="info-publicaciones">
                    <span>1123</span><p>publicaciones</p>
                    <span>225</span><p>seguidores</p>
                    <span>367</span><p>seguidos</p>
                </div>
                <div className="apodo">
                    <h5>SabriR</h5>
                </div>
            </div>

        </Section>
    )

}


export default InformacionDelPerfil