
import styled from 'styled-components'
import Fundo from './Fundo_Azul.png';


export const Body = styled.section`
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
// position: fixed;
top:0;
left:0;
background-image: url(${Fundo});
background-repeat: no-repeat;
background-size: cover;
color: #4F4F4F;

.informativo { 
  font-size: 2vh;
  color: #FF4500;
  text-align: center
}


@media screen and (max-width: 750px) {
  *{
    padding: 0;
    margin:0;
  }
  background-size: none;
  height: auto;
    
}
`

export const DivFrete = styled.div`
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);

width: 60vw;
// background: #48D1CC;
border: solid 0.5vw #808000;
border-radius: 1vw;

  .Container{
    
    margin: auto;
    padding-bottom: 1.5vh;

    label{
      font-size: 1.2vw;
      color: #0000CD;
    };

    input {
      width: 17vw;
      border-radius: 1vw;
      text-align: center;
      font-size: 1.60vw;
      color: #708090;
      ::placeholder{ font-size: 1.0vw; color: #708090}
    }

    .Titulo{
      text-align: center;
      padding-top: 0.5vw;
      font-size: 4.0vw;
      color: #0d6efd;
    }
    
    .InputCep, .flex1, .flex2, .flex3 {
      margin: auto;
      width: 55vw;
      display: flex;
      background: #87CEEB;
      padding: 0.5vw;
      margin-top: 1.5vh;
    }

    .cep-data{
      margin-left: 4.0vw;
      font-size: 1.8vw;
    }

    select {
      width: 17vw;
      border-radius: 1vw;
      text-align: center;
      font-size: 1.3vw;
      margin: 0 2vw 0 0;
      color: #4F4F4F;
    }
  
    .flex2{
      input {width: 10vw}
      justify-content: space-between;
    }

    .flex3 {
        align-items: center;
        background: #87CEFA;
    }

    .selectStyle2 {
        margin: 0 5vw 0 0;
        text-align: left;
        font-size: 2vw;
    }
  
    .Alerta{
      align-items: center;
      color: #FF0000;
      font-size: 1.5vw;
    }

    .informativo { 
      color: #FF0000;
      font-size: 2vw;
    }
  
    button {
      background-color: #fff;
      color: #0d6efd;
      width: 15vw;
      padding: 0.5vw;
      border: 2px solid #0d6efd;
      border-radius: 25px;
      cursor: pointer;
      align-items: center;
      font-size: 1.5vw;

      :hover{
          background-color: #0d6efd;
          color: #fff;
      }
    }
}

@media screen and (max-width: 750px) {
    position: absolute;
    top: 0%;
    left: 0%;
    -ms-transform: translate(-0%, -0%);
    transform: translate(-0%, -0%);
    width: 100vw;
    background: #48D1CC;
    border: none ;
    border-radius: none;
    
    .Container{
      margin: auto;
      text-align: center;
      display: block;
      padding-bottom: 1.0vh;
      border: solid 0.5vw #808000;

    label{
      font-size: 5vw;
      color: white;
    };

    input {
      width: 55vw;
      border-radius: none;
      font-size:5vw;
      ::placeholder{ font-size: 5vw; color: coolgray}
    }

    .Titulo{
      padding-top: 1.0vw;
      font-size: 10.0vw;
    }

    .InputCep, .flex1, .flex2, .flex3 {
      width: 85vw;
      background: #87CEEB;
      display: block;
      border: solid 1px blue;
      padding: 1vw;
      margin-top: 1vh;
    }

    .cep-data{
      font-size: 5vw;
      margin-left: 0px;
    }

    select {
      width: 60vw;
      font-size: 5vw;
    }

    .flex2{
      input {width: 57vw}
      justify-content: space-between;
    }

    .flex3 {
      display: flex;
      justify-content: center;
    }
    
    .selectStyle2 {
      margin: 0 5vw 0 0;
      text-align: left;
      font-size: 4vw;
    }

    .Alerta{
      align-items: center;
      color: #FF0000;
      font-size: 4vw;
    }

    .informativo { 
      color: white;
      font-size: 4vw;
    }

    button {
      background-color: #fff;
      color: #0d6efd;
      width: 25vw;
      padding: 0.5vw;
      border: 2px solid #0d6efd;
      border-radius: 25px;
      cursor: pointer;
      align-items: center;
      font-size: 4vw;
      :hover{
          background-color: #0d6efd;
          color: #fff;
      }
    }
  }
}
`
