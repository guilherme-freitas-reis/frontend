import styled from 'styled-components';

interface IButtonContainerProps {
  background: string;
  color: string;
  block: boolean;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  width: ${(props) => props.block && '100%'};
  height: 50px;
  font-size: 1rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  outline: none;
  border: 0;
  padding: 12px 32px;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  gap: 10px;


  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export default {};
