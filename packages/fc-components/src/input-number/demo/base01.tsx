/**
 * title: 基本
 * desc: 数字输入框。
 */

import React from 'react';
import { FcInputNumber } from '@ngfed/fc-components';

function onChange(value) {
  console.log('changed', value);
}

export default () => {
  return (
    <>
      <FcInputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </>
  );
};
