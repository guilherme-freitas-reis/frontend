import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 4rem 0;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #004a34;
  margin-bottom: 1rem;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #004a34;
  margin-bottom: 2rem;
  padding: 0 10px;
`;
