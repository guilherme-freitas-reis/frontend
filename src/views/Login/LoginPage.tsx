import { FC } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Layout from '../Layout/Layout';
import {
  LoginPageWrapper,
} from './styles/LoginPage.styles';

interface ILoginPage {
  dummy: string;
}

const LoginPage: FC<ILoginPage> = () => (
  <Layout>
    <LoginPageWrapper className="container">
      <LoginForm />
    </LoginPageWrapper>
  </Layout>
);

export default LoginPage;
