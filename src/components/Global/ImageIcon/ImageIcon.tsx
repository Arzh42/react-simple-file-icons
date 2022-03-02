import React from "react";
import { CustomIcon } from "../..";

const ImageIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="IMAGE"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="5px"
      cornerColor="#363684"
      backgroundColor="#6161F2"
      fontFamily={fontFamily}
    />
  );
};

export default ImageIcon;
