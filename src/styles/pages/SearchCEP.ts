import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.scndBackground};
  button {
    padding: 1rem;
    border-radius: 0 5px 5px 0;
    border: 0;
    background: ${({ theme }) => theme.colors.thirdBackground};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 200ms, color 200ms;
    @media (max-width: 576px) {
      margin-top: 1rem;
      width: 45%;
    }
    :hover {
      background: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;

export const CEPContainer = styled.div`
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
