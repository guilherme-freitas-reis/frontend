import Link from 'next/link';
import { FC } from 'react';
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { LoginForm, LoginPageWrapper, LogoImage } from './styles/LoginPage.styles';

interface ILoginPage {
  dummy: string,
}

const LoginPage: FC<ILoginPage> = () => (
  <LoginPageWrapper>
    <Link href="/">
      <LogoImage
        src="/images/localiza-logo-tp.png"
        alt="localiza-logo"
        height="40px"
      />
    </Link>
    <h1>Fazer login</h1>
    <LoginForm>
      <Input
        type="number"
        color="black"
        backgroundColor="lightgray"
        onFocusBackgroundColor="white"
        placeholder="Digite seu CPF..."
        placeholderColor="gray"
        iconBefore={<IoMailOutline size={20} />}
      />
      <Input
        type="password"
        color="black"
        backgroundColor="lightgray"
        onFocusBackgroundColor="white"
        placeholder="Digite sua senha..."
        placeholderColor="gray"
        iconBefore={<IoKeyOutline size={20} />}
      />
      <Button background="#cfd600">
        Entrar
      </Button>
    </LoginForm>
  </LoginPageWrapper>
);

export default LoginPage;
