import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  margin: 1rem 0 0;
  background: #0e8341;
  color: #fff;
  padding: 20px 40px;
  border-radius: 5px;
  position: relative;
`;

export const StyleTextPrice = styled.div`
  font-size: .9rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const StylePrice = styled.div`
  font-size: 1.5rem;
  color: #d4db26;
  font-weight: 600;

  span {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  width: 50px;
  position: absolute;
  right: 20px;
`;
