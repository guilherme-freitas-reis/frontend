import { FC, useContext } from 'react';
import Link from 'next/link';
import { IoPersonAddSharp, IoCarSharp } from 'react-icons/io5';

import {
  Action,
  ActionButton,
  ActionsContainer,
  NavbarContainer,
  ListActions,
  Logo,
} from './styles/Navbar.styles';
import { Context } from '../../contexts/AuthContext';

const Navbar: FC = () => {
  const { authenticated, isOperador, handleLogout } = useContext(Context);

  return (
    <NavbarContainer className="container">
      <Link href="/">
        <Logo
          src={`${process.env.NEXT_PUBLIC_URL}/images/logo-nav.png`}
          alt="Localiza Logo"
          height="65px"
        />
      </Link>
      <ActionsContainer>
        <ListActions>
          <Action>
            <Link href="/grupo-de-carros ">
              <a title="Grupo de Carros">grupo de carros</a>
            </Link>

            {authenticated ? (
              <Link href="/">
                <a onClick={handleLogout} title="Sair da Conta">sair da conta</a>
              </Link>
            ) : (
              <Link href="/criar-conta">
                <a title="Crie sua conta">crie sua conta</a>
              </Link>
            )}
          </Action>
        </ListActions>
        {authenticated ? (
          <>
            {isOperador ? (
              <Link href="/reservas/gerenciar">
                <ActionButton>
                  <IoCarSharp size={20} />
                  Gerenciar Reservas
                </ActionButton>
              </Link>
            ) : (
              <Link href="/reservas/historico">
                <ActionButton>
                  <IoCarSharp size={20} />
                  Minhas Reservas
                </ActionButton>
              </Link>
            )}
          </>
        ) : (
          <>
            <Link href="/login">
              <ActionButton>
                <IoPersonAddSharp size={20} />
                Login
              </ActionButton>
            </Link>
          </>
        )}
      </ActionsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
