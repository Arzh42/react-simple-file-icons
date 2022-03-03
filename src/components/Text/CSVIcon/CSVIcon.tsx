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
      cornerColor="#21A366"
      backgroundColor="#185C37"
      fontFamily={fontFamily}
    />
  );
};

export default CSVIcon;
