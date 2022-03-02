import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MimeTypeIcon from ".";

export default {
  title: "Common/MimeTypeIcon",
  component: MimeTypeIcon,
} as ComponentMeta<typeof MimeTypeIcon>;

const Template: ComponentStory<typeof MimeTypeIcon> = (args) => (
  <MimeTypeIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  mimeType: "application/pdf",
  width: 100,
  height: 100,
};
