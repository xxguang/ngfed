/**
 * title: 大小
 * desc: 不同大小的级联选择器。
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
      <FcCascader size="large" options={options} onChange={onChange} />
      <br />
      <br />
      <FcCascader options={options} onChange={onChange} />
      <br />
      <br />
      <FcCascader size="small" options={options} onChange={onChange} />
      <br />
      <br />
    </>
  );
};
