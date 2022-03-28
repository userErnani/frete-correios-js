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
      margin-left: 3vw;
      text-align: left;


          .cep-data{
            margin-left: 1.5vw;
            font-size: 1.8vw;
            color: red;
            }

      .flex {
        display: flex;
        text-align: left;

        select {
          width: 17vw;
          height: 6vh;
          border-radius: 1vw;
          text-align: center;
          font-size: 1.3vw;
          margin: 0 4vw 0 0;
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
        width: 17vw;
        height: 12vh;
        border-radius: 2vw;
        font-size: 2vw;
      }
}
`
