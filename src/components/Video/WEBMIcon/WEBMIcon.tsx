import React from "react";
import CustomIcon from "../../CustomIcon";

const WEBMIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="WEBM"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      cornerColor="#82D82E"
      backgroundColor="#529E09"
      fontSize="6px"
      fontFamily={fontFamily}
    />
  );
};

export default WEBMIcon;
