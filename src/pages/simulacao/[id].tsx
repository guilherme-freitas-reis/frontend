import SimulacaoReserva from '../../views/Simulacao/Simulacao';
import { api, ApiCalls, CarDetails } from '../../services/api';

interface IProps {
  carDetails:CarDetails
}

const fetchCarById = async (carId: number) => {
  const res = await api.get(ApiCalls.carDetails + carId);
  const carDetails: CarDetails = res.data;
  return carDetails;
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const carDetails: CarDetails = await fetchCarById(id);
  return {
    props: {
      carDetails,
    },
  };
}
function PaginaDeSimulacao({ carDetails }: IProps) {
  return (
    <SimulacaoReserva carDetails={carDetails} />
  );
}

export default PaginaDeSimulacao;
