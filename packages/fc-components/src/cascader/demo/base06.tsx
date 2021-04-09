/**
 * title: 自定义已选项
 * desc: 例如给最后一项加上邮编链接。
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
            code: 752100,
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
            code: 453400,
          },
        ],
      },
    ],
  },
];

export default () => {
  function handleAreaClick(e, label, option) {
    e.stopPropagation();
    console.log('clicked', label, option);
  }

  const displayRender = (labels, selectedOptions) =>
    labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });

  return (
    <>
      <FcCascader
        options={options}
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        displayRender={displayRender}
        style={{ width: '100%' }}
      />
    </>
  );
};
