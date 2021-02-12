import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background: #00974a;
  height: auto;
  min-height: 55vh;
  position: relative;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Block = styled.div`
  width: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 3rem;
  margin-bottom: 30px;
  width: 100%;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #ffffff;
  width: 100%;
  opacity: 0.9;
`;

export const AppsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Apps = styled.a`
  display: flex;
  width: 200px;
  height: 55px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  background: #ffffff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 10px;
  transition: 0.3s;

  img {
    width: 20px;
    margin-right: 10px;
  }

  :hover {
    opacity: 0.9;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: auto 0 0 auto;
`;
