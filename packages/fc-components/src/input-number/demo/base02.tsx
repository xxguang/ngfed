/**
 * title: 三种大小
 * desc: 三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。
 */

import React from 'react';
import { FcSpace, FcInputNumber } from '@ngfed/fc-components';

function onChange(value) {
  console.log('changed', value);
}

export default () => {
  return (
    <FcSpace>
      <FcInputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
      <FcInputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
      <FcInputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
    </FcSpace>
  );
};
