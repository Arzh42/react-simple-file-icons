import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PDFIcon from ".";

export default {
  title: "Application/PDFIcon",
  component: PDFIcon,
} as ComponentMeta<typeof PDFIcon>;

const Template: ComponentStory<typeof PDFIcon> = (args) => (
  <PDFIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
