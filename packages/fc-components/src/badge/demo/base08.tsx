/**
 * title: 多彩徽标
 * desc: 我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
 */

import React from 'react';
import { FcBadge, FcDivider } from '@ngfed/fc-components';

export default () => {
  const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ];

  return (
    <>
      <FcDivider orientation="left">Presets</FcDivider>
      <div>
        {colors.map((color) => (
          <div key={color}>
            <FcBadge color={color} text={color} />
          </div>
        ))}
      </div>
      <FcDivider orientation="left">Custom</FcDivider>
      <div>
        <FcBadge color="#f50" text="#f50" />
        <br />
        <FcBadge color="#2db7f5" text="#2db7f5" />
        <br />
        <FcBadge color="#87d068" text="#87d068" />
        <br />
        <FcBadge color="#108ee9" text="#108ee9" />
      </div>
    </>
  );
};

// .ant-tag {
//     margin-bottom: 8px;
//   }
