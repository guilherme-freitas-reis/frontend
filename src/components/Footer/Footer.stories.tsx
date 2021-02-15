import { Story, Meta } from '@storybook/react/types-6-0';
import Footer, { IFooter } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    color: { control: 'white' },
    backgroundColor: { control: '#023b2a' },
  },
} as Meta;

const Template: Story<IFooter> = (args) => <Footer {...args}>Footer</Footer>;

export const Padrao = Template.bind({});
Padrao.args = {
  color: 'white',
  backgroundColor: '#023b2a',
};
