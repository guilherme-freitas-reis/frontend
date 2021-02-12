import { Story, Meta } from '@storybook/react/types-6-0';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta;

const Template: Story = () => <Navbar />;

export const Padrao = Template.bind({});
