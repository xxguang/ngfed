/**
 * title: 分割线方向演示
 * desc: 纵向分割线 `type ='vertical'`， 横向分割线 `type ='horizontal'`
 */

import React from 'react';
import { FcDivider } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <h3>取值纵向分割线 type ='vertical' </h3>
      <div style={{ margin: '50px' }}>
        Text
        <FcDivider type="vertical" />
        <a href="#">Link</a>
        <FcDivider type="vertical" />
        <a href="#">Link</a>
      </div>

      <h3>取值横向分割线 type ='horizontal' </h3>
      <div style={{ margin: '50px' }}>
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider type="horizontal" />
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
        <FcDivider type="horizontal" />
        <p>
          这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字，这是一段演示文字
        </p>
      </div>
    </>
  );
};
