import styled from "styled-components";

export default styled.div`
  height: 50px;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  background: var(--color1);
  display: flex;
  justify-content: center;
  .main-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    .api-status {
      justify-content: right;
      align-items: right;
      font-size: 1.2rem;
      padding-bottom: 20px;
    }

  }
`;
