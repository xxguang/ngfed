/**
 * title: tipFormatter 格式化
 * desc: 使用 tipFormatter 可以格式化 Tooltip 的内容，设置 tipFormatter={null}，则隐藏 Tooltip
 */

import React from 'react';
import { FcSlider } from '@ngfed/fc-components';

function formatter(value) {
  return `${value}%`;
}

export default () => {
  return (
    <>
      <FcSlider tipFormatter={formatter} />
      <FcSlider tipFormatter={null} />
    </>
  );
};
