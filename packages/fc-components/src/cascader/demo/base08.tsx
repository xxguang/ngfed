/**
 * title: 搜索
 * desc: 可以直接搜索选项并选择。<br />`FcCascader[showSearch]` 暂不支持服务端搜索。
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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

export default () => {
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }

  function filter(inputValue, path) {
    return path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

  return (
    <>
      <FcCascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
        showSearch={{ filter }}
      />
    </>
  );
};
