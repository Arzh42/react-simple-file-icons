import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CSVIcon from ".";

export default {
  title: "Image/CSVIcon",
  component: CSVIcon,
} as ComponentMeta<typeof CSVIcon>;

const Template: ComponentStory<typeof CSVIcon> = (args) => (
  <CSVIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
