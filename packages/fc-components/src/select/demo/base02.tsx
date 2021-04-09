/**
 * title: 带搜索框
 * desc: 展开后可对选项进行搜索。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option } = FcSelect;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

export default () => {
  return (
    <>
      <FcSelect
        showSearch
        style={{ width: 300 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </FcSelect>
    </>
  );
};
