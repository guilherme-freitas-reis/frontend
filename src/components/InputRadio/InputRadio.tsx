import { FC } from 'react';

export interface IInputRadio {
  color?: string,
  text?: string
}

const InputRadio: FC<IInputRadio> = ({ color, text }) => (
  <>
    { text && <p>{text}</p> }
    <input type="radio" color={color} />
  </>
);

export default InputRadio;
