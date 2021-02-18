import { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import { InputName, SignInWrapper, SignInContainer } from './styles/SignInPage.styles';

export interface ISignInPage {
  color: string,
}

const SignInPage: FC<ISignInPage> = () => (
  <SignInWrapper>
    <Navbar />
    <SignInContainer>
      <div>
        <InputName>Nome completo</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
        <InputName>E-mail</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
        <InputName>Senha</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
      </div>
      <div>
        <InputName>Opção</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
        <InputName>Opção</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
        <InputName>Opção</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
      </div>
      <div>
        <InputName>Opção</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
        <InputName>Opção</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
        <InputName>Opção</InputName>
        <Input backgroundColor="#ddd" onFocusBackgroundColor="white" color="black" />
      </div>
    </SignInContainer>
    <Footer />
  </SignInWrapper>
);

export default SignInPage;
