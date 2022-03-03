import React from "react";
import CustomIcon from "../../CustomIcon";

const JPGIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="JPG"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#136B75"
      backgroundColor="#208895"
      fontFamily={fontFamily}
    />
  );
};

export default JPGIcon;
