import Link from 'next/link';
import { FC } from 'react';
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Layout from '../Layout/Layout';
import {
  LoginForm,
  LoginPageWrapper,
  LogoImage,
  SignUpText,
} from './styles/LoginPage.styles';

interface ILoginPage {
  dummy: string;
}

const LoginPage: FC<ILoginPage> = () => (
  <Layout>
    <LoginPageWrapper className="container">
      <LoginForm>
        <Link href="/">
          <LogoImage
            src="/images/localiza-logo-tp.png"
            alt="localiza-logo"
            height="35px"
          />
        </Link>
        {/* <h1>Fazer login</h1> */}
        <Input
          type="text"
          color="black"
          mask="cpf"
          backgroundColor="#eee"
          onFocusBackgroundColor="white"
          placeholder="Digite seu CPF..."
          placeholderColor="gray"
          iconBefore={<IoMailOutline size={20} />}
        />
        <Input
          type="password"
          color="black"
          backgroundColor="#eee"
          onFocusBackgroundColor="white"
          placeholder="Digite sua senha..."
          placeholderColor="gray"
          iconBefore={<IoKeyOutline size={20} />}
        />
        <Button block>Fazer Login</Button>
        <SignUpText>
          <h2>Ainda não tem uma conta?</h2>
          <Link href="/criar-conta">Cadastre-se.</Link>
        </SignUpText>
      </LoginForm>
    </LoginPageWrapper>
  </Layout>
);

export default LoginPage;
