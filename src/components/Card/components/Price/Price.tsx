// eslint-disable-next-line no-use-before-define
import React, { HtmlHTMLAttributes } from 'react';
import {
  StylePrice, StyleTextPrice, Container, Image,
} from './StylesPrice';

export interface IProps extends HtmlHTMLAttributes<HTMLElement> {
  price?: number;
  textPrice: string;
  typePrice?: string;
}

function PriceConverter({ price, textPrice, typePrice }: IProps) {
  return (
    <Container>
      <StyleTextPrice>{textPrice}</StyleTextPrice>
      <StylePrice>
        {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        <span>{typePrice}</span>
      </StylePrice>
      <Image src="/images/logo-simples.png" />
    </Container>
  );
}

export default PriceConverter;
