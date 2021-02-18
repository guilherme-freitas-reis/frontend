import { Story, Meta } from '@storybook/react/types-6-0';
import InputDate from './InputDate';

export default {
  title: 'InputDate',
  component: InputDate,
} as Meta;

const Template: Story = () => <InputDate placeholder="📅 Data de Retirada" />;

export const Padrao = Template.bind({});
