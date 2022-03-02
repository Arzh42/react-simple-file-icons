import React from "react";
import { CustomIcon } from "../..";

const AudioIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="AUDIO"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="5px"
      cornerColor="#007daa"
      backgroundColor="#00ACEC"
      fontFamily={fontFamily}
    />
  );
};

export default AudioIcon;
