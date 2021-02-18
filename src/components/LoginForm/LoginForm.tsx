import Link from 'next/link';
import { FC } from 'react';
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Container, LogoImage, SignUpText } from './styles/LoginForm.styles';

const LoginForm: FC = () => (
  <Container>
    <Link href="/">
      <LogoImage
        src="/images/localiza-logo-tp.png"
        alt="localiza-logo"
        height="35px"
      />
    </Link>
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
  </Container>
);

export default LoginForm;
