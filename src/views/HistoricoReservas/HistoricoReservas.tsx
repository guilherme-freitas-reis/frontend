import { FC, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import { api } from '../../services/api';
import IReservaProps from '../../types/Reserva';
import Layout from '../Layout/Layout';
import { ReservasList } from './styles/HistoricoReservas.styles';

const HistoricoReservas: FC = () => {
  const [reservas, setReservas] = useState<IReservaProps[]>([]);

  async function obterReservas() {
    api.get<IReservaProps[]>('/Locacao/Reserva/Cliente').then((response) => {
      setReservas(response.data);
    });
  }

  useEffect(() => {
    obterReservas();
  }, []);

  return (
    <Layout>
      <Panel title="Minhas Reservas">
        <ReservasList>
          {reservas.length === 0 ? (
            <div>Nenhuma reserva encontrada</div>
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

export default HistoricoReservas;
