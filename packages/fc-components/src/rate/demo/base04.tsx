/**
 * title: 清除
 * desc: 支持允许或者禁用清除。
 */

import React from 'react';
import { FcRate } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcRate defaultValue={3} />
      <span className="ant-rate-text">allowClear: true</span>
      <br />
      <FcRate allowClear={false} defaultValue={3} />
      <span className="ant-rate-text">allowClear: false</span>
    </>
  );
};
