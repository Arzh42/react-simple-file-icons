import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomIcon from ".";

export default {
  title: "Common/CustomIcon",
  component: CustomIcon,
} as ComponentMeta<typeof CustomIcon>;

const Template: ComponentStory<typeof CustomIcon> = (args) => (
  <CustomIcon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  globalStyle: {
    width: 100,
    height: 100,
  },
  backgroundColor: "black",
  textColor: "white",
  fontFamily: "Andale mono, AndaleMono, monospace",
  fontWeight: "bold",
  contentText: "FILE",
  cornerColor: "blue",
};
