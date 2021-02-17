import { FC } from 'react';
import Layout from '../Layout/Layout';
import Banner from './components/Banner/Banner';
import { GreenBar } from './styles/Home.styles';

const Home: FC = () => (
  <Layout>
    <Banner />
    <GreenBar />
  </Layout>
);

export default Home;
