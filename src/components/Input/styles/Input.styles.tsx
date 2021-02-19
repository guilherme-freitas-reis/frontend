import styled from 'styled-components';

interface IInputWrapper {
  backgroundColor?: string
  color?: string
}

interface IInputContainer {
  color?: string
  placeholderColor?: string
}

export const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};

  width: 100%;
  margin: 10px 0;
  padding: 10px;

  box-shadow: -1px 2px 4px rgba(0,0,0,0.2);
  border-radius: 3px;

  transition: 0.25s ease;
`;

export const InputContainer = styled.input<IInputContainer>`
  outline: none;
  border: 1px solid rgba(0,0,0,0);

  width: 100%;
  margin-left: 6px;
  margin-right: 6px;
  padding: 2px;
  font-size: 0.85rem;
  font-weight: 400;
  color: ${(props) => props.color};
  background-color: inherit;

  &::placeholder{
    color: ${(props) => props.placeholderColor};
  }

`;

export const Icon = styled.span`
  background-color: inherit;
`;
