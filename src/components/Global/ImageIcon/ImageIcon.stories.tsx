import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageIcon from ".";

export default {
  title: "Global/ImageIcon",
  component: ImageIcon,
} as ComponentMeta<typeof ImageIcon>;

const Template: ComponentStory<typeof ImageIcon> = (args) => (
  <ImageIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
