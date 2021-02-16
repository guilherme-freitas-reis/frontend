import { FC, HtmlHTMLAttributes } from 'react';
import Button from '../Button/Button';

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
  width?: string;
  background?: string;
}

const Card: FC<IProps> = ({
  width = '33%',
  background = '#ffffff',
  title,
  image,
  description,
  comment,
  buttonTitle,
}) => (
  <ContainerCard width={width} background={background}>
    {title && <Title>{title}</Title>}
    {image && <Image src={image} alt={title} />}
    <Description>{description}</Description>
    {comment && <Comment>{comment}</Comment>}
    {buttonTitle && (
      <Button
        block
        background="#d4db26"
        color="#004a34"
        style={{ textTransform: 'uppercase', marginTop: 30 }}
      >
        {buttonTitle}
      </Button>
    )}
  </ContainerCard>
);

export default Card;
