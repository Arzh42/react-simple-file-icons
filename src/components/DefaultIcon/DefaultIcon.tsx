import React from "react";
import { CustomIcon } from "..";

const DefaultIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Roboto",
}) => {
  return (
    <CustomIcon
      contentText="FILE"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      cornerColor="#376CFB"
      backgroundColor="#4294FF"
      fontFamily={fontFamily}
    />
  );
};

export default DefaultIcon;
