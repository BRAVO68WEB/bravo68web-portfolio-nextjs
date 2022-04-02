import styled from "styled-components";
// import SendIcon from "@mui/icons-material/Send";

export const ContactStyle = styled.div`
  padding: 10%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url("images/background2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  body {
    background: #2d3b36 url(http://www.luismruiz.com/img/blured.jpg) no-repeat
      center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-top: 100px;
  }

  textarea {
    /* background: rgba(255, 255, 255, 0.4)
      url(http://luismruiz.com/img/gemicon_message.png) no-repeat scroll 16px
      16px; */
    width: 276px;
    resize: none;
    height: 110px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: #030303;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  input {
    width: 276px;
    height: 48px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: #000000;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
  }

  .message-input {
    height: 90px;
  }

  input[type="submit"] {
    cursor: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.svg),
      auto;
  }

  input.name {
    padding-left: 45px;
  }

  input.email {
    padding-left: 45px;
  }

  input.message {
    padding-left: 45px;
  }
  input.topic {
    padding-left: 45px;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }

  :-moz-placeholder {
    color: #fff;
  }

  ::-moz-placeholder {
    color: #fff;
  }

  :-ms-input-placeholder {
    color: #fff;
  }

  input:focus,
  textarea:focus {
    background-color: rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    overflow: hidden;
    color: #fff;
  }

  .btn {
    cursor: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.svg),
      auto;
    width: 138px;
    height: 44px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    float: right;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    border: 1px solid #253737;

    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    padding: 10.5px 21px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0,
      inset rgba(255, 255, 255, 0.7) 0 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0,
      inset rgba(255, 255, 255, 0.7) 0 1px 0;
    box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0,
      inset rgba(255, 255, 255, 0.7) 0 1px 0;
    text-shadow: #333333 0 1px 0;
    color: #e1e1e1;
  }

  .btn:hover {
    border: 1px solid #253737;

    text-shadow: #333333 0 1px 0;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fc466b",endColorstr="#3f5efb",GradientType=1);
    color: #fff;
  }

  .btn:active {
    margin-top: 1px;
    text-shadow: #333333 0 -1px 0;
    border: 1px solid #253737;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
  form {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    width: 343px;
    height: 510px;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background: rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .prewritten-info {
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 343px;
    height: 510px;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background: rgba(255, 143, 15, 0.61);
    -moz-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .prewritten-info-content {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 800px) {
    /* overflow-y: scroll !important; */

    .row {
      display: flex;
      /* flex-grow: true; */
      flex-direction: row;
    }
    .column {
      /* flex: 50%; */
    }
    .prewritten-info {
      margin-top: 140%;
    }
    form {
      margin-bottom: 17%;
    }
  }

  @media (min-width: 1000px) {
    overflow-y: hidden !important;

    .prewritten-info {
      margin-top: auto !important;
    }
    form {
      margin-bottom: auto !important;
    }
    .row {
      display: flex;
      /* flex-grow: true; */
    }
    .column {
      /* flex: 50%; */
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    padding-top: 25%;
    padding-bottom: 20%;
  }
`;
