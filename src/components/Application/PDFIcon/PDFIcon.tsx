import React from "react";
import CustomIcon from "../../CustomIcon";

const PDFIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
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
