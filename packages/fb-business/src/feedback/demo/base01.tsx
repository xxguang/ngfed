/**
 * title: 基本用法
 * desc: 最简单的用法，设置 color 点击有不同的颜色反馈提示
 */

import React from 'react';
import { FbFeedback } from '@ngfed/fb-business';

export default () => {
  return (
    <>
      <FbFeedback color="red">
        <span>feedback red </span>
      </FbFeedback>

      <FbFeedback color="green">
        <span>feedback green </span>
      </FbFeedback>

      <FbFeedback color="blue">
        <span>feedback blue </span>
      </FbFeedback>

      <FbFeedback color="black">
        <span>feedback black </span>
      </FbFeedback>
    </>
  );
};
