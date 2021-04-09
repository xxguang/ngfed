/**
 * title: 基本
 * desc: 最简单的用法，浮层的大小由内容区域决定。
 */
import React from 'react';
import { FcButton, FcPopover } from '@ngfed/fc-components';

export default () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <>
      <FcPopover content={content} title="Title">
        <FcButton type="primary">Hover me</FcButton>
      </FcPopover>
    </>
  );
};
