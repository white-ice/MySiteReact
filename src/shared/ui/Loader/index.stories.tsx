import type { Meta, StoryObj } from '@storybook/react';
import Loader from './index';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Loader',
	component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
	decorators: [(Story) => (
		<StyleDecorator theme={Theme.LIGHT}>
			<Story />
		</StyleDecorator>

	)]
};

export const Dark: Story = {
	args: {},
	decorators: [(Story) => (
		<StyleDecorator theme={Theme.DARK}>
			<Story />
		</StyleDecorator>

	)]
};
