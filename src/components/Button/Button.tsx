import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { ButtonContainer } from './styles/Button.styles';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: string;
  color?: string;
  loading?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  block?: boolean;
  disabled?: boolean;
}

const Button: FC<IProps> = ({
  children,
  background = '#00984a',
  color = '#fff',
  loading,
  iconStart,
  iconEnd,
  block = false,
  disabled = false,
  ...rest
}) => (
  <ButtonContainer
    background={background}
    color={color}
    block={block}
    disabled={disabled || loading}
    {...rest}
  >
    {loading ? 'Carregando...' : (
      <>
        {iconStart && iconStart}
        {children}
        {iconEnd && iconEnd}
      </>
    )}
  </ButtonContainer>
);

export default Button;
