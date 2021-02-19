import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBr from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

registerLocale('pt-BR', ptBr);

interface Props {
  placeholder:string
  value: Date;
  // eslint-disable-next-line no-unused-vars
  onChange: (arg: Date) => void;
}

const InputDate = ({ placeholder, value, onChange }:Props) => {
  const handleChange = (dateValue: Date) => {
    onChange(dateValue);
  };

  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  return (

    <DatePicker
      value={value && format(value, 'dd/MM/yyyy')}
      locale="pt-BR"
      minDate={new Date()}
      showDisabledMonthNavigation
      placeholderText={placeholder}
      onChange={handleChange}
      onChangeRaw={handleDateChangeRaw}
    />
  );
};

export default InputDate;
