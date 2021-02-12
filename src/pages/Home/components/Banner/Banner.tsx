import { FC } from 'react';
import FilterBar from '../FilterBar/FilterBar';

import {
  Block,
  Container,
  Title,
  SubTitle,
  AppsContainer,
  Apps,
  Image,
} from './Banner.styles';

const Banner: FC = () => (
  <Container className="container">
    <Block style={{ alignItems: 'flex-end' }}>
      <Title>
        Já pensou em alugar um carro
        hoje?
      </Title>
      <SubTitle>
        Confira a agência aberta mais perto de você, escolha o modelo
        ideal e fique livre de preocupações
      </SubTitle>
      <AppsContainer>
        <Apps>
          <img src="/images/google-play-icon.png" alt="Google Play Icon" />
          Google Play
        </Apps>
        <Apps>
          <img src="/images/apple-icon.png" alt="Apple Store Icon" />
          Apple Store
        </Apps>
      </AppsContainer>
    </Block>
    <Block className="hide-mobile">
      <Image src="/images/background.png" />
    </Block>
    <FilterBar />
  </Container>
);

export default Banner;
