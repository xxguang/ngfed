/**
 * title: 单选组合 - 配合 name 使用
 * desc: 可以为 Radio.Group 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。
 */

import React from 'react';
import { FcRadio } from '@ngfed/fc-components';

const App = () => (
  <FcRadio.Group name="radiogroup" defaultValue={1}>
    <FcRadio value={1}>A</FcRadio>
    <FcRadio value={2}>B</FcRadio>
    <FcRadio value={3}>C</FcRadio>
    <FcRadio value={4}>D</FcRadio>
  </FcRadio.Group>
);

export default () => {
  return (
    <>
      <App />
    </>
  );
};
