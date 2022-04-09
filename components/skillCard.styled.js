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
  .topSongs {
    display: flex;
    flex-direction: column;
  }
  .topSongs__song {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /* padding-right: 5px; */
    flex-direction: row;
    /* margin-bottom: 10px; */
  }
  .topSongs__song__info {
    display: flex;
    margin-left: 10px;
    /* align-items: center; */
    flex-direction: column;
    .topSongs__song__info__name {
      font-size: 1rem;

      font-weight: bold;
      color: var(--color4);
    }
    .topSongs__song__info__artist {
      font-size: 0.9rem;

      color: var(--color3);
    }
  }
  .bestScores__score__info__score__value {
    display: flex;
    flex-grow: 1;
  }
  .bestScores__score__info__name__artist {
    font-size: 1rem;
    color: var(--color4);
  }
  .bestScores__score__info__name__title {
    font-size: 0.9rem;
    color: var(--color3);
  }
  .skill-card-content {
    /* background-color: var(--color7); */
  }
  .skill-card-content-inner {
    color: var(--color4);
  }
`;
