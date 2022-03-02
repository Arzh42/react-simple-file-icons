import React from "react";
import {
  AudioIcon,
  VideoIcon,
  DefaultIcon,
  PDFIcon,
  WEBMIcon,
  TextIcon,
  AppIcon,
  FontIcon,
  ImageIcon,
  AACIcon,
  JPGIcon,
} from "..";
import OTFIcon from "../Font/OTFIcon";

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
    case "audio/aac":
      return <AACIcon width={width} height={height} fontFamily={fontFamily} />;
    case "audio/webm":
      return <WEBMIcon width={width} height={height} fontFamily={fontFamily} />;
    case "font/otf":
      return <OTFIcon width={width} height={height} fontFamily={fontFamily} />;
    case "image/jpg":
      return <JPGIcon width={width} height={height} fontFamily={fontFamily} />;
    case "video/webm":
      return <WEBMIcon width={width} height={height} fontFamily={fontFamily} />;
    default:
      switch (mimeType.split("/")[0]) {
        case "application":
          return (
            <AppIcon width={width} height={height} fontFamily={fontFamily} />
          );
        case "audio":
          return (
            <AudioIcon width={width} height={height} fontFamily={fontFamily} />
          );
        case "font":
          return (
            <FontIcon width={width} height={height} fontFamily={fontFamily} />
          );
        case "image":
          return (
            <ImageIcon width={width} height={height} fontFamily={fontFamily} />
          );
        case "text":
          return (
            <TextIcon width={width} height={height} fontFamily={fontFamily} />
          );
        case "video":
          return (
            <VideoIcon width={width} height={height} fontFamily={fontFamily} />
          );

        default:
          return (
            <DefaultIcon
              width={width}
              height={height}
              fontFamily={fontFamily}
            />
          );
      }
  }
};

export default MimeTypeIcon;
