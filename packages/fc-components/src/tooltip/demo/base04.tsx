/**
 * title: 多彩文字提示
 * desc: 我们添加了多种预设色彩的文字提示样式，用作不同场景使用。
 */

import React from 'react';
import { FcTooltip, FcButton, FcDivider } from '@ngfed/fc-components';
import './base04.css';

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
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

export default () => {
  return (
    <>
      <FcDivider orientation="left">Presets</FcDivider>
      <div>
        {colors.map((color) => (
          <FcTooltip title="prompt text" color={color} key={color}>
            <FcButton>{color}</FcButton>
          </FcTooltip>
        ))}
      </div>
      <FcDivider orientation="left">Custom</FcDivider>
      <div>
        {customColors.map((color) => (
          <FcTooltip title="prompt text" color={color} key={color}>
            <FcButton>{color}</FcButton>
          </FcTooltip>
        ))}
      </div>
    </>
  );
};
