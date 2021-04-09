/**
 * title: 位置
 * desc: 位置有十二个方向。
 */
import React from 'react';
import { FcButton, FcPopover } from '@ngfed/fc-components';

export default () => {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const buttonWidth = 70;

  return (
    <>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <FcPopover placement="topLeft" title={text} content={content} trigger="click">
          <FcButton>TL</FcButton>
        </FcPopover>
        <FcPopover placement="top" title={text} content={content} trigger="click">
          <FcButton>Top</FcButton>
        </FcPopover>
        <FcPopover placement="topRight" title={text} content={content} trigger="click">
          <FcButton>TR</FcButton>
        </FcPopover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <FcPopover placement="leftTop" title={text} content={content} trigger="click">
          <FcButton>LT</FcButton>
        </FcPopover>
        <FcPopover placement="left" title={text} content={content} trigger="click">
          <FcButton>Left</FcButton>
        </FcPopover>
        <FcPopover placement="leftBottom" title={text} content={content} trigger="click">
          <FcButton>LB</FcButton>
        </FcPopover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <FcPopover placement="rightTop" title={text} content={content} trigger="click">
          <FcButton>RT</FcButton>
        </FcPopover>
        <FcPopover placement="right" title={text} content={content} trigger="click">
          <FcButton>Right</FcButton>
        </FcPopover>
        <FcPopover placement="rightBottom" title={text} content={content} trigger="click">
          <FcButton>RB</FcButton>
        </FcPopover>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <FcPopover placement="bottomLeft" title={text} content={content} trigger="click">
          <FcButton>BL</FcButton>
        </FcPopover>
        <FcPopover placement="bottom" title={text} content={content} trigger="click">
          <FcButton>Bottom</FcButton>
        </FcPopover>
        <FcPopover placement="bottomRight" title={text} content={content} trigger="click">
          <FcButton>BR</FcButton>
        </FcPopover>
      </div>
    </>
  );
};
