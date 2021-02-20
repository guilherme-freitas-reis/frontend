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
            <>
              {reservas.map((reserva) => (
                <Card
                  key={reserva.marcaId}
                  title={`${reserva.tipoVeiculoDescricao} - ${reserva.modelo}`}
                  image={reserva.imagem}
                  description={`Combustível: ${reserva.combustivelDescricao}, Potência: ${reserva.motor}, Porta Malas: ${reserva.limitePortaMalas} litros, Placa: ${reserva.placa}`}
                  comment="Clique no botão abaixo para preencher o checklist de devolução"
                  buttonTitle="REALIZAR DEVOLUÇÃO"
                  buttonLink={`/reservas/devolucao/${reserva.clienteId}`}
                />
              ))}
            </>
          )}
        </ReservasList>
      </Panel>
    </Layout>
  );
};

export default GerenciarReservas;
