/**
 * title: 相对自身位置偏移
 * desc: 在本例子中 红色列是正常排版，蓝色列分别设置了`push={2}`使得自身往后（右边）偏移了2个单元， 设置`pull={2}`往前（左边）偏移2个单元
 */

import React from 'react';
import { FcCol, FcRow } from '@ngfed/fc-components';

const boxStyle = { background: '#eee', margin: '8px', border: '1px solid black' };
export default () => {
  return (
    <>
      <div style={boxStyle}>
        <div>push=2</div>
        <FcRow>
          <FcCol span={6}>
            <div style={{ height: '50px', backgroundColor: 'red' }}>col-6</div>
          </FcCol>
          <FcCol span={6} push={2}>
            <div style={{ height: '50px', backgroundColor: '#00a0e9' }}>col-6 col-push-2</div>
          </FcCol>
        </FcRow>
        <div>pull=2</div>
        <FcRow>
          <FcCol span={6}>
            <div style={{ height: '50px', backgroundColor: 'red' }}>col-6</div>
          </FcCol>
          <FcCol span={6} pull={2}>
            <div style={{ height: '50px', backgroundColor: '#00a0e9' }}>col-6 col-pull-2</div>
          </FcCol>
        </FcRow>
      </div>
    </>
  );
};
