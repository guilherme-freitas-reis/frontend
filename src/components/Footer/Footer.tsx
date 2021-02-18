import Link from 'next/link';
import { FC } from 'react';
import {
  FooterContainer,
  FooterLink,
  LeftContent,
  LogoLocaliza,
  RightContent,
} from './styles/Footer.styles';

export interface IFooter {
  color?: string,
  backgroundColor?: string
}

const Footer: FC<IFooter> = ({
  color = 'white',
  backgroundColor = '#023b2a',
}) => (
  <FooterContainer color={color} backgroundColor={backgroundColor}>
    <LeftContent>
      <Link href="/">
        <LogoLocaliza
          src="/images/localiza-logo-tp.png"
          alt="localiza-logo"
          height="30px"
        />
      </Link>
      <Link href="alugar">
        <FooterLink>Alugue um carro</FooterLink>
      </Link>
      <Link href="empresas">
        <FooterLink>Para Empresas</FooterLink>
      </Link>
      <Link href="seminovos">
        <FooterLink>Seminovos</FooterLink>
      </Link>
      <Link href="faleconosco">
        <FooterLink>Fale Conosco</FooterLink>
      </Link>
    </LeftContent>
    <RightContent>
      <h2>Contato</h2>
      <a href="mailto:suportelocaliza@localiza.com">E-mail: suportelocaliza@localiza.com</a>
      <p>Telefones: +55 31 00000 0000 | +55 31 99999 9999</p>
      <br />
      <p>©Localiza - Todos direitos reservados</p>
    </RightContent>
  </FooterContainer>
);

export default Footer;
