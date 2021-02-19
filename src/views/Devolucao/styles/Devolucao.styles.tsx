import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px 1%;
  padding: 20px;
  background: #fff;
  justify-content: space-between;
  border-radius: 5px;
`;

export const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

export const InputTitle = styled.h1`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-right: 20px;
  font-size: 1rem;
  opacity: .9;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
