import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Context } from '../../contexts/AuthContext';
import Layout from '../Layout/Layout';
import {
  LoginPageWrapper,
} from './styles/LoginPage.styles';

interface ILoginPage {
  dummy: string;
}

const LoginPage: FC<ILoginPage> = () => {
  const { authenticated } = useContext(Context);
  const router = useRouter();

  if (authenticated) { router.push('/'); }

  return (
    <Layout>
      <LoginPageWrapper className="container">
        <LoginForm />
      </LoginPageWrapper>
    </Layout>
  );
};

export default LoginPage;
