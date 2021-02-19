import { FC, useState } from 'react';
import InputCalculoReserva from '../../../../components/InputCadastro/InputCalculoReserva';
import {
  ButtonSearch,
  FilterBarContainer,
  Form,
} from './styles/FilterBar.styles';

const FilterBar: FC = () => {
  const [dataRetirada, setDataRetirada] = useState<Date>();
  const [dataDevolucao, setDataDevolucao] = useState<Date>();
  return (
    <FilterBarContainer className="container">
      <Form method="GET">
        <div>
          <InputCalculoReserva
            value={dataRetirada}
            onChange={setDataRetirada}
            title="Data de Retirada"
            placeholder="Insira a  data de retirada"
          />
          {dataRetirada && (
            <InputCalculoReserva
              value={dataDevolucao}
              onChange={setDataDevolucao}
              title="Data de Devolução"
              placeholder="Insira a  data de devolução"
            />
          )}
        </div>
        <ButtonSearch disabled={!dataDevolucao}>Buscar</ButtonSearch>
      </Form>
    </FilterBarContainer>
  );
};

export default FilterBar;
