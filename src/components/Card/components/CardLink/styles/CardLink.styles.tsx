import styled from 'styled-components';

export const Container = styled.a`
  height: 55px;
  background: #d4db26;
  color: #004a34;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #e8f032;
  }
`;
