import React from "react";
import CustomIcon from "../../CustomIcon";

const XLSXIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="XLSX"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      cornerColor="#185C37"
      fontSize="7px"
      backgroundColor="#21A366"
      fontFamily={fontFamily}
    />
  );
};

export default XLSXIcon;
