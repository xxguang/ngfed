/**
 * title: 箭头指向
 * desc: 设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。
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
  return (
    <>
      <FcPopover placement="topLeft" title={text} content={content}>
        <FcButton>Align edge / 边缘对齐</FcButton>
      </FcPopover>
      <FcPopover placement="topLeft" title={text} content={content} arrowPointAtCenter>
        <FcButton>Arrow points to center / 箭头指向中心</FcButton>
      </FcPopover>
    </>
  );
};
