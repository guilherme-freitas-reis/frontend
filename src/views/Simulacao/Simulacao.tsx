// eslint-disable-next-line no-use-before-define
import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import InputHora from '../../components/ComboHora/Hora';
import InputDate from '../../components/InputDate/InputDate';
import Panel from '../../components/Panel/Panel';
import { CarDetails } from '../../services/api';
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
  const handleSubmit = () => {

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
          <Form onSubmit={handleSubmit}>
            <div>
              <InputDate placeholder=" 📅 Data de Retirada" />
              <InputHora />
            </div>
            <ButtonContainer>
              <Button block>Reservar</Button>
            </ButtonContainer>
          </Form>
        </ContainerForm>
      </Panel>
    </Layout>
  );
};

export default SimulacaoReserva;
