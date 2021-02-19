import InputDate from '../InputDate/InputDate';
import Hora from '../ComboHora/Hora';
import { InputDadosReserva, Title } from './styles/stylesInputCalculoReserva';

interface IProps {
  title:string
  placeholder:string
  value: Date;
  // eslint-disable-next-line no-unused-vars
  onChange: (arg: Date) => void;
}

const InputCalculoReserva = ({ title, ...props } :IProps) => {
  const handleChangeHour = (hora:string) => {
    const newDate = new Date(props.value);
    const [hour, minutes] = hora.split(':');
    newDate.setHours(parseInt(hour, 10), parseInt(minutes, 10));
    props.onChange(newDate);
  };
  const getHours = () => {
    if (!props.value) return '';
    const hour: number = props.value.getHours();
    const minutes: number = props.value.getMinutes();
    return `${hour}:${minutes}`;
  };
  return (
    <>
      <Title>
        { title }
      </Title>
      <InputDadosReserva>
        <InputDate {...props} />
        <Hora onChange={handleChangeHour} value={getHours()} />
      </InputDadosReserva>
    </>
  );
};

export default InputCalculoReserva;
