import { FC } from 'react';
import {
  ButtonSearch,
  FilterBarContainer,
  Form,
  InputFake,
} from './styles/FilterBar.styles';

const FilterBar: FC = () => (
  <FilterBarContainer className="container">
    <Form method="GET">
      <InputFake placeholder="📅 Data de Retirada" type="text" />
      <InputFake placeholder="📅 Data de Devolução" type="text" />
      <ButtonSearch>Buscar</ButtonSearch>
    </Form>
  </FilterBarContainer>
);

export default FilterBar;
