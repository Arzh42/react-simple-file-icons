import React from "react";
import CustomIcon from "../../CustomIcon";

const XLSIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="XLS"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#185C37"
      backgroundColor="#21A366"
      fontFamily={fontFamily}
    />
  );
};

export default XLSIcon;
