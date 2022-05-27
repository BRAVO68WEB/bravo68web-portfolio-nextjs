import styled from "styled-components";

export const Page500Style = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fira+Code&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111;
  * {
    margin: 0;
    padding: 0;
    font-family: "Fira Code", monospace;
  }
  .container {
    text-align: center;
    margin: auto;
    padding: 4em;
    img {
      width: 256px;
      height: 225px;
    }

    h1 {
      margin-top: 1rem;
      font-size: 35px;
      text-align: center;

      span {
        font-size: 60px;
      }
    }
    p {
      margin-top: 1rem;
    }

    p.info {
      margin-top: 4em;
      font-size: 12px;

      a {
        text-decoration: none;
        color: rgb(84, 84, 206);
      }
    }
  }
`;
