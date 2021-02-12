import { FC } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

import { HomeContainer } from './styles/Home.styles';

const Home: FC = () => (
  <HomeContainer>
    <Navbar />
    <Banner />
    <Footer />
  </HomeContainer>
);

export default Home;
