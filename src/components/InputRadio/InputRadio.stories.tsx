import { Story, Meta } from '@storybook/react/types-6-0';
import InputRadio, { IInputRadio } from './InputRadio';

export default {
  title: 'InputRadio',
  component: InputRadio,
  argTypes: {
    type: { control: 'text' },
  },
} as Meta;

const Template: Story<IInputRadio> = (args) => <InputRadio {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {
  text: 'texto',
};
