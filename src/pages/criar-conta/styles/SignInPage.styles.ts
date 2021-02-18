import styled from 'styled-components';

export const SignInWrapper = styled.div`
  background-color: #00984a;
  min-height: 100vh;
`;

export const SignInContainer = styled.div`
  padding: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

export const InputName = styled.p`
  color: white;
  font-size: 14px;
`;
