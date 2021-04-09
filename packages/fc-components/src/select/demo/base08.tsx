/**
 * title: 分组
 * desc: 用 `OptGroup` 进行选项分组。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option, OptGroup } = FcSelect;
function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <>
      <FcSelect defaultValue="lucy" style={{ width: 300 }} onChange={handleChange}>
        <OptGroup label="Manager">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
          <Option value="Yiminghe">yiminghe</Option>
        </OptGroup>
      </FcSelect>
    </>
  );
};
