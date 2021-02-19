import { FC, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import { api } from '../../services/api';
import IReservaProps from '../../types/Reserva';
import Layout from '../Layout/Layout';
import { ReservasList } from './styles/GerenciarReservas.styles';

const GerenciarReservas: FC = () => {
  const [reservas, setReservas] = useState<IReservaProps[]>([]);

  async function obterReservas() {
    api.get<IReservaProps[]>('/Locacao/Reservas').then((response) => {
      setReservas(response.data);
    });
  }

  useEffect(() => {
    obterReservas();
  }, []);
  return (
    <Layout>
      <Panel title="Gerenciar Reservas">
        <ReservasList>
          {reservas.length === 0 ? (
            <h1>Nenhuma reserva encontrada.</h1>
          ) : (
            <h1>
              {reservas.map((reserva) => {
                <Card
                  title={reserva.tipoVeiculoDescricao}
                  image={reserva.imagem}
                  description={reserva.modelo}
                />;
              })}
            </h1>
          )}
        </ReservasList>
      </Panel>
    </Layout>
  );
};

export default GerenciarReservas;
