import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import XLSXIcon from ".";

export default {
  title: "Application/XLSXIcon",
  component: XLSXIcon,
} as ComponentMeta<typeof XLSXIcon>;

const Template: ComponentStory<typeof XLSXIcon> = (args) => (
  <XLSXIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
