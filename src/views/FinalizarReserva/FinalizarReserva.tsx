import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { store } from 'react-notifications-component';
import Card from '../../components/Card/Card';
import CriarContaForm from '../../components/CriarContaForm/CriarContaForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Panel from '../../components/Panel/Panel';
import { Context } from '../../contexts/AuthContext';
import { api, CarDetails } from '../../services/api';
import Layout from '../Layout/Layout';
import { Container } from './styles/FinalizarReserva.styles';

interface IProps {
  carDetails: CarDetails;
}

interface IDadosReserva {
  dataRetirada: Date;
  dataDevolucao: Date;
  valorSimulado: number;
}

const FinalizarReserva: FC<IProps> = ({ carDetails }) => {
  const { authenticated } = useContext(Context);
  const router = useRouter();
  // const authenticated = false;

  const dadosReserva : IDadosReserva = JSON.parse(sessionStorage.getItem('dadosReserva'));

  async function finalizarReserva() {
    try {
      const response = await api.post('/Locacao/Agendar', {
        veiculoId: carDetails.id,
        dataLocacao: dadosReserva.dataRetirada,
        dataDevolucao: dadosReserva.dataDevolucao,
      });

      if (response.status === 200) {
        if (response.data.error) {
          store.addNotification({
            title: 'Ops!',
            message: `${response.data.error}`,
            type: 'warning',
            container: 'bottom-right',
            dismiss: {
              duration: 3500,
              onScreen: true,
            },
          });
        } else {
          router.push('/reservas/historico');

          store.addNotification({
            title: 'Sucesso!',
            message: 'Veículo alugado com sucesso. Obrigado(a) por usar a Localiza.',
            type: 'success',
            container: 'bottom-right',
            dismiss: {
              duration: 3500,
              onScreen: true,
            },
          });
        }
      } else {
        store.addNotification({
          title: 'Ops!',
          message: 'Não foi possível realizar sua locação.',
          type: 'danger',
          container: 'bottom-right',
          dismiss: {
            duration: 3500,
            onScreen: true,
          },
        });
      }
    } catch (error) {
      store.addNotification({
        title: 'Ops!',
        message: `${error.response.data}`,
        type: 'danger',
        container: 'bottom-right',
        dismiss: {
          duration: 3500,
          onScreen: true,
        },
      });
    }
  }

  return (
    <Layout>
      <Container>
        <Panel
          title="Finalizar Reserva"
          subTitle="Este é o último passo para finalizar sua reserva"
        >
          {authenticated ? (
            <Container>
              <Card
                title={`${carDetails.tipoVeiculoDescricao} - ${carDetails.modelo}`}
                image={carDetails.imagem}
                description={`Combustível: ${carDetails.combustivelDescricao}, Potência: ${carDetails.motor}, Porta Malas: ${carDetails.limitePortaMalas} litros, Placa: ${carDetails.placa}`}
                price={dadosReserva.valorSimulado}
                typePrice="/ total"
                buttonAction={finalizarReserva}
                buttonTitle="FINALIZAR RESERVA"
              />
            </Container>
          ) : (
            <Container>
              <LoginForm />
              <CriarContaForm />
            </Container>
          )}
        </Panel>
      </Container>
    </Layout>
  );
};

export default FinalizarReserva;
