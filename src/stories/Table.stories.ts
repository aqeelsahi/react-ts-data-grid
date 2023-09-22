import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../index';

const meta: Meta<typeof Table> = {
  title: 'DESI8N UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const data: string[][] = [
  ['Name', 'Email', 'Number'],
  ['Alice', 'alice@example.com', '123'],
  ['Bob', 'bob@example.com', '456'],
  ['Charlie', 'charlie@example.com', '789'],
  ['David', 'david@example.com', '101'],
  ['Eva', 'eva@example.com', '202'],
  ['Frank', 'frank@example.com', '303'],
  ['Grace', 'grace@example.com', '404'],
  ['Hank', 'hank@example.com', '505'],
  ['Ivy', 'ivy@example.com', '606'],
  ['Jack', 'jack@example.com', '707'],
];

export const Primary: Story = {
  args: {
    data: data,
    exportCSV: true,
    headerStyle: { backgroundColor: '#e5e6e4' },
    bodyStyle: { backgroundColor: 'white' },
  },
  argTypes: {
    data: {
      control: { type: null },
    },
    headerStyle: {
      control: { type: null },
    },
    bodyStyle: {
      control: { type: null },
    },
  },
};
// save without formatting ctrl + shift + p
