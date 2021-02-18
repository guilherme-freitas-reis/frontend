import { FC, ReactNode } from 'react';

import {
  Container, PanelContainer, Title, SubTitle,
} from './styles/Panel.styles';

interface IProps {
  children: ReactNode;
  title: string;
  subTitle?: string;
}

const Panel: FC<IProps> = ({ children, title, subTitle }) => (
  <Container>
    <PanelContainer className="container">
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {children}
    </PanelContainer>
  </Container>
);

export default Panel;
