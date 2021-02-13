import { themes } from '@storybook/theming';
import '../public/styles/reset.css';
import '../public/styles/global.css';


export const decorators = [
  Story => (
    <div style={{ margin: '1.5rem' }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.light,
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#333',
      },
    ],
  },
}
