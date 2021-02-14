import {
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { Icon, InputContainer, InputWrapper } from './styles/Input.styles';

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  type: 'text' | 'email' | 'password',
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  placeholder?: string,
  color?: string,
  backgroundColor?: string,
  onFocusBackgroundColor?: string,
  placeholderColor?: string
}

const Input: FC<IInput> = ({
  type = 'text',
  color,
  iconBefore,
  iconAfter,
  placeholder,
  placeholderColor = 'lightgray',
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
        type={type}
        placeholder={placeholder}
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
