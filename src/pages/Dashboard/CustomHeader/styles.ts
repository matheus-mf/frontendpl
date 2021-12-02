import styled from 'styled-components';
import PeopleTalking from '../../../assets/images/people-talking.png';

export const Container = styled.header`
  section:first-of-type {
    background-image: linear-gradient(272deg, #ae276f, #5f1478);
    padding: 0.75rem 0.5rem;
    height: 64px;
  }

  article {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
  }

  section + section {
    background-image: url(${PeopleTalking});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 197px;

    display: flex;
    flex-direction: column;
    justify-content: end;

    article {
      position: relative;
      display: flex;
      padding: 0 0.5rem 2.5rem;

      max-width: 1046px;
      width: 100%;

      input {
        display: flex;
        width: 100%;

        background-color: #ffffff;
        font-size: 1.5rem;

        border: 1px solid transparent;
        border-radius: 0.5rem;

        padding: 1.25rem 5rem 1.5rem 1.75rem;

        &:focus {
          outline: none;
        }
      }

      > span {
        position: absolute;
        top: 1rem;
        right: 1.563rem;
      }
    }
  }
`;
