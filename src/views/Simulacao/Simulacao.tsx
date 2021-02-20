// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Price from '../../components/Card/components/Price/Price';
import InputCalculoReserva from '../../components/InputCadastro/InputCalculoReserva';
import Panel from '../../components/Panel/Panel';
import {
  api,
  ApiCalls,
  CarDetails,
  SimulationRequestBody,
  SimulationResponse,
} from '../../services/api';
import Layout from '../Layout/Layout';
import {
  ButtonContainer,
  ContainerForm,
  Form,
} from './styles/Simulacao.styles';

interface IProps {
  carDetails: CarDetails;
}
interface IfilterProps {
  dataRetirada: Date;
  dataDevolucao: Date;
}
const SimulacaoReserva = ({ carDetails }: IProps) => {
  const [dataRetirada, setDataRetirada] = useState<Date>();
  const [dataDevolucao, setDataDevolucao] = useState<Date>();
  const [simulationValue, setSimulationValue] = useState<SimulationResponse>();
  const router = useRouter();

  const getSimulation = async () => {
    const requestBody: SimulationRequestBody = {
      veiculoId: carDetails.id,
      entrada: dataRetirada.toISOString(),
      saida: dataDevolucao.toISOString(),
    };
    const res = await api.post(ApiCalls.sendSimulation, requestBody);
    const simulationResult: SimulationResponse = res.data;
    setSimulationValue(simulationResult);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!simulationValue) {
      getSimulation();
    } else {
      sessionStorage.setItem('dadosReserva', JSON.stringify({
        dataRetirada,
        dataDevolucao,
        valorSimulado: simulationValue.valorSimulado,
      }));
      router.push(`/finalizar-reserva/${carDetails.id}`);
    }
  };

  useEffect(() => {
    const getFilter = () => {
      const filtro = sessionStorage.getItem('filtro');
      if (filtro) {
        const tipoFilter: IfilterProps = JSON.parse(filtro);
        setDataRetirada(new Date(tipoFilter.dataRetirada));
        setDataDevolucao(new Date(tipoFilter.dataDevolucao));
      }
    };

    getFilter();
  }, []);

  return (
    <Layout>
      <Panel
        title="Simulação de Reserva"
        subTitle="Preencha todos os campos para simular a sua reserva"
      >
        <ContainerForm>
          <Card
            title={`${carDetails.tipoVeiculoDescricao} - ${carDetails.modelo}`}
            image={carDetails.imagem}
            description={`Combustível: ${carDetails.combustivelDescricao}, Potência: ${carDetails.motor}, Porta Malas: ${carDetails.limitePortaMalas} litros, Placa: ${carDetails.placa}`}
            comment="Para realizar a simulação, preencha as datas de retirada e devolução."
          />
          <Form>
            <div>
              <InputCalculoReserva
                value={dataRetirada}
                onChange={setDataRetirada}
                title="Data de Retirada"
                placeholder="Insira a  data de retirada"
              />
              {dataRetirada && (
                <InputCalculoReserva
                  value={dataDevolucao}
                  onChange={setDataDevolucao}
                  title="Data de Devolução"
                  placeholder="Insira a  data de devolução"
                />
              )}
            </div>
            {simulationValue && (
              <Price
                textPrice="Valor da Reserva"
                price={simulationValue.valorSimulado}
                typePrice="/ total"
              />
            )}
            <ButtonContainer>
              <Button disabled={!dataDevolucao} onClick={handleClick} block>
                {!simulationValue ? 'Simular Reserva' : 'Reservar'}
              </Button>
            </ButtonContainer>
          </Form>
        </ContainerForm>
      </Panel>
    </Layout>
  );
};

export default SimulacaoReserva;
