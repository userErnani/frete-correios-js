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
    border-radius: 1vw;
    text-align: center;
    font-size: 1.60vw;
    ::placeholder{ font-size: 1.5vw; color: coolgray}
  }

  label{
      font-size: 1.5vw;
      color: blue;
  };

  .Titulo{
  text-align: center;
  padding-top: 1vw;
  font-size: 4.0vw;
  color: #0d6efd;
  }

  .Container{
      margin-left: 1.6vw;

    .InputCep1 {
      width: 97%;
      display: flex;
      background: #87CEEB;
      padding-bottom: 1vh;
    }

    .InputCep2 {
      width: 97%;
      margin-top: 1vh;
      display: flex;
      background: #87CEEB;
      padding-bottom: 1vh;
    }

    .cep-data{
      margin-left: 4.0vw;
      font-size: 1.8vw;
      color: #4F4F4F;
    }

      .flex {
        width: 97%;
        margin-top:1vw;
        display: flex;
        background: #87CEEB;
        padding-bottom: 1vh;

        select {
          width: 17vw;
          border-radius: 1vw;
          text-align: center;
          font-size: 1.3vw;
          margin: 0 2vw 0 0;
        }
      }
    
      .flex2{
        width: 97%;
        margin-top:1vw;
        display: flex;
        justify-content: space-between;
        background: #87CEEB;
        padding-bottom: 1vh;
      }

      .flex3 {
          margin-top: 1.5vw;
          display: flex;
          padding-bottom: 3vh;
          align-items: center;

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
          border: 2px solid #0d6efd;
          border-radius: 25px;
          cursor: pointer;
          font-size: 1.5vw; 
          :hover{
              background-color: #0d6efd;
              color: #fff;
              }
      }
}
`
