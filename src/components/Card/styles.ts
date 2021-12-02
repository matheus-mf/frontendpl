import styled, { css } from 'styled-components';

type IActionButton = {
  colorHover: string;
};

export const Container = styled.div`
  width: 234px;
  box-shadow: 0 3px 6px #e5e5e5;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  padding: 1.75rem 1.25rem;

  > div {
    width: 95px;
    height: 95px;
    margin: 0 auto;
    padding: 0.75rem;

    border: 1px solid #e4e4e4;
    background-color: #f6f4f6;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }

  hr {
    margin: 1.25rem auto 0.5rem;
    width: 169px;
    border: 0;
    border-bottom: 1px solid #f0eff0;
  }

  p {
    text-align: center;
    color: #263238;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: inset 0 3px 6px #0000000f;
  padding-top: 0.75rem;
  padding-bottom: 0.7rem;
`;

export const ActionButton = styled.button<IActionButton>`
  background-color: transparent;
  border: none;

  color: #263238;
  opacity: 0.48;

  transition: 0.2s all;

  &:focus {
    outline: none;
  }

  &:hover {
    ${props => css`
      color: ${props.colorHover};
    `}
    opacity: 1;
  }

  > span {
    margin-left: 0.5rem;
  }

  + button {
    margin-left: 2.5rem;
  }
`;
