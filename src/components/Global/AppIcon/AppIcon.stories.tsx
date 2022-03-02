import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppIcon from ".";

export default {
  title: "Global/AppIcon",
  component: AppIcon,
} as ComponentMeta<typeof AppIcon>;

const Template: ComponentStory<typeof AppIcon> = (args) => (
  <AppIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
