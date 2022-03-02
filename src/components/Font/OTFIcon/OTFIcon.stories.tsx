import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OTFIcon from ".";

export default {
  title: "Font/OTFIcon",
  component: OTFIcon,
} as ComponentMeta<typeof OTFIcon>;

const Template: ComponentStory<typeof OTFIcon> = (args) => (
  <OTFIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
