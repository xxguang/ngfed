/**
 * title: 自定义字段名
 * desc: 自定义字段名。
 */

import React from 'react';
import { FcCascader } from '@ngfed/fc-components';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default () => {
  function onChange(value) {
    console.log(value);
  }

  return (
    <>
      <FcCascader
        fieldNames={{ label: 'name', value: 'code', children: 'items' }}
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />
    </>
  );
};
