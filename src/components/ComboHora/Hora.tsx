import { Select } from './StyleHora';
import ListHoras from '../../../public/utils/ListHoras';

interface IProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (arg: string) => void;
}
const InputHora = ({ value, onChange }:IProps) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Select disabled={!value} onChange={handleChange}>
      {
        ListHoras.map((hora) => (
          <option value={hora.repe}>{hora.repe}</option>
        ))
      }
    </Select>
  );
};

export default InputHora;
