import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VideoIcon from ".";

export default {
  title: "Global/VideoIcon",
  component: VideoIcon,
} as ComponentMeta<typeof VideoIcon>;

const Template: ComponentStory<typeof VideoIcon> = (args) => (
  <VideoIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
