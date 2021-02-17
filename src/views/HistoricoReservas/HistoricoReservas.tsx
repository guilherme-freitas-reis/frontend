import { FC } from 'react';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import Layout from '../Layout/Layout';
import { ReservasList } from './styles/HistoricoReservas.styles';

const HistoricoReservas: FC = () => (
  <Layout>
    <Panel title="Minhas Reservas">
      <ReservasList>
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
        <Card
          title="Econômico"
          image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
          description="Veículo similar a Fiat Uno 1.0, dentre outros."
          comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          buttonTitle="Ver Detalhes"
          buttonLink="/reservas/historico/1232132/detalhes"
        />
      </ReservasList>
    </Panel>
  </Layout>
);

export default HistoricoReservas;
