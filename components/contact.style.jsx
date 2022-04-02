import styled from "styled-components";

export const ContactStyle = styled.div`
  padding: 10%;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-image: url("images/background2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .row {
    display: flex;
  }

  .column {
    flex: 50%;
  }

  /* .form-group-main {
    background: rgb(2, 0, 28);
    border-radius: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(
      142deg,
      rgba(2, 0, 28, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    height: 40vh;
    width: 75%;
  } */
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
  body {
    background: #2d3b36 url(http://www.luismruiz.com/img/blured.jpg) no-repeat
      center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-top: 100px;
  }

  form {
    margin-left: auto;
    margin-right: auto;
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

  .prewritten-info-content {
    margin-left: auto;
    margin-right: auto;
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
    color: #fff;
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
    cursor: pointer;
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
`;
