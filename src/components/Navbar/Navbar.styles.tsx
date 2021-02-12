import styled from 'styled-components';

export const Container = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #00974a;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: auto;
  height: 90%;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: 60%;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
`;

export const ListActions = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 20px;

  @media(max-width: 500px) {
    display: none;
  }
`;

export const Action = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    margin: 0 10px;
    color: #fff;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ActionButton = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border: 1.5px solid #f1cb09;
  color: #f1cb09;
  border-radius: 3px;
  font-size: .9rem;
  font-weight: 500;
  cursor: pointer;
  transition: .5s;

  svg {
    margin-right: 10px;
    width: 1rem;
  }

  :hover {
    background: #d2d800;
    color: #fff;
  }
`;

export const UserAvatar = styled.div``;
