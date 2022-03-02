import React from "react";

export interface CustomIconProps {
  globalStyle?: React.CSSProperties;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontWeight?: string;
  contentText?: string;
  cornerColor?: string;
  fontSize?: string;
}

const CustomIcon = ({
  globalStyle = {
    width: 50,
    height: 50,
  },
  backgroundColor = "black",
  textColor = "white",
  fontFamily = "Andale mono, AndaleMono, monospace",
  fontSize = "8px",
  fontWeight = "bold",
  contentText = "FILE",
  cornerColor = "blue",
}: CustomIconProps) => {
  return (
    <svg style={globalStyle} viewBox="0 0 32 32">
      <path
        d="m8.4824 3c-0.92573 0-1.6719 0.74614-1.6719 1.6719v22.656c0 0.92573 0.74614 1.6719 1.6719 1.6719h15.035c0.92573 0 1.6719-0.74614 1.6719-1.6719v-15.818l-8.5234-8.5098h-8.1836z"
        fill={backgroundColor}
        strokeWidth="1.1139"
      />
      <text
        fill={textColor}
        fontFamily={fontFamily}
        fontSize={fontSize}
        letterSpacing="0px"
        style={{
          fontFeatureSettings: "normal",
          fontVariantCaps: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          lineHeight: "1.25",
          fontWeight: fontWeight,
        }}
        text-align="center"
        textAnchor="middle"
        wordSpacing="0px"
        x="15.990591"
        xmlSpace="preserve"
        y="22.62653"
      >
        <tspan x="15.990591" y="22.62653">
          {contentText}
        </tspan>
      </text>
      <path
        d="m25.189 11.51h-7.271c-0.69692 0-1.258-0.56025-1.258-1.2561v-7.2603z"
        fill={cornerColor}
        strokeWidth=".81499"
      />
    </svg>
  );
};

export default CustomIcon;
