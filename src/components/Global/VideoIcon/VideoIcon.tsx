import React from "react";
import { CustomIcon } from "../..";

const VideoIcon: React.FC<BaseIconProps> = ({
  width,
  height,
  fontFamily = "Andale mono, AndaleMono, monospace",
}) => {
  return (
    <CustomIcon
      contentText="VIDEO"
      globalStyle={{ width, height }}
      textColor="#FFFFFF"
      fontSize="5px"
      cornerColor="#B53629"
      backgroundColor="#E2574C"
      fontFamily={fontFamily}
    />
  );
};

export default VideoIcon;
