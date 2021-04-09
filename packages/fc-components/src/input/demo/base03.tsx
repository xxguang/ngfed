/**
 * title: 前置/后置标签
 * desc: 用于配置一些固定组合。
 */

import React from 'react';
import { FcInput, FcSelect } from '@ngfed/fc-components';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = FcSelect;

const selectBefore = (
  <FcSelect defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </FcSelect>
);
const selectAfter = (
  <FcSelect defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </FcSelect>
);

export default () => {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <FcInput addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <FcInput addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <FcInput addonAfter={<SettingOutlined />} defaultValue="mysite" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <FcInput addonBefore="http://" suffix=".com" defaultValue="mysite" />
      </div>
    </>
  );
};
