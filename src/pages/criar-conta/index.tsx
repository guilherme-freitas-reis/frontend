import { FC } from 'react';
import {
  IoDocumentTextOutline, IoHappyOutline, IoKeyOutline, IoMailOutline, IoPhonePortraitOutline,
} from 'react-icons/io5';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import {
  InputName,
  SignInWrapper,
  SignInContainer,
} from './styles/SignInPage.styles';

export interface ISignInPage {
  color: string;
}

const SignInPage: FC<ISignInPage> = () => (
  <SignInWrapper>
    <Navbar />
    <SignInContainer>
      <h1>Fazer cadastro</h1>
      <div>
        <InputName>Nome</InputName>
        <Input
          iconBefore={<IoHappyOutline size={20} />}
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
        <InputName>E-mail</InputName>
        <Input
          type="email"
          iconBefore={<IoMailOutline size={20} />}
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
        <InputName>Senha</InputName>
        <Input
          type="password"
          iconBefore={<IoKeyOutline size={20} />}
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
      </div>
      <div>
        <InputName>Sobrenome</InputName>
        <Input
          iconBefore={<IoHappyOutline size={20} />}
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
        <InputName>Telefone</InputName>
        <Input
          iconBefore={<IoPhonePortraitOutline size={20} />}
          mask="telefone"
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
      </div>
      <div>
        <InputName>Gênero</InputName>
        <Input
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
        <InputName>CPF</InputName>
        <Input
          iconBefore={<IoDocumentTextOutline size={20} />}
          mask="cpf"
          backgroundColor="#f0f0f0"
          onFocusBackgroundColor="white"
          color="black"
        />
      </div>
      <Button background="#ddaa00" type="submit">Cadastrar</Button>
    </SignInContainer>
    <Footer />
  </SignInWrapper>
);

export default SignInPage;
