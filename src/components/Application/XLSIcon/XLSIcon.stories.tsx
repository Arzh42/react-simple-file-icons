import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import XLSIcon from ".";

export default {
  title: "Application/XLSIcon",
  component: XLSIcon,
} as ComponentMeta<typeof XLSIcon>;

const Template: ComponentStory<typeof XLSIcon> = (args) => (
  <XLSIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
