import React from "react";
import { CustomIcon } from "..";

const PDFIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Roboto",
}) => {
  return (
    <CustomIcon
      contentText="PDF"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      cornerColor="#B53629"
      backgroundColor="#E2574C"
      fontFamily={fontFamily}
    />
  );
};

export default PDFIcon;
