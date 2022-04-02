import styled from "styled-components";

export default styled.div`
  width: 33.33%;
  padding: 10px;
  .card {
    background-color: var(--color1);
    padding: 15px;
    width: 100%;
    height: auto;
    border-radius: 5px;
    transition: 0.1s;
    :hover {
      transform: scale(1.1);
    }
  }
  .card-logo {
    float: right;
    background-color: #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
  }
`;
