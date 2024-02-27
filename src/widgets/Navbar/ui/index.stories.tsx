import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./index";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <RouterDecorator>
        <StyleDecorator theme={Theme.LIGHT}>
          <Story />
        </StyleDecorator>
      </RouterDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <RouterDecorator>
        <StyleDecorator theme={Theme.DARK}>
          <Story />
        </StyleDecorator>
      </RouterDecorator>
    ),
  ],
};
