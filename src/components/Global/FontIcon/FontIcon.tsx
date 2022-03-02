import React from "react";
import { CustomIcon } from "../..";

const FontIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="FONT"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="6px"
      cornerColor="#528C88"
      backgroundColor="#62BCB6"
      fontFamily={fontFamily}
    />
  );
};

export default FontIcon;
