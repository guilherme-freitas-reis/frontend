import Card from '../../components/Card/Card';
import { ContainerCard } from './StylesCategoria';
import Layout from '../Layout/Layout';
import Panel from '../../components/Panel/Panel';

interface Carro{
  placa: string
  combustivel: string
  valorDaria: number
  portamalas: number
  montadora: string
  motor: string
  imagem: string
  nome: string
}

interface IProps {
  categoryName: string,
  carList: Carro[]
}

function Categoria({ carList, categoryName }: IProps) {
  return (
    <Layout>
      <Panel title={categoryName}>
        <ContainerCard>
          { carList.map((car) => (
            <Card
              title={car.nome}
              image={car.imagem}
              description={`Valor da Diária: ${car.valorDaria}`}
              buttonTitle="Reserva"
              buttonLink="/reserva"
            />
          ))}
        </ContainerCard>
      </Panel>
    </Layout>
  );
}

export default Categoria;
