import { Story, Meta } from '@storybook/react/types-6-0';
import { Children } from 'react';
import SignInPage, { ISignInPage } from '.';

export default {
  title: 'SignInPage',
  component: SignInPage,
  argTypes: {
    type: { control: 'text' },
  },
} as Meta;

const Template: Story<ISignInPage> = (args) => <SignInPage {...args}>{Children}</SignInPage>;

export const Padrao = Template.bind({});
Padrao.args = {
  color: 'white',
};
