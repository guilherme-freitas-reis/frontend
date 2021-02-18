import { FC } from 'react';
import InputDate from '../../../../components/InputDate/InputDate';
import {
  ButtonSearch,
  FilterBarContainer,
  Form,
} from './styles/FilterBar.styles';

const FilterBar: FC = () => (
  <FilterBarContainer className="container">
    <Form method="GET">
      <InputDate placeholder="📅 Data de Retirada" />
      <InputDate placeholder="📅 Data de Devolução" />
      <ButtonSearch>Buscar</ButtonSearch>
    </Form>
  </FilterBarContainer>
);

export default FilterBar;
