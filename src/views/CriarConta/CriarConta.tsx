import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import CriarContaForm from '../../components/CriarContaForm/CriarContaForm';
import { Context } from '../../contexts/AuthContext';
import Layout from '../Layout/Layout';
import { SignInContainer } from './styles/CriarConta.styles';

export interface IProps {
  color: string;
}

const CriarConta: FC<IProps> = () => {
  const { authenticated } = useContext(Context);
  const router = useRouter();

  if (authenticated) { router.push('/'); }

  return (
    <Layout>
      <SignInContainer className="container">
        <CriarContaForm />
      </SignInContainer>
    </Layout>
  );
};

export default CriarConta;
