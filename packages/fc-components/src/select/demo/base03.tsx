/**
 * title: 多选
 * desc: 多选，从已有条目中选择。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option } = FcSelect;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <>
      <FcSpace direction="vertical">
        <FcSelect
          mode="multiple"
          allowClear
          style={{ width: 300 }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </FcSelect>
        <FcSelect
          mode="multiple"
          disabled
          style={{ width: 300 }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </FcSelect>
      </FcSpace>
    </>
  );
};
