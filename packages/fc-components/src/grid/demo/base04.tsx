/**
 * title: justify 水平对齐
 * desc: 子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。
 */

import React from 'react';
import { FcCol, FcRow, FcDivider } from '@ngfed/fc-components';
import './base01.css';

export default () => {
  return (
    <>
      <FcDivider orientation="left"> start </FcDivider>
      <FcRow justify="start">
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
      </FcRow>

      <FcDivider orientation="left"> center </FcDivider>
      <FcRow justify="center">
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
      </FcRow>

      <FcDivider orientation="left"> end </FcDivider>
      <FcRow justify="end">
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
      </FcRow>

      <FcDivider orientation="left"> space-between</FcDivider>
      <FcRow justify="space-between">
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
      </FcRow>

      <FcDivider orientation="left"> space-around</FcDivider>
      <FcRow justify="space-around">
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
        <FcCol className="gutter-box" span={4}>
          FcCol-4
        </FcCol>
      </FcRow>
    </>
  );
};
