import styled from "@emotion/styled";

export const CursorStyle = styled.div`
  html {
    cursor: url("data:image/svg+xml,%3Csvg height='8' width='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' fill='%2364FFDA' r='2'/%3E%3C/svg%3E")
        4 4,
      auto;
  }

  .cursor {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: var(--width);
    height: var(--height);
    transform: translate(
      calc(var(--x) - var(--width) / 2),
      calc(var(--y) - var(--height) / 2)
    );
    transition: 150ms width cubic-bezier(0.39, 0.575, 0.565, 1),
      150ms height cubic-bezier(0.39, 0.575, 0.565, 1),
      150ms transform cubic-bezier(0.39, 0.575, 0.565, 1);
    z-index: var(--zIndex);
    pointer-events: none;
    will-change: transform;
    box-shadow: var(--boxShadow);
  }

  @media (pointer: fine) {
    .cursor {
      display: block;
    }
  }

  .cursor::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius);
    border: 2px solid #64ffda;
    opacity: var(--scale);
    -webkit-transform: scale(var(--scale));
    transform: scale(var(--scale));
    transition: 300ms opacity cubic-bezier(0.39, 0.575, 0.565, 1),
      300ms transform cubic-bezier(0.39, 0.575, 0.565, 1),
      150ms border-radius cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  html:not(html:hover) .cursor::after {
    opacity: 0;
    transform: scale(0);
  }
`;
