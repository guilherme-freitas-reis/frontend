import { useState } from 'react';
import { Select } from './StyleHora';
import ListHoras from '../../../public/utils/ListHoras';

const InputHora = () => {
  const [selectOption, setSelectOption] = useState();

  const handleChange = (event) => {
    setSelectOption(event.target.value);
  };

  // // const handleSubmit = () => {
  //   console.log(selectOption);
  // };

  return (
    <Select value={selectOption} onChange={handleChange}>
      {
        ListHoras.map((hora) => (
          <option value={hora.id}>{hora.repe}</option>
        ))
      }
    </Select>
  );
};

export default InputHora;
