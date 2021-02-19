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
      <Panel title={categoryName}>
        <ContainerCard>
          { carList.map((car) => (
            <Card
              title={car.modelo}
              image={car.imagem}
              description={`Combustivel ${car.tipoDeCombustivel}, Potencia ${car.tipoVeiculoDescricao}`}
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
