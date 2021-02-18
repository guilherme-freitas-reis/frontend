import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  flex: 1;
  /* background-color: #00a85a; */

  h1 {
    color: #023b2a;
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
    color: #023b2a;
    font-size: .9rem;
    font-weight: 400px;
    margin: 12px;
  }

  a {
    color: #00a85a;
    font-size: .9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.1);
  min-width: 450px;
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
