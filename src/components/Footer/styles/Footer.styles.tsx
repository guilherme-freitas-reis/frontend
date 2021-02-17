import styled from 'styled-components';

interface IFooterContainer {
  color?: string;
  backgroundColor?: string;
}

export const FooterContainer = styled.footer<IFooterContainer>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

export const LogoLocaliza = styled.img`
  cursor: pointer;
  height: 60px;
  width: auto;
  transition: 0.25s ease;

  @media (max-width: 768px) {
    width: 200px;
    height: auto;
    margin: 20px auto 0;
  }

  &:hover {
    filter: brightness(1.25);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-flow: column;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const RightContent = styled.div`
  a {
    margin: 10px;
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 10px;
  }

  h2 {
    margin: 10px;
    font-weight: 500;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  text-align: right;
  color: inherit;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 300;
  margin: 5px;

  @media (max-width: 768px) {
    text-align: center;
  }

  &:hover {
    text-decoration: underline;
  }
`;
