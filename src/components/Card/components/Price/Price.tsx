// eslint-disable-next-line no-use-before-define
import React, { HtmlHTMLAttributes } from 'react';
import { StylePrice, StyleTextPrice, Container } from './StylesPrice';

export interface IProps extends HtmlHTMLAttributes<HTMLElement> {
  price?:number;
}

function PriceConverter({ price }: IProps) {
  return (
    <Container>
      <StyleTextPrice>
        Valor da diária
      </StyleTextPrice>
      <StylePrice>
        { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </StylePrice>
    </Container>
  );
}

export default PriceConverter;
