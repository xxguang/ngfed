/**
 * title: 基本使用
 * desc: 基本使用
 */

import React from 'react';
import { FcMentions } from '@ngfed/fc-components';

const { Option } = FcMentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

export default () => {
  return (
    <>
      <FcMentions
        style={{ width: '100%' }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
      >
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </FcMentions>
    </>
  );
};
