import styled from 'styled-components';

interface IFooterContainer {
  color?: string,
  backgroundColor?: string
}

export const FooterContainer = styled.footer<IFooterContainer>`
  display: flex;
  flex-flow: row wrap;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

export const LogoLocaliza = styled.img`
  cursor: pointer;
  width: auto;
  transition: 0.25s ease;
  margin: 12px 0 12px 0;

  &:hover {
    filter: brightness(1.25);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 70px 120px 33px 120px;
`;

export const RightContent = styled.div`
  margin-left: 200px;
  margin-top: 100px;

  a {
    margin: 10px;
    color: inherit;
    text-decoration: none;
    &:hover {text-decoration: underline}
  }

  p {
    margin: 10px;
  }

  h2 {
    margin: 10px;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  text-align: right;
  color: inherit;
  cursor: pointer;

  font-size: 1.2rem;
  font-weight: 300;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
