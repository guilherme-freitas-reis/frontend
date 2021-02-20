import Link from 'next/link';
import { FC, useContext, useState } from 'react';
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { store } from 'react-notifications-component';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { api } from '../../services/api';
import { Container, SignUpText } from './styles/LoginForm.styles';
import { salvarRole, salvarToken } from '../../utils/crypto';
import { Context } from '../../contexts/AuthContext';

const LoginForm: FC = () => {
  const { handleLogin } = useContext(Context);

  const [isOperador, setIsOperador] = useState(false);
  const [loading, setLoading] = useState(false);

  const [matricula, setMatricula] = useState('');
  const [CPF, setCPF] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post('/Account/login', {
        usuario: isOperador ? matricula : CPF,
        senha,
      });

      setLoading(false);

      if (response.status === 200) {
        salvarToken(response.data.token);

        if (isOperador) { salvarRole('0'); } else { salvarRole('1'); }

        handleLogin();

        store.addNotification({
          title: 'Sucesso!',
          message: 'Login realizado.',
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
          message: 'Não foi possível realizar o login.',
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
        message: `${
          error.response.data || 'Não foi possível realizar o login.'
        }`,
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
    <Container onSubmit={handleSubmit}>
      <Link href="/">
        <h1>Faça seu Login!</h1>
      </Link>
      {isOperador ? (
        <Input
          type="text"
          color="black"
          backgroundColor="#eee"
          onFocusBackgroundColor="white"
          placeholder="Digite sua Matrícula"
          placeholderColor="gray"
          value={matricula}
          onChange={(event) => setMatricula(event.target.value)}
          required
          iconBefore={<IoMailOutline size={20} />}
        />
      ) : (
        <Input
          type="text"
          color="black"
          mask="cpf"
          backgroundColor="#eee"
          onFocusBackgroundColor="white"
          placeholder="Digite seu CPF"
          placeholderColor="gray"
          value={CPF}
          onChange={(event) => setCPF(event.target.value)}
          required
          iconBefore={<IoMailOutline size={20} />}
        />
      )}

      <Input
        type="password"
        color="black"
        backgroundColor="#eee"
        onFocusBackgroundColor="white"
        placeholder="Digite sua senha"
        placeholderColor="gray"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        required
        iconBefore={<IoKeyOutline size={20} />}
      />
      <SignUpText style={{ width: '100%', marginTop: 5 }}>
        {isOperador ? (
          <a onClick={() => setIsOperador(false)} style={{ textAlign: 'left' }}>
            Fazer login como cliente
          </a>
        ) : (
          <a onClick={() => setIsOperador(true)} style={{ textAlign: 'left' }}>
            Fazer login como operador
          </a>
        )}
      </SignUpText>
      <Button loading={loading} block>
        Fazer Login
      </Button>
      <SignUpText>
        <h2>Ainda não tem uma conta?</h2>
        <Link href="/criar-conta">Cadastre-se.</Link>
      </SignUpText>
    </Container>
  );
};
export default LoginForm;
