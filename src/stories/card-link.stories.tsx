import type { Meta, StoryObj } from '@storybook/react';
import CardLink from '../components/CardLink';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Concrete Handbook/Card Link',
  component: CardLink,
  parameters: {
    layout: 'centered'
  },
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Название ссылки' },
    link: {
      control: 'text',
      description: 'Ссылка на которую производится переход по клику на карточку'
    }
  }
} satisfies Meta<typeof CardLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: 'Навигационная Карточка',
    link: '/link-to-page'
  }
};
