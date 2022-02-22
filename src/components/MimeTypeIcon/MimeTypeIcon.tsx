import React from "react";
import DefaultIcon from "../DefaultIcon/DefaultIcon";
import PDFIcon from "../PDFIcon/PDFIcon";

type MimeTypeIconProps = BaseIconProps & {
  mimeType: string;
};

const MimeTypeIcon: React.FC<MimeTypeIconProps> = ({
  mimeType,
  width,
  height,
  fontFamily,
}) => {
  switch (mimeType) {
    case "application/pdf":
      return <PDFIcon width={width} height={height} fontFamily={fontFamily} />;
    default:
      return (
        <DefaultIcon width={width} height={height} fontFamily={fontFamily} />
      );
  }
};

export default MimeTypeIcon;
