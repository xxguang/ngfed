/**
 * title: 移入展开
 * desc: 通过移入展开下级菜单，点击完成选择。
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
  // Just show the latest item.
  function displayRender(label) {
    return label[label.length - 1];
  }

  function onChange(value) {
    console.log(value);
  }

  return (
    <>
      <FcCascader
        options={options}
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
      />
    </>
  );
};
