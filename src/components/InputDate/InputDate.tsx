import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { format } from 'date-fns';

registerLocale('pt-BR', ptBr);

const InputDate = () => {
  const [date, setDate] = useState<Date>();
  const handleChange = (dateValue: Date) => {
    setDate(dateValue);
  };
  return (

    <DatePicker
      value={date && format(date, 'dd/MM/yyyy')}
      locale="pt-BR"
      minDate={new Date()}
      showDisabledMonthNavigation
      placeholderText="insira da data"
      onChange={handleChange}
    />
  );
};

export default InputDate;
