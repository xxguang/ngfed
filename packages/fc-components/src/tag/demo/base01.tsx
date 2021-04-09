/**
 * title: 基本
 * desc: 基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件。
 */
import React from 'react';
import { FcTag } from '@ngfed/fc-components';

function log(e) {
  console.log(e);
}
function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}
export default () => {
  return (
    <>
      <FcTag>Tag 1</FcTag>
      <FcTag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </FcTag>
      <FcTag closable onClose={log}>
        FcTag 2
      </FcTag>
      <FcTag closable onClose={preventDefault}>
        Prevent Default
      </FcTag>
    </>
  );
};
