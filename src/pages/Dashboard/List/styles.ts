import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1046px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0.5rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h2 {
      font-size: 2rem;
      font-weight: 400;
    }

    button {
      font-size: 1.125rem;
      font-weight: 700;
      color: #ffffff;

      background: #e76316;
      box-shadow: 0 3px 6px #92207242;
      border: 1px solid transparent;
      border-radius: 0.5rem;

      padding: 1rem 2.5rem;

      transition: 0.2s all;

      &:focus {
        outline: none;
      }

      &:hover {
        background: #a14109;
      }
    }
  }

  article {
    margin-top: 2.25rem;
    display: grid;
    gap: 1.75rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1080px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  > div {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;
