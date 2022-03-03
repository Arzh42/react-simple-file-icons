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
  CSVIcon,
  OTFIcon,
  XLSXIcon,
  XLSIcon,
  FontIcon,
  MP4Icon,
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
      <XLSIcon {...args} />
      <XLSXIcon {...args} />
    </div>

    <div>
      <AudioIcon {...args} />
      <AACIcon {...args} />
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
      <TextIcon {...args} />
      <TXTIcon {...args} />
      <CSVIcon {...args} />
    </div>

    <div>
      <VideoIcon {...args} />
      <WEBMIcon {...args} />
      <MP4Icon {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 100,
};
