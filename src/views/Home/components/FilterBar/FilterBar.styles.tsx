import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: 999;
  left: 15%;
  bottom: -45px;
  padding: 10px;
  height: 90px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    left: 10%;
  }
  @media (max-width: 1400px) {
    left: 8%;
  }
  @media (max-width: 1000px) {
    left: 5%;
  }
  @media (max-width: 768px) {
    left: 0;
    position: relative;
    height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputFake = styled.input`
  margin-right: 20px;
  border: none;
  padding: 0 15px;
  font-size: 1rem;

  @media (max-width: 768px) {
    height: 60px;
    margin-top: 20px;
  }
`;

export const ButtonSearch = styled.button`
  width: 120px;
  background: #ff6b00;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    margin-top: 20px;
  }
`;
