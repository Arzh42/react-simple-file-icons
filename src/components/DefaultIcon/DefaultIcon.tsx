import React from "react";
import CustomIcon from "../CustomIcon";

const DefaultIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="FILE"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      cornerColor="#376CFB"
      backgroundColor="#4294FF"
      fontFamily={fontFamily}
      fontWeight="bold"
    />
  );
};

export default DefaultIcon;
