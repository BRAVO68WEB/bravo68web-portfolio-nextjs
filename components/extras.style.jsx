import styled from "styled-components";
// import SendIcon from "@mui/icons-material/Send";

export const ExtraStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
  background-image: url("images/background2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-y: scroll !important;
  height: 100vh;
  .default {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    padding-bottom: 10em;
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding-bottom: 2em;
      &:hover {
        filter: contrast(200%);
        -webkit-transform: translateX(-5px) translateY(-5px);
        transform: translateX(-5px) translateY(-5px);
        transition: 1s ease;
      }
      .content-description {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .content-description img {
        width: 100px;
      }
      .content-title {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        h1 {
          font-size: 1.5em;
          font-weight: bold;
          color: #fff;
          text-align: center;
          margin: 0;
          padding: 0;
          a {
            color: #fff;
            text-decoration: none;
            &:hover {
              color: #b41ee6;
            }
          }
        }
      }
    }
  }
`;
