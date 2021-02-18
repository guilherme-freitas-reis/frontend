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
    margin-top: 18px;
    margin-bottom: 6px;
  }
`;

export const SignUpText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    color: white;
    font-size: 16px;
    font-weight: 400px;
    margin: 12px;
  }

  a {
    color: #d4db26;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;

  /* input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  } */
`;

export const LogoImage = styled.img`
  width: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  cursor: pointer;
`;
