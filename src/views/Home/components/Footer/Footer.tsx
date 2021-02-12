import { FC } from 'react';
import { FooterContainer, FooterBar } from './styles/Footer.styles';

const Footer: FC = () => (
  <FooterContainer>
    <FooterBar className="container">
      <p>@ Localiza - Todos os direitos reservados</p>
      <p>Política de uso de dados e termos de privacidade</p>
    </FooterBar>
  </FooterContainer>
);

export default Footer;
