import styled from "styled-components";

export default styled.div`
  padding: 8px;
  display: inline-flex;
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
    box-shadow: 46px 35px 22px -2px rgba(0, 0, 0, 0.1);
  }
  .card-logo {
    float: right;
    background-color: #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color3);
  }
  .description {
    font-size: 1rem;
    color: var(--color4);
  }
`;
