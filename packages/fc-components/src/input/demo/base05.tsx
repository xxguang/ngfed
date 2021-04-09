/**
 * title: 输入框的组合
 * desc: 输入框的组合展现。
 */

import React from 'react';
import { FcInput, FcSelect } from '@ngfed/fc-components';

const { Option } = FcSelect;

const App = () => (
  <div>
    <FcInput.Group compact>
      <FcInput style={{ width: '20%' }} defaultValue="0571" />
      <FcInput style={{ width: '30%' }} defaultValue="26888888" />
    </FcInput.Group>
    <br />
    <FcInput.Group compact>
      <FcSelect defaultValue="Zhejiang">
        <Option value="Zhejiang">Zhejiang</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </FcSelect>
      <FcInput style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
    </FcInput.Group>
  </div>
);

export default () => {
  return <App />;
};
