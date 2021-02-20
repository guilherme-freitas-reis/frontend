import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 25px;
  margin: 25px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.1);
  min-width: 450px;

  h1 {
    color: #00a85a;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 1rem 0 2rem;
  }

  button {
    margin-top: 18px;
    margin-bottom: 6px;
  }

  @media(max-width: 768px) {
    width: 100%;
    margin: 0;
    min-width: unset;
  }
  /* input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  } */
`;

export const SignUpText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    cursor: pointer;
  }

  @media(max-width: 768px) {
    flex-direction: column;
  }

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
