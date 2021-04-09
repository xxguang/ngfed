/**
 * title: 无边框
 * desc: 没有边框。
 */

import React from 'react';
import { FcInputNumber } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcInputNumber min={1} max={10} defaultValue={3} bordered={false} />
    </>
  );
};
