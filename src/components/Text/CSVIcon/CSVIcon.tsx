import React from "react";
import CustomIcon from "../../CustomIcon";

const CSVIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="CSV"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#EEEEEE"
      backgroundColor="#21A366"
      fontFamily={fontFamily}
    />
  );
};

export default CSVIcon;
