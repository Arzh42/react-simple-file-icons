import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AudioIcon from ".";

export default {
  title: "Global/AudioIcon",
  component: AudioIcon,
} as ComponentMeta<typeof AudioIcon>;

const Template: ComponentStory<typeof AudioIcon> = (args) => (
  <AudioIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
