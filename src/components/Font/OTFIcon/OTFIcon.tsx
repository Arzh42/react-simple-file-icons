import React from "react";
import { CustomIcon } from "../..";

const OTFIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="OTF"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#528C88"
      backgroundColor="#62BCB6"
      fontFamily={fontFamily}
    />
  );
};

export default OTFIcon;
