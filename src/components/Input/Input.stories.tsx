import { Story, Meta } from '@storybook/react/types-6-0';
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import Input, { IInput } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: { control: 'text' },
  },
} as Meta;

const Template: Story<IInput> = (args) => <Input {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {
  color: 'black',
  placeholder: 'Digite alguma coisa...',
};

export const Senha = Template.bind({});
Senha.args = {
  type: 'password',
  color: 'black',
  placeholder: 'Digite sua senha...',
  backgroundColor: 'white',
  iconBefore: <IoKeyOutline size={17} />,
};

export const IconeEsquerda = Template.bind({});
IconeEsquerda.args = {
  placeholder: 'Ícone à esquerda...',
  iconBefore: <IoMailOutline size={17} />,
};

export const IconeDireita = Template.bind({});
IconeDireita.args = {
  placeholder: 'Ícone à direita...',
  iconAfter: <IoMailOutline size={17} />,
};

export const IconeDoisLados = Template.bind({});
IconeDoisLados.args = {
  color: 'white',
  backgroundColor: '#fff',
  onFocusBackgroundColor: 'whitesmoke',
  placeholder: 'Ícones na direita e esquerda...',
  iconBefore: <IoMailOutline size={17} />,
  iconAfter: <IoKeyOutline size={17} />,
};

export const MudancaDeCor = Template.bind({});
MudancaDeCor.args = {
  color: 'red',
  backgroundColor: 'pink',
  onFocusBackgroundColor: 'aquamarine',
  placeholder: 'Clique e muda de cor...',
  placeholderColor: '#565',
};
