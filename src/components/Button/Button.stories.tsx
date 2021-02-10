import { Story, Meta } from '@storybook/react/types-6-0';
import { FiUser } from 'react-icons/fi';
import Button, { IProps } from './Button';

export default {
  title: 'Botão',
  component: Button,
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args}>Botão</Button>;

export const Padrao = Template.bind({});
Padrao.args = {
  color: 'white',
  background: '#00984a',
};

export const Block = Template.bind({});
Block.args = {
  color: 'white',
  background: '#00984a',
  block: true,
};

export const Carregando = Template.bind({});
Carregando.args = {
  color: 'white',
  background: '#00984a',
  loading: true,
};

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  color: 'white',
  background: '#00984a',
  disabled: true,
};

export const IconeInicio = Template.bind({});
IconeInicio.args = {
  color: 'white',
  background: '#00984a',
  iconStart: <FiUser />,
};

export const IconeFim = Template.bind({});
IconeFim.args = {
  color: 'white',
  background: '#00984a',
  iconEnd: <FiUser />,
};

export const IconesInicioFim = Template.bind({});
IconesInicioFim.args = {
  color: 'white',
  background: '#00984a',
  iconStart: <FiUser />,
  iconEnd: <FiUser />,
};
