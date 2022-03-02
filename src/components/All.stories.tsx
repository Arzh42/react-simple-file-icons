import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  AppIcon,
  AudioIcon,
  VideoIcon,
  DefaultIcon,
  TextIcon,
  ImageIcon,
  WEBMIcon,
  PDFIcon,
  AACIcon,
  JPGIcon,
  TXTIcon,
  OTFIcon,
  FontIcon,
} from ".";

export default {
  title: "All",
  component: DefaultIcon,
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div>
      <AppIcon {...args} />
      <PDFIcon {...args} />
    </div>

    <div>
      <AudioIcon {...args} />
      <AACIcon {...args} />
    </div>

    <div>
      <TextIcon {...args} />
      <TXTIcon {...args} />
    </div>

    <div>
      <FontIcon {...args} />
      <OTFIcon {...args} />
    </div>

    <div>
      <ImageIcon {...args} />
      <JPGIcon {...args} />
    </div>

    <div>
      <VideoIcon {...args} />
      <WEBMIcon {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
