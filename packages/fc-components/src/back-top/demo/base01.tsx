/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcBackTop } from '@ngfed/fc-components';
import { BackTop } from 'antd';

export default () => {
  return (
    <>
      <BackTop />
      Scroll down to see the bottom-right
      <strong> gray </strong>
      button.
    </>
  );
};
