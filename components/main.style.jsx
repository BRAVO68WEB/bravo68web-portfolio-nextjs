import styled from "styled-components";

export default styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .social-buttons {
      button {
        margin: 5px;
      }
      .MuiSvgIcon-root {
        color: white;
      }
    }
    .buttons {
      button {
        background: var(--color1);
        border-radius: 20px;
        padding: 10px 15px;
        margin: 10px;
      }
    }
  }
  .profile {
    heigth: 250px;
    width: 250px;
    img {
      max-height: 100%;
      max-width: 100%;
    }
    margin-bottom: 20px;
  }
  .name {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
