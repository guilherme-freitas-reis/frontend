import { FC } from 'react';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import Layout from '../Layout/Layout';
import { ReservasList } from './styles/GerenciarReservas.styles';

const GerenciarReservas: FC = () => (
  <Layout>
    <Panel title="Gerenciar Reservas">
      <ReservasList>
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Realizar Devolução"
          buttonLink="/reservas/devolucao/123"
        />
      </ReservasList>
    </Panel>
  </Layout>
);

export default GerenciarReservas;
