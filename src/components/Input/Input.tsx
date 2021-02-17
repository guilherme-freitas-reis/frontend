import {
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { Icon, InputContainer, InputWrapper } from './styles/Input.styles';

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  color?: string,
  backgroundColor?: string,
  onFocusBackgroundColor?: string,
  placeholderColor?: string
}

const Input: FC<IInput> = ({
  color,
  iconBefore,
  iconAfter,
  placeholderColor = '#999',
  onFocusBackgroundColor = 'white',
  backgroundColor = 'white',
  ...rest
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const isOnFocus = () => setOnFocus(!onFocus);

  return (
    <InputWrapper
      backgroundColor={onFocus ? onFocusBackgroundColor : backgroundColor}
    >
      {iconBefore && <Icon>{iconBefore}</Icon>}
      <InputContainer
        color={color}
        placeholderColor={placeholderColor}
        onFocus={isOnFocus}
        onBlur={isOnFocus}
        {...rest}
      />
      {iconAfter && <Icon>{iconAfter}</Icon>}
    </InputWrapper>
  );
};

export default Input;
