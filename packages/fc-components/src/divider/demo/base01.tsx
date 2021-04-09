/**
 * title: 虚线分割线
 * desc: 设置`dashed=true`可将分割线设为虚线展示
 */

import React from 'react';
import { FcDivider } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <div>
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider />
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider dashed />
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
      </div>
    </>
  );
};
