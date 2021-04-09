/**
 * title: 高精度小数
 * desc: 通过 `stringMode` 开启高精度小数支持，`onChange` 事件将返回 string 类型。对于旧版游览器，你需要 BigInt polyfill。
 */

import React from 'react';
import { FcInputNumber } from '@ngfed/fc-components';

function onChange(value) {
  console.log('changed', value);
}

export default () => {
  return (
    <>
      <FcInputNumber<string>
        style={{ width: 200 }}
        defaultValue="1"
        min="0"
        max="10"
        step="0.00000000000001"
        onChange={onChange}
        stringMode
      />
    </>
  );
};
