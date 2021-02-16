import { FC } from 'react';
import styled from 'styled-components';

interface ISpinner {
  color?: string,
}

const SpinnerContainer = styled.div`
  position: absolute;
  font-size: 80px;
  background-color: rgba(1,1,1,0.125);
  width: 100vw;
  min-height: 100vh;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;

  span {
    width: 100px;
    height: 100px;
    border: 10px solid #57bbbc;
    border-radius: 50%;
    border-top-color: transparent;
    animation: 1s spin infinite linear;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: FC<ISpinner> = () => (
  <SpinnerContainer>
    <span />
  </SpinnerContainer>
);

export default Spinner;
