import { FC } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

import { Container } from './Home.styles';

const Home: FC = () => (
  <Container>
    <Navbar />
    <Banner />
    <Footer />
  </Container>
);

export default Home;
