import styled from 'styled-components'
import Fundo from './Fundo_Azul.png';


export const Body = styled.body`
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
position: fixed;
top:0;
left:0;
background-image: url(${Fundo});
background-repeat: no-repeat;
background-size: cover;
@media screen and (max-width: 750px) {

}

`

export const DivFrete = styled.div`
width: 60vw;
margin:auto;
margin-top: 15.5vh;
margin-left: 19.5vw;
background: #0043ff42;
border: solid 0.5vw brown;
border-radius: 1vw;

.Titulo{
  text-align: center;
  padding-top: 1vw;
  font-size: 4.0vw;
  color: #0d6efd;
}


input {
    width: 17vw;
    border-radius: 1vw;
    text-align: center;
    font-size: 1.60vw;
    ::placeholder{ font-size: 1.5vw; color: coolgray}
  }

  label{
      font-size: 1.5vw;
      color: blue;
  };

  .Container{

    margin-left: 2vw;

    .InputCep {
      width: 55vw;
      display: flex;
      background: #87CEEB;
      padding: 0.5vw;
      margin-top: 1.5vh;
      align-items: center;
    }

    .cep-data{
      margin-left: 4.0vw;
      font-size: 1.8vw;
      color: #4F4F4F;
    }

      .flex1, .flex2, .flex3 {
        width: 97%;
        padding: 0.5vw;
        margin-top: 1.5vh;
        display: flex;
        background: #87CEEB;

        select {
          width: 17vw;
          border-radius: 1vw;
          text-align: center;
          font-size: 1.3vw;
          margin: 0 2vw 0 0;
        }
      }
    
      .flex2{
        justify-content: space-between;
      }

      .flex3 {
          padding-bottom: 3vh;
          align-items: center;
          background: none;


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
    

}


}
`
