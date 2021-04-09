/**
 * title: 各种大小
 * desc: 小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。
 */

import React from 'react';
import { FcSpin, FcSpace } from '@ngfed/fc-components';

export default () => {
  return (
    <FcSpace size="middle">
      <FcSpin size="small" />
      <FcSpin />
      <FcSpin size="large" />
    </FcSpace>
  );
};
