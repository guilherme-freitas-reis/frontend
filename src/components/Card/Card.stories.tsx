import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { IProps } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<IProps> = (args) => (
  <Card
    {...args}
  />
);

export const Padrao = Template.bind({});
Padrao.args = {
  title: 'Econômico',
  image: 'https://www.localiza.com/brasil-site/geral/Frota/NUNS.png',
  description: 'Veículo similar a: Fiat Uno 1.0, dentre outros.',
  comment: 'Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência.',
  buttonTitle: 'Reserve Agora',
  buttonLink: '/reservar',
};

export const SemTitulo = Template.bind({});
SemTitulo.args = {
  image: 'https://www.localiza.com/brasil-site/geral/Frota/NUNS.png',
  description: 'Veículo similar a: Fiat Uno 1.0, dentre outros.',
  comment: 'Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência.',
  buttonTitle: 'Reserve Agora',
  buttonLink: '/reservar',
};

export const SemImagem = Template.bind({});
SemImagem.args = {
  title: 'Econômico',
  description: 'Veículo similar a: Fiat Uno 1.0, dentre outros.',
  comment: 'Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência.',
  buttonTitle: 'Reserve Agora',
  buttonLink: '/reservar',
};

export const SemComentario = Template.bind({});
SemComentario.args = {
  title: 'Econômico',
  image: 'https://www.localiza.com/brasil-site/geral/Frota/NUNS.png',
  description: 'Veículo similar a: Fiat Uno 1.0, dentre outros.',
  buttonTitle: 'Reserve Agora',
  buttonLink: '/reservar',
};

export const SemBotao = Template.bind({});
SemBotao.args = {
  title: 'Econômico',
  image: 'https://www.localiza.com/brasil-site/geral/Frota/NUNS.png',
  description: 'Veículo similar a: Fiat Uno 1.0, dentre outros.',
  comment: 'Sua reserva garante um dos carros desse grupo. Modelo sujeito à disponibilidade da agência.',
};
