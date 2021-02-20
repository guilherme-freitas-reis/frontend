// eslint-disable-next-line no-use-before-define
import React, { FC, HtmlHTMLAttributes } from 'react';
import CardLink, { CardAction } from './components/CardLink/CardLink';
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
  buttonAction?: () => {};
  width?: string;
  background?: string;
  price?:number;
  typePrice?: string;
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
  buttonAction,
  price,
  typePrice = '/ hora',
}) => (
  <ContainerCard width={width} background={background}>
    {title && <Title>{title}</Title>}
    {image && <Image src={image} alt={title} />}
    <Description>{description}</Description>
    {comment && <Comment>{comment}</Comment>}
    {price && <Price textPrice="Oferta Localiza" price={price} typePrice={typePrice} />}
    {buttonLink && <CardLink href={buttonLink}>{buttonTitle}</CardLink>}
    {buttonAction && <CardAction onCLick={buttonAction}>{buttonTitle}</CardAction>}
  </ContainerCard>
);

export default Card;
