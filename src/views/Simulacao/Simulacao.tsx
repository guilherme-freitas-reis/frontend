// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Price from '../../components/Card/components/Price/Price';
import InputCalculoReserva from '../../components/InputCadastro/InputCalculoReserva';
import Panel from '../../components/Panel/Panel';
import {
  api, ApiCalls, CarDetails, SimulationRequestBody, SimulationResponse,
} from '../../services/api';
import Layout from '../Layout/Layout';
import {
  ButtonContainer,
  ContainerForm,
  Form,
} from './styles/Simulacao.styles';

interface IProps {
  carDetails: CarDetails,
}

const SimulacaoReserva = ({ carDetails }:IProps) => {
  const [dataRetirada, setDataRetirada] = useState<Date>();
  const [dataDevolucao, setDataDevolucao] = useState<Date>();
  const [simulationValue, setSimulationValue] = useState<SimulationResponse>();

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
    getSimulation();
  };
  return (
    <Layout>
      <Panel
        title="Simulação de Reserva"
        subTitle="Preencha todos os campos para evetuar a reserva"
      >
        <ContainerForm>
          <Card
            title={carDetails.modelo}
            image={carDetails.imagem}
            description={carDetails.tipoVeiculoDescricao}
            comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
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
              <Price textPrice="Valor da Reserva" price={simulationValue.valorSimulado} />
            )}
            <ButtonContainer>
              <Button disabled={!dataDevolucao} onClick={handleClick} block>
                { !simulationValue ? 'Simular Reserva' : 'Reservar'}
              </Button>
            </ButtonContainer>
          </Form>
        </ContainerForm>
      </Panel>
    </Layout>
  );
};

export default SimulacaoReserva;
