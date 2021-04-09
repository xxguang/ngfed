/**
 * title: 区块间隔
 * desc: 栅格常常需要和间隔进行配合，你可以使用 FcRow 的 gutter 属性
 */

import React from 'react';
import { FcCol, FcRow } from '@ngfed/fc-components';

const style = { background: '#0092ff', padding: '8px 0' };
export default () => {
  return (
    <>
      <div> gutter=16 </div>
      <FcRow gutter={16}>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
      </FcRow>

      <div> gutter=[16, 16] </div>
      <FcRow gutter={[16, 16]}>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
      </FcRow>

      <div> gutter=[16, object ] </div>
      <FcRow gutter={[16, { xs: 8, sm: 16, md: 24 }]}>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
        <FcCol span={6}>
          <div style={style}>FcCol-6</div>
        </FcCol>
      </FcRow>
    </>
  );
};
