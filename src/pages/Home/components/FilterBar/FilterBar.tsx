import { FC } from 'react';
import {
  ButtonSearch, Container, Form, InputFake,
} from './FilterBar.styles';

const FilterBar: FC = () => (
  <Container className="container">
    <Form method="GET">
      <InputFake placeholder="📅 Data de Retirada" type="text" />
      <InputFake placeholder="📅 Data de Devolução" type="text" />
      <ButtonSearch>Buscar</ButtonSearch>
    </Form>
  </Container>
);

export default FilterBar;
