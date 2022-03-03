import React from "react";
import CustomIcon from "../../CustomIcon";

const TextIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="TEXT"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="6px"
      cornerColor="#f7e2bb"
      backgroundColor="#F9C04F"
      fontFamily={fontFamily}
    />
  );
};

export default TextIcon;
