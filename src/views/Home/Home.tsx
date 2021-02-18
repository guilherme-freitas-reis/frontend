import { FC, useEffect } from 'react';
import { api } from '../../services/api';
import Layout from '../Layout/Layout';
import Banner from './components/Banner/Banner';
import { GreenBar } from './styles/Home.styles';

const Home: FC = () => {
  async function login() {
    const response = await api.post('/Account/login', {
      login: '166.128.250-49',
      senha: 'cliente',
    });
    console.log(response);
  }

  useEffect(() => {
    login();
  }, []);

  return (
    <Layout>
      <Banner />
      <GreenBar />
    </Layout>
  );
};

export default Home;
