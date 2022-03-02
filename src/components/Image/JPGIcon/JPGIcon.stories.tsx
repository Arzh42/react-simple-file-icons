import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import JPGIcon from ".";

export default {
  title: "Image/JPGIcon",
  component: JPGIcon,
} as ComponentMeta<typeof JPGIcon>;

const Template: ComponentStory<typeof JPGIcon> = (args) => (
  <JPGIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
