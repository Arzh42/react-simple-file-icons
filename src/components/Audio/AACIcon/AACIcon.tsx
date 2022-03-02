import React from "react";
import { CustomIcon } from "../..";

const AACIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="AAC"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#007daa"
      backgroundColor="#00ACEC"
      fontFamily={fontFamily}
    />
  );
};

export default AACIcon;
