/**
 * title: 栅格左右偏移
 * desc: 灰色div容器总宽为 24列， 第一行中设置 offset={6} 使元素偏移 6 列，第一行中设置 offset={12} 使元素偏移 12 列
 */

import React from 'react';
import { FcCol, FcRow } from '@ngfed/fc-components';

const boxStyle = { background: '#eee', margin: '8px', border: '1px solid black' };
export default () => {
  return (
    <>
      <div style={boxStyle}>
        <div>offset=6</div>
        <FcRow>
          <FcCol span={12} offset={6}>
            <div style={{ height: '50px', backgroundColor: '#00a0e9' }}>col-12 col-offset-6</div>
          </FcCol>
        </FcRow>
        <div>offset=12</div>
        <FcRow>
          <FcCol span={12} offset={12}>
            <div style={{ height: '50px', backgroundColor: '#00a0e9' }}>col-12 col-offset-6</div>
          </FcCol>
        </FcRow>
      </div>
    </>
  );
};
