import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'widgets/Sidebar',
	component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [(Story) => (
		<StyleDecorator theme={Theme.DARK}>
			<Story />
		</StyleDecorator>
	)]
};
