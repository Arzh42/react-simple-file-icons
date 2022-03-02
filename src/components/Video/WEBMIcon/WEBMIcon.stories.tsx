import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WEBMIcon from ".";

export default {
  title: "Video/WEBMIcon",
  component: WEBMIcon,
} as ComponentMeta<typeof WEBMIcon>;

const Template: ComponentStory<typeof WEBMIcon> = (args) => (
  <WEBMIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
