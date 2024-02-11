// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Modal } from 'shared/ui/Modal/';

// export default {
// 	title: 'shared/Modal',
// 	component: Modal,
// 	argTypes: {
// 		backgroundColor: { control: 'color' },
// 	},
// } as ComponentMeta<typeof Modal>;

// const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
// 	isOpen: true,
// 	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
// };

// export const Dark = Template.bind({});
// Dark.args = {
// 	isOpen: true,
// 	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
// };

import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './index';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'shared/Modal',
	component: Modal,
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// },
	// parameters: {
	// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	// layout: 'centered',
	// },
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	// tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
	},
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
	},
	decorators: [(Story) => (
		<StyleDecorator theme={Theme.DARK}>
			<Story />
		</StyleDecorator>

	)]
};