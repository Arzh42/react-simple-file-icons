import React from "react";
import { CustomIcon } from "../..";

const TXTIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="TXT"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="8px"
      cornerColor="#B4574A"
      backgroundColor="#F47765"
      fontFamily={fontFamily}
    />
  );
};

export default TXTIcon;
