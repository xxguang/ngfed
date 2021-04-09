/**
 * title: 基本使用
 * desc: 基本使用。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';

const { Option } = FcSelect;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <>
      <FcSpace>
        <FcSelect defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </FcSelect>
        <FcSelect defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </FcSelect>
        <FcSelect defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </FcSelect>
        <FcSelect defaultValue="lucy" style={{ width: 120 }} allowClear>
          <Option value="lucy">Lucy</Option>
        </FcSelect>
      </FcSpace>
    </>
  );
};
