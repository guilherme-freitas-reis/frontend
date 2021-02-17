import Link from 'next/link';
import { FC } from 'react';
import { Container } from './styles/CardLink.styles';

interface IProps {
  href: string;
  children: string;
}

const CardLink: FC<IProps> = ({ children, href }) => (
  <Link href={href}>
    <Container>{children}</Container>
  </Link>
);

export default CardLink;
