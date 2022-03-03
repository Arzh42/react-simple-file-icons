import React from "react";
import CustomIcon from "../../CustomIcon";

const MP4Icon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="MP4"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      cornerColor="#205093"
      backgroundColor="#317BE4"
      fontSize="8px"
      fontFamily={fontFamily}
    />
  );
};

export default MP4Icon;
