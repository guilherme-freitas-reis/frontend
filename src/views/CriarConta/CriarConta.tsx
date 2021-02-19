import { FC } from 'react';
import CriarContaForm from '../../components/CriarContaForm/CriarContaForm';
import Layout from '../Layout/Layout';
import { SignInContainer } from './styles/CriarConta.styles';

export interface IProps {
  color: string;
}

const CriarConta: FC<IProps> = () => (
  <Layout>
    <SignInContainer className="container">
      <CriarContaForm />
    </SignInContainer>
  </Layout>
);

export default CriarConta;
