import { FC } from 'react';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import Layout from '../Layout/Layout';
import { CategoriasList } from './styles/Categorias.styles';

const GrupoCarros: FC = () => (
  <Layout>
    <Panel
      title="Grupo de Carros"
      subTitle="Selecione o melhor grupo de carros para você"
    >
      <CategoriasList>
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/MOBI.png"
          description="Veículo similar a: Renault Kwid 1.0, Fiat Mobi 1.0, Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Veículos disponíveis"
          buttonLink="/grupo-de-carros/economico"
        />
        <Card
          title="Intermediário"
          image="https://www.localiza.com/brasil-site/geral/Frota/PRIS.png"
          description="Veículo similar a: GM Prisma 1.4, Ford Ka Sedan 1.5, Renault Logan 1.6, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Veículos disponíveis"
          buttonLink="/grupo-de-carros/intermediario"
        />
        <Card
          title="Luxo"
          image="https://www.localiza.com/brasil-site/geral/Frota/AUDB.png"
          description="Veículo similar a: Audi A4 TFSI, Novo Ford Fusion, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Veículos disponíveis"
          buttonLink="/grupo-de-carros/luxo"
        />
      </CategoriasList>
    </Panel>
  </Layout>
);

export default GrupoCarros;
