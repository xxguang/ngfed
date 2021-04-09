/**
 * title: 基本使用
 * desc: 省市区级联<br />可通过数组的方式指定默认值<br />也可以在options中通过`disabled`指定禁用字段。
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
    disabled: true,
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
      <FcCascader options={options} onChange={onChange} placeholder="Please select" />
      &nbsp;&nbsp;
      <FcCascader
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        options={options}
        onChange={onChange}
      />
    </>
  );
};
