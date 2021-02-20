import { api, ApiCalls, CarDetails } from '../../services/api';
import FinalizarReserva from '../../views/FinalizarReserva/FinalizarReserva';

interface IProps {
  carDetails: CarDetails;
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
function FinalizarReservaPage({ carDetails }: IProps) {
  return <FinalizarReserva carDetails={carDetails} />;
}

export default FinalizarReservaPage;
