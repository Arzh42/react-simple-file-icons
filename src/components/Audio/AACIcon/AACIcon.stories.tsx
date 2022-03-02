import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AACIcon from ".";

export default {
  title: "Audio/AACIcon",
  component: AACIcon,
} as ComponentMeta<typeof AACIcon>;

const Template: ComponentStory<typeof AACIcon> = (args) => (
  <AACIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
