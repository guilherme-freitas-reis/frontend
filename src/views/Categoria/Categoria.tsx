import Card from '../../components/Card/Card';
import { ContainerCard } from './StylesCategoria';
import Layout from '../Layout/Layout';
import Panel from '../../components/Panel/Panel';
import { CarDetails } from '../../services/api';

interface IProps {
  categoryName: string,
  carList: CarDetails[]
}

function Categoria({ carList, categoryName }: IProps) {
  return (
    <Layout>
      <Panel title={categoryName} subTitle="Selecione o veículo que mais combina com você">
        <ContainerCard>
          { carList.map((car) => (
            <Card
              title={car.modelo}
              image={car.imagem}
              description={`Combustível: ${car.combustivelDescricao}, Potência: ${car.motor}, Porta Malas: ${car.limitePortaMalas} litros`}
              price={car.valorHora}
              buttonTitle="Simular Reserva"
              buttonLink={`/simulacao/${car.id}`}
            />
          ))}
        </ContainerCard>
      </Panel>
    </Layout>
  );
}

export default Categoria;
