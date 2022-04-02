import styled from "styled-components";

export default styled.nav`
  background: rgb(52, 47, 50);
  background: linear-gradient(
    90deg,
    rgba(52, 47, 50, 1) 0%,
    rgba(96, 97, 103, 1) 60%
  );
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  font-size: 1.5em;
  align-items: center;
  justify-content: space-between;
  .title {
    display: flex;
  }
  .links {
    display: flex;
    .link {
      /* padding: 20px; */
      margin-left: 10px;
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  .menu {
    button {
      color: white !important;
    }
    @media (min-width: 901px) {
      display: none;
    }
  }
  .indicator {
    .circle {
      height: 10px;
      width: 10px;
      border-radius: 100%;

      margin-top: 8px;
      margin-left: 5px;
      /* margin-right: auto;
      flex: start; */
    }
    .green {
      background-color: #6ffc03;
    }
    .red {
      background-color: #fc0703;
    }
  }
`;
