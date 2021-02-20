import axios from 'axios';
import Link from 'next/link';
import { FC, useContext, useState } from 'react';
import {
  IoDocumentTextOutline,
  IoHappyOutline,
  IoKeyOutline,
  IoCalendarClearOutline,
  IoHomeOutline,
  IoBusiness,
  IoMapOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import { store } from 'react-notifications-component';
import { Context } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import { salvarRole, salvarToken } from '../../utils/crypto';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {
  Form,
  SignUpText,
  FormWrapper,
  SignInTitle,
} from './styles/CriarContaForm.styles';

const CriarContaForm: FC = () => {
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
  const [diaDeNascimento, setDiaDeNascimento] = useState('');
  const [cep, setCep] = useState('');
  const [numeracao, setNumeracao] = useState('');
  const [complemento, setComplemento] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const [loading, setLoading] = useState(false);
  const { handleLogin } = useContext(Context);

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    if (!nome || !CPF || !senha || !senhaConfirmacao) {
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

    if (senha !== senhaConfirmacao) {
      store.addNotification({
        title: 'Ops!',
        message: 'As senhas precisam ser iguais.',
        type: 'warning',
        container: 'bottom-right',
        dismiss: {
          duration: 3500,
          onScreen: true,
        },
      });

      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/Account/create', {
        nome,
        senha,
        cpf: CPF,
        diaDeNascimento,
        tipoUsuario: 1,
        endereco: {
          cep,
          logradouro: rua,
          numeracao,
          complemento,
          cidade,
          estado,
        },
      });

      const responseLogin = await api.post('/Account/login', {
        usuario: CPF,
        senha,
      });

      salvarToken(responseLogin.data.token);

      salvarRole('1');

      handleLogin();

      setLoading(false);

      if (response.status === 200) {
        store.addNotification({
          title: 'Sucesso!',
          message: 'Sua conta foi criado. Bem vindo(a) à Localiza.',
          type: 'success',
          container: 'bottom-right',
          dismiss: {
            duration: 3500,
            onScreen: true,
          },
        });
      } else {
        store.addNotification({
          title: 'Ops!',
          message: 'Não foi possível cadastrar sua conta.',
          type: 'danger',
          container: 'bottom-right',
          dismiss: {
            duration: 3500,
            onScreen: true,
          },
        });
      }
    } catch (error) {
      setLoading(false);

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

  const buscaCepApi = 'https://brasilapi.com.br/api/cep/v1/';

  const buscarCEP = (userCep) => {
    const ecep = userCep.split('-');
    axios(buscaCepApi + ecep).then(({ data }) => {
      setRua(data.street);
      setBairro(data.neighborhood);
      setCidade(data.city);
      setEstado(data.state);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SignInTitle>Crie sua Conta!</SignInTitle>
      <FormWrapper>
        <div>
          <Input
            iconBefore={<IoHappyOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Nome completo"
            placeholderColor="gray"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <Input
            iconBefore={<IoDocumentTextOutline size={20} />}
            mask="cpf"
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="CPF (999.999.999-99)"
            placeholderColor="gray"
            value={CPF}
            onChange={(event) => setCPF(event.target.value)}
          />
          <Input
            type="password"
            iconBefore={<IoKeyOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Digite uma senha segura"
            placeholderColor="gray"
            value={senha}
            minLength={6}
            onChange={(event) => setSenha(event.target.value)}
          />
          <Input
            type="password"
            iconBefore={<IoKeyOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Repita sua senha segura"
            placeholderColor="gray"
            minLength={6}
            value={senhaConfirmacao}
            onChange={(event) => setSenhaConfirmacao(event.target.value)}
          />
          <Input
            iconBefore={<IoCalendarClearOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Data de nascimento"
            placeholderColor="gray"
            mask="data"
            value={diaDeNascimento}
            onChange={(event) => setDiaDeNascimento(event.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            iconBefore={<IoHomeOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Digite seu CEP"
            placeholderColor="gray"
            mask="cep"
            onBlur={(e) => ((e.target.value.length === 9) && buscarCEP(e.target.value))}
            onChange={(e) => setCep(e.target.value)}
          />
          <Input
            type="text"
            iconBefore={<IoHomeOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Logradouro"
            placeholderColor="gray"
            value={rua}
            onChange={(event) => setRua(event.target.value)}
          />
          <Input
            type="text"
            iconBefore={<IoHomeOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Numeração"
            placeholderColor="gray"
            onChange={(event) => setNumeracao(event.target.value)}
          />
          <Input
            type="text"
            iconBefore={<IoHomeOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Complemento"
            placeholderColor="gray"
            onChange={(event) => setComplemento(event.target.value)}
          />
          <Input
            type="text"
            iconBefore={<IoBusiness size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Bairro"
            placeholderColor="gray"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
          />
          <Input
            type="text"
            iconBefore={<IoLocationOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Cidade"
            placeholderColor="gray"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />
          <Input
            type="text"
            iconBefore={<IoMapOutline size={20} />}
            backgroundColor="#eee"
            onFocusBackgroundColor="white"
            color="black"
            placeholder="Estado"
            placeholderColor="gray"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          />
        </div>
      </FormWrapper>
      <div style={{ width: '100%' }}>
        <Button loading={loading} block>
          Criar Conta
        </Button>
        <SignUpText>
          <h2>Já possui uma conta?</h2>
          <Link href="/login">Faça Login.</Link>
        </SignUpText>
      </div>
    </Form>
  );
};

export default CriarContaForm;
