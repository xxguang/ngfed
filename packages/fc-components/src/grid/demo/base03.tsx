/**
 * title: align 垂直对齐
 * desc: 子元素垂直对齐。
 */

import React from 'react';
import { FcCol, FcRow, FcDivider } from '@ngfed/fc-components';

import './base01.css';

const style = { background: '#0092ff', padding: '8px 0' };
const DemoBox = (props) => (
  <div className={`height-${props.value} gutter-box`}>{props.children}</div>
);
export default () => {
  return (
    <>
      <FcDivider orientation="left">Align Top</FcDivider>
      <FcRow justify="space-between" align="top">
        <FcCol span={4}>
          <DemoBox value={100}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={50}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={120}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={80}>FcCol-4</DemoBox>
        </FcCol>
      </FcRow>

      <FcDivider orientation="left">Align Middle</FcDivider>
      <FcRow justify="space-between" align="middle">
        <FcCol span={4}>
          <DemoBox value={100}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={50}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={120}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={80}>FcCol-4</DemoBox>
        </FcCol>
      </FcRow>

      <FcDivider orientation="left">Align Bottom</FcDivider>
      <FcRow justify="space-between" align="bottom">
        <FcCol span={4}>
          <DemoBox value={100}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={50}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={120}>FcCol-4</DemoBox>
        </FcCol>
        <FcCol span={4}>
          <DemoBox value={80}>FcCol-4</DemoBox>
        </FcCol>
      </FcRow>
    </>
  );
};
