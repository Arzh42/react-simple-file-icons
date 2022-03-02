import React from "react";
import { CustomIcon } from "../..";

const AppIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="APP"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#866ea0"
      backgroundColor="#C6A1EC"
      fontFamily={fontFamily}
    />
  );
};

export default AppIcon;
