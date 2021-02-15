import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { format } from 'date-fns';

registerLocale('pt-BR', ptBr);

 interface Props {
   placeholder:string
 }

const InputDate = ({ placeholder }:Props) => {
  const [date, setDate] = useState<Date>();
  const handleChange = (dateValue: Date) => {
    setDate(dateValue);
  };

  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  return (

    <DatePicker
      value={date && format(date, 'dd/MM/yyyy')}
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
