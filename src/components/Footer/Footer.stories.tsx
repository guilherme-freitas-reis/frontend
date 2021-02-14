import { Story, Meta } from '@storybook/react/types-6-0';
import Footer, { IFooter } from './Footer';

export default {
  title: 'Rodapé',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'lightgreen' },
  },
} as Meta;

const Template: Story<IFooter> = (args) => <Footer {...args}>Rodapé</Footer>;

export const Padrao = Template.bind({});
Padrao.args = {
  color: 'white',
};
