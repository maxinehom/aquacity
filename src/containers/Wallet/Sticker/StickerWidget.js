import React from 'react';
import { StickerWidgetWrapper } from './StickerWidget.styles';

export default function({ fontColor, bgColor, bgImage, bgSize, width, height, number, text, bgRepeat, textAlign, bdColor, bgPosition }) {
  const textColor = {
    color: fontColor,
    marginLeft: textAlign,
  };
  const widgetStyle = {
    backgroundImage: bgImage,
    backgroundColor: bgColor,
    width: width,
    height: height,
    backgroundSize: bgSize,
    backgroundRepeat: bgRepeat,
    borderColor: bdColor,
    backgroundPosition: bgPosition,
  };


  return (
    <StickerWidgetWrapper className="isoStickerWidget" style={widgetStyle}>
      {/* <div className="isoIconWrapper">
        <i className={icon} style={iconStyle} />
      </div> */}

      <div className="isoContentWrapper">
        <span className="isoLabel" style={textColor}>
          {text}
        </span>
        <h3 className="isoStatNumber" style={textColor}>
          {number}
        </h3>
      </div>
    </StickerWidgetWrapper>
  );
}
