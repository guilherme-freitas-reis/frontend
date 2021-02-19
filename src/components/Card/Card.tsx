// eslint-disable-next-line no-use-before-define
import React, { FC, HtmlHTMLAttributes } from 'react';
import CardLink from './components/CardLink/CardLink';
import Price from './components/Price/Price';

import {
  ContainerCard,
  Title,
  Image,
  Description,
  Comment,
} from './styles/Card.styles';

export interface IProps extends HtmlHTMLAttributes<HTMLElement> {
  title?: string;
  image?: string;
  description: string;
  comment?: string;
  buttonTitle?: string;
  buttonLink?: string;
  width?: string;
  background?: string;
  price?:number;
}

const Card: FC<IProps> = ({
  width = '31%',
  background = '#ffffff',
  title,
  image,
  description,
  comment,
  buttonTitle,
  buttonLink,
  price,
}) => (
  <ContainerCard width={width} background={background}>
    {title && <Title>{title}</Title>}
    {image && <Image src={image} alt={title} />}
    <Description>{description}</Description>
    {comment && <Comment>{comment}</Comment>}
    {price && <Price textPrice="Valor da hora" price={price} />}
    {buttonLink && <CardLink href={buttonLink}>{buttonTitle}</CardLink>}
  </ContainerCard>
);

export default Card;
