import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TXTIcon from ".";

export default {
  title: "Image/TXTIcon",
  component: TXTIcon,
} as ComponentMeta<typeof TXTIcon>;

const Template: ComponentStory<typeof TXTIcon> = (args) => (
  <TXTIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
