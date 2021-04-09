/**
 * title: 基本栅格
 * desc: 从堆叠到水平排列。<br/> 使用单一的一组 FcRow 和 FcCol 栅格组件，就可以创建一个基本的栅格系统，所有列（FcCol）必须放在 FcRow 内。
 */

import React from 'react';
import { FcCol, FcRow } from '@ngfed/fc-components';
import './base01.css';

export default () => {
  return (
    <>
      <FcRow>
        <FcCol className="gutter-box" span={24}>
          FcCol-24
        </FcCol>
      </FcRow>
      <br />
      <FcRow>
        <FcCol className="gutter-box" span={12}>
          FcCol-12
        </FcCol>
        <FcCol className="gutter-box" span={12}>
          FcCol-12
        </FcCol>
      </FcRow>
      <br />
      <FcRow>
        <FcCol className="gutter-box" span={8}>
          FcCol-8
        </FcCol>
        <FcCol className="gutter-box" span={8}>
          FcCol-8
        </FcCol>
        <FcCol className="gutter-box" span={8}>
          FcCol-8
        </FcCol>
      </FcRow>
      <br />
      <FcRow>
        <FcCol className="gutter-box" span={6}>
          FcCol-6
        </FcCol>
        <FcCol className="gutter-box" span={6}>
          FcCol-6
        </FcCol>
        <FcCol className="gutter-box" span={6}>
          FcCol-6
        </FcCol>
        <FcCol className="gutter-box" span={6}>
          FcCol-6
        </FcCol>
      </FcRow>
    </>
  );
};
