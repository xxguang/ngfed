/**
 * title: 链接型按钮
 * desc: 设置`FcButton`的`href`属性可指定按钮点击时候所跳转的页面，同时使用`target`控制页面打开的方式
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton target="_blank" type="primary" href="https://www.baidu.com">
          click jump to baidu.com
        </FcButton>
      </FcSpace>
    </>
  );
};
