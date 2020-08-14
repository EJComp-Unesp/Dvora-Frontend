import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: solid 0.1rem var(--color-border);

  h2 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 3rem;
    font-weight: 500;

    svg {
      font-size: 2.6rem;
      margin-left: 2rem; 
    }
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column; 

    h2 {
      margin-bottom: 1.2rem;
    }
  }
`;