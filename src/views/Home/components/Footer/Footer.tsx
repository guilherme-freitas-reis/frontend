import { FC } from 'react';
import { Container, FooterBar } from './Footer.styles';

const Footer: FC = () => (
  <Container>
    <FooterBar className="container">
      <p>@ Localiza - Todos os direitos reservados</p>
      <p>Política de uso de dados e termos de privacidade</p>
    </FooterBar>
  </Container>
);

export default Footer;
