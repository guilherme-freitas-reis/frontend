/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import { store } from 'react-notifications-component';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import Layout from '../Layout/Layout';
import {
  ButtonContainer,
  ContainerForm,
  Form,
  InputGroup,
  InputTitle,
  Label,
} from './styles/Devolucao.styles';

const Devolucao: FC = () => {
  const [carroLimpo, setCarroLimpo] = useState(null);
  const [tanqueCheio, setTanqueCheio] = useState(null);
  const [amassados, setAmassados] = useState(null);

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    if (carroLimpo === null || tanqueCheio === null || amassados === null) {
      store.addNotification({
        title: 'Ops!',
        message: 'Preencha todos os campos e tente novamente.',
        type: 'warning',
        container: 'bottom-right',
        dismiss: {
          duration: 3500,
          onScreen: true,
        },
      });
      return;
    }

    store.addNotification({
      title: 'Sucesso!',
      message: 'A devolução foi realizada.',
      type: 'success',
      container: 'bottom-right',
      dismiss: {
        duration: 3500,
        onScreen: true,
      },
    });
  }

  return (
    <Layout>
      <Panel
        title="Devolução"
        subTitle="Preencha o checklist para realizar a devolução do veículo"
      >
        <ContainerForm>
          <Card
            title="Econômico"
            image="https://www.localiza.com/brasil-site/geral/Frota/NUNS.png"
            description="Veículo similar a Fiat Uno 1.0, dentre outros."
            comment="Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência."
          />
          <Form onSubmit={handleSubmit}>
            <div>
              <InputGroup>
                <InputTitle>O carro está LIMPO?</InputTitle>
                <input
                  type="radio"
                  id="carro_limpo_true"
                  checked={carroLimpo === true}
                  onChange={() => setCarroLimpo(true)}
                />
                <Label htmlFor="carro_limpo_true">Sim</Label>
                <input
                  type="radio"
                  id="carro_limpo_false"
                  checked={carroLimpo === false}
                  onChange={() => setCarroLimpo(false)}
                />
                <Label htmlFor="carro_limpo_false">Não (+30%)</Label>
              </InputGroup>
              <InputGroup>
                <InputTitle>O tanque está CHEIO?</InputTitle>
                <input
                  type="radio"
                  id="tanque_cheio_true"
                  checked={tanqueCheio === true}
                  onChange={() => setTanqueCheio(true)}
                />
                <Label htmlFor="tanque_cheio_true">Sim</Label>
                <input
                  type="radio"
                  id="tanque_cheio_false"
                  checked={tanqueCheio === false}
                  onChange={() => setTanqueCheio(false)}
                />
                <Label htmlFor="tanque_cheio_false">Não (+30%)</Label>
              </InputGroup>
              <InputGroup>
                <InputTitle>
                  O carro apresenta AMASSADOS ou ARRANHÕES?
                </InputTitle>
                <input
                  type="radio"
                  id="amassados_true"
                  checked={amassados === true}
                  onChange={() => setAmassados(true)}
                />
                <Label htmlFor="amassados_true">Sim (+30%)</Label>
                <input
                  type="radio"
                  id="amassados_false"
                  checked={amassados === false}
                  onChange={() => setAmassados(false)}
                />
                <Label htmlFor="amassados_false">Não</Label>
              </InputGroup>
            </div>
            <ButtonContainer>
              <Button block>Confirmar Devolução</Button>
            </ButtonContainer>
          </Form>
        </ContainerForm>
      </Panel>
    </Layout>
  );
};

export default Devolucao;
