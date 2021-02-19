import Link from 'next/link';
import { FC, useState } from 'react';
import {
  IoDocumentTextOutline,
  IoHappyOutline,
  IoKeyOutline,
  IoCalendarClearOutline,
} from 'react-icons/io5';
import { store } from 'react-notifications-component';
import { api } from '../../services/api';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Form, SignUpText } from './styles/CriarContaForm.styles';

const CriarContaForm: FC = () => {
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
  const [diaDeNascimento, setDiaDeNascimento] = useState('');

  const [loading, setLoading] = useState(false);

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
      });
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

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Crie sua Conta!</h1>
      <Input
        iconBefore={<IoHappyOutline size={20} />}
        backgroundColor="#eee"
        onFocusBackgroundColor="white"
        color="black"
        placeholder="Digite seu nome completo"
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
        placeholder="Digite seu CPF (999.999.999-99)"
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
        placeholder="Digite sua data de nascimento"
        placeholderColor="gray"
        mask="data"
        value={diaDeNascimento}
        onChange={(event) => setDiaDeNascimento(event.target.value)}
      />
      <Button loading={loading} block>
        Criar Conta
      </Button>
      <SignUpText>
        <h2>Já possui uma conta?</h2>
        <Link href="/login">Faça Login.</Link>
      </SignUpText>
    </Form>
  );
};

export default CriarContaForm;
