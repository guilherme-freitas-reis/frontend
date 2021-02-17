import { FC, HtmlHTMLAttributes } from 'react';
import CardLink from './components/CardLink/CardLink';

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
}) => (
  <ContainerCard width={width} background={background}>
    {title && <Title>{title}</Title>}
    {image && <Image src={image} alt={title} />}
    <Description>{description}</Description>
    {comment && <Comment>{comment}</Comment>}
    {buttonLink && <CardLink href={buttonLink}>{buttonTitle}</CardLink>}
  </ContainerCard>
);

export default Card;
