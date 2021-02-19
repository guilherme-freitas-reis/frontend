import styled from 'styled-components';

export const SignInWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-color: #00984a;
  min-height: 100vh;
`;

export const SignInContainer = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  margin: auto 40px;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: white;
    grid-column: 1 / 4;
  }

  button {
    width: 50%;
  }
`;

export const InputName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
