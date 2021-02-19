import styled from 'styled-components';

interface ICardContainerProps {
  width: string;
  background: string;
}

export const ContainerCard = styled.article<ICardContainerProps>`
  display: flex;
  width: ${(props) => props.width};
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 20px;
  background: ${(props) => props.background};
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.1);
  margin: 20px 1%;

  @media(max-width: 1200px) {
    width: 48%;
    max-width: unset;
    min-width: unset;
  }

  @media(max-width: 600px) {
    width: 100%;
    max-width: unset;
    min-width: unset;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: #004a34;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  margin: 1rem 0;
`;

export const Description = styled.h2`
  font-size: .85rem;
  margin: 1rem;
  text-align: center;
`;

export const Comment = styled.p`
  font-size: .7rem;
  text-align: center;
  max-width: 300px;
  line-height: 15px;
  opacity: .8;
`;
