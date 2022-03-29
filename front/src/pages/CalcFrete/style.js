import styled from 'styled-components'

export const DivFrete = styled.div`
width: 60%;
margin: auto;
font-size: 2.5vw;
background: #0043ff42;
border: solid 0.5vw brown;
border-radius: 1vw;

input {
    width: 17vw;
    height: 6vh;
    border-radius: 1vw;
    text-align: center;
    font-size: 1.68vw;
    ::placeholder{ font-size: 1.5vw; color: coolgray}
  }

  label{
      font-size: 1.5vw;
      color: blue;
  };

  .Titulo{
  text-align: center;
  padding: 1vw;
  font-size: 4.0vw;
  color: white;
  }

  .Container{
      margin-left: 1.5vw;

        .InputCep{
          width: 97%;
          display: flex;
          align-items: center;
          margin-top: 1vw;
          border: solid 1px brown;

        .cep-data{
          margin-left: 4.0vw;
          font-size: 1.8vw;
          color: red;
        }
    }

      .flex {
        display: flex;

        label{ text-align: center }

        select {
          width: 17vw;
          height: 6vh;
          border-radius: 1vw;
          text-align: center;
          font-size: 1.3vw;
          margin: 0 2vw 0 0;
        }
      }
    
      .flex2{
        margin-top: 1.0vh;
        display: flex;
        text-align: left;

        .Tamanho {
          margin: 0 4vw 0 0;
          width: 15vw;
          height: 13vh;
        }
      }

      .flex3 {
          margin-top: 1.5vw;
          display: flex;
          padding-bottom: 3vh;

      .selectStyle2 {
          margin: 0 5vw 0 0;
          text-align: left;
          font-size: 2vw;
        }
        button {
          background-color: #fff;
          color: #0d6efd;
          width: 15vw;
          padding: 0.5vw;
          margin-top: 1.5vw;
          border: 2px solid #0d6efd;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.5vw; 
          :hover{
              background-color: #0d6efd;
              color: #fff;
              }
      }
}
`
