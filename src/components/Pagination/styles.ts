import styled, { css } from 'styled-components';

interface IFirstLi {
  isDisabled: boolean;
}

interface INumberLi {
  active: boolean;
}

interface ILastLi {
  isDisabled: boolean;
}

export const Container = styled.div`
  ul {
    display: flex;
    background: #ffffff;
    width: max-content;

    li {
      list-style: none;
      line-height: 42px;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 700;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;

      + li {
        margin-left: 1rem;
      }
    }
  }
`;

export const FirstLi = styled.li<IFirstLi>`
  padding: 0 1rem;
  background: #bfbfbf;
  color: #ffffff;

  &:hover {
    background: #676767;
  }

  ${props =>
    props.isDisabled &&
    css`
      color: #6767677f;
      background: #fff;
      pointer-events: none;
    `}
`;

export const NumberLi = styled.li<INumberLi>`
  height: 2.625rem;
  width: 2.5rem;
  background: #fff;

  &:hover {
    background: #5f1478;
    color: #ffffff;
  }

  ${props =>
    props.active &&
    css`
      background: #ae276f;
      color: #ffffff;
    `}
`;

export const DotsLi = styled.li`
  height: 2.625rem;
  width: 2.5rem;
  background: #fff;
  pointer-events: none;
`;

export const LastLi = styled.li<ILastLi>`
  padding: 0 1rem;
  background: #bfbfbf;
  color: #ffffff;

  &:hover {
    background: #676767;
  }

  ${props =>
    props.isDisabled &&
    css`
      color: #6767677f;
      background: #fff;
      pointer-events: none;
    `}
`;
