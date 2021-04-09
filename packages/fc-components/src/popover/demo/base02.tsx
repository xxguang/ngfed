/**
 * title: 三种触发方式
 * desc: 最鼠标移入、聚集、点击。
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
      <FcPopover content={content} title="Title" trigger="hover">
        <FcButton>Hover me</FcButton>
      </FcPopover>
      <FcPopover content={content} title="Title" trigger="focus">
        <FcButton>Focus me</FcButton>
      </FcPopover>
      <FcPopover content={content} title="Title" trigger="click">
        <FcButton>Click me</FcButton>
      </FcPopover>
    </>
  );
};
