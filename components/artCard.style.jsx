import styled from "styled-components";

export default styled.div`
  padding: 2%;
  width: 230px;
  height: 320px;
  box-sizing: border-box;
  background-color: #5f046b;
  border-radius: 5px;
  box-shadow: 10px 9px 0px -3px #fffefe;
  margin: 5px;
  * {
  margin-top: inherit;
  }
  .type {
    color: #92dcf3;
    /* padding: 4px;   */
  }
  .card-logo {
    display: flex;
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;

    img {
      width: 100%;
      object-fit: cover;
      /* object-position: 0px -10px; */
    }
    /* margin: 5px 5px 0px 0px; */
  }
`;
