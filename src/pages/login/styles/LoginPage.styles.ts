import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #00984a;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  button {
    width: 40px;
    margin-top: 25px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
`;

export const LogoImage = styled.img`
  width: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  filter: brightness(1.4);
  cursor: pointer;
`;
