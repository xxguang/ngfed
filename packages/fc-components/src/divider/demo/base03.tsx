/**
 * title: 分割线标题
 * desc:  分割线可以设置一个标题，通过 `orientation` 可以控制标题的位置
 */

import React from 'react';
import { FcDivider } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <div style={{ margin: '50px' }}>
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider orientation="left">Left Text</FcDivider>
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider orientation="center">Center Text</FcDivider>
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider orientation="right">right Text</FcDivider>
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
      </div>
    </>
  );
};
