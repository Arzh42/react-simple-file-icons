import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FontIcon from ".";

export default {
  title: "Global/FontIcon",
  component: FontIcon,
} as ComponentMeta<typeof FontIcon>;

const Template: ComponentStory<typeof FontIcon> = (args) => (
  <FontIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
