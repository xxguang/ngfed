/**
 * title: 位置
 * desc: 位置有12个方向
 */

import React from 'react';
import { FcTooltip, FcButton } from '@ngfed/fc-components';
const text = <span>prompt text</span>;
const buttonWidth = 70;

export default () => {
  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <FcTooltip placement="topLeft" title={text}>
          <FcButton>TL</FcButton>
        </FcTooltip>
        <FcTooltip placement="top" title={text}>
          <FcButton>Top</FcButton>
        </FcTooltip>
        <FcTooltip placement="topRight" title={text}>
          <FcButton>TR</FcButton>
        </FcTooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <FcTooltip placement="leftTop" title={text}>
          <FcButton>LT</FcButton>
        </FcTooltip>
        <FcTooltip placement="left" title={text}>
          <FcButton>Left</FcButton>
        </FcTooltip>
        <FcTooltip placement="leftBottom" title={text}>
          <FcButton>LB</FcButton>
        </FcTooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <FcTooltip placement="rightTop" title={text}>
          <FcButton>RT</FcButton>
        </FcTooltip>
        <FcTooltip placement="right" title={text}>
          <FcButton>Right</FcButton>
        </FcTooltip>
        <FcTooltip placement="rightBottom" title={text}>
          <FcButton>RB</FcButton>
        </FcTooltip>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <FcTooltip placement="bottomLeft" title={text}>
          <FcButton>BL</FcButton>
        </FcTooltip>
        <FcTooltip placement="bottom" title={text}>
          <FcButton>Bottom</FcButton>
        </FcTooltip>
        <FcTooltip placement="bottomRight" title={text}>
          <FcButton>BR</FcButton>
        </FcTooltip>
      </div>
    </div>
  );
};
