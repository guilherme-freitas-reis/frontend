import { FC, useState } from 'react';
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

const Navbar: FC = () => {
  const [isLogged] = useState(false);
  const [isOperador] = useState(false);

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
            <Link href="/criar-conta">
              <a title="Crie sua conta">crie sua conta</a>
            </Link>
          </Action>
        </ListActions>
        {isLogged ? (
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
