import { FC } from 'react';
import { Container, Main } from './styles/Layout.styles';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Layout: FC = ({ children }) => (
  <Container>
    <Navbar />
    <Main>{children}</Main>
    <Footer />
  </Container>
);

export default Layout;
