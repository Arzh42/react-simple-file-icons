import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MP4Icon from ".";

export default {
  title: "Video/MP4Icon",
  component: MP4Icon,
} as ComponentMeta<typeof MP4Icon>;

const Template: ComponentStory<typeof MP4Icon> = (args) => (
  <MP4Icon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
