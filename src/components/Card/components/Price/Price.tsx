// eslint-disable-next-line no-use-before-define
import React, { HtmlHTMLAttributes } from 'react';
import { StylePrice, StyleTextPrice, Container } from './StylesPrice';

export interface IProps extends HtmlHTMLAttributes<HTMLElement> {
  price?:number;
  textPrice:string
}

function PriceConverter({ price, textPrice }: IProps) {
  return (
    <Container>
      <StyleTextPrice>
        {textPrice}
      </StyleTextPrice>
      <StylePrice>
        { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </StylePrice>
    </Container>
  );
}

export default PriceConverter;
