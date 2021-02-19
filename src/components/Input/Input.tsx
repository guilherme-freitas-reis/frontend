import {
  FC,
  FormEvent,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import {
  maskCEP,
  maskCPF,
  maskCNPJ,
  maskTelefone,
  maskNumber,
} from '../../utils/inputmasks';
import { Icon, InputContainer, InputWrapper } from './styles/Input.styles';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  color?: string;
  backgroundColor?: string;
  onFocusBackgroundColor?: string;
  placeholderColor?: string;
  mask?: 'cpf' | 'cpnj' | 'cep' | 'telefone' | 'number';
}

const Input: FC<IInput> = ({
  color,
  iconBefore,
  iconAfter,
  placeholderColor = '#999',
  onFocusBackgroundColor = 'white',
  backgroundColor = 'white',
  mask,
  ...rest
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const isOnFocus = () => setOnFocus(!onFocus);
  const handleKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
    if (mask === 'cpf') maskCPF(e);
    else if (mask === 'cpnj') maskCNPJ(e);
    else if (mask === 'telefone') maskTelefone(e);
    else if (mask === 'cep') maskCEP(e);
    else if (mask === 'number') maskNumber(e);
  }, [mask]);

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
        onKeyUp={handleKeyUp}
        {...rest}
      />
      {iconAfter && <Icon>{iconAfter}</Icon>}
    </InputWrapper>
  );
};

export default Input;
