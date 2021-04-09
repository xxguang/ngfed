/**
 * title: 无边框
 * desc: 无边框样式。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option } = FcSelect;

export default () => {
  return (
    <>
      <FcSelect defaultValue="lucy" style={{ width: 120 }} bordered={false}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </FcSelect>
      <FcSelect defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
        <Option value="lucy">Lucy</Option>
      </FcSelect>
    </>
  );
};
