import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextIcon from ".";

export default {
  title: "Global/TextIcon",
  component: TextIcon,
} as ComponentMeta<typeof TextIcon>;

const Template: ComponentStory<typeof TextIcon> = (args) => (
  <TextIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
