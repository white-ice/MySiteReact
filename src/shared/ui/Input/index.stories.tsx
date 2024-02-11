import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
	title: 'shared/Input',
	component: Input,
	// parameters: {
	// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	// layout: 'centered',
	// },
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	// tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		placeholder: 'Type text',
		value: '123123',
	},
};


// export default {
// 	title: 'shared/Input',
// 	component: Input,
// 	argTypes: {
// 		backgroundColor: { control: 'color' },
// 	},
// } as ComponentMeta<typeof Input>;

// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
// 	placeholder: 'Type text',
// 	value: '123123',
// };
