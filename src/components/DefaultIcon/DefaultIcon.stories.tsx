import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DefaultIcon from ".";

export default {
  title: "Common/DefaultIcon",
  component: DefaultIcon,
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <DefaultIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
